import S from './sbox.js';
import UTF8Str from 'utf8str';
import zlib from 'zlib';

  // State mix function 128 bit -> 128 bit

    function mix( s64, s8, box1, box2 ) {
      const x = new ArrayBuffer(16);
      const t = new Uint32Array(x);
      const q = new Uint8Array(x);
      let counter = 0;
      for( let i = 0; i < 8; i++ ) {
        q[i] = s8[i] + counter; 
        q[i] = box1[i][q[i]];
        counter += q[i];
      }

      for( let i = 8; i < 16; i++ ) {
        q[i] = s8[i] + q[i-8];  
        q[i] = box2[i-8][q[i]];
      }

      s64[0] = t[2];
      s64[1] = t[3];
      s64[2] = t[0];
      s64[3] = t[1];
    }

  // Hash round function 

    function round( m64, m8, state64, state8 ) {
      m64.forEach( (val,index) => {
        state64[index % 4] ^= m64[index];
        if ( index & 3 == 0 && index != 0 ) {
          mix( state64, state8, S[0], S[1] );
        }
      });
      mix( state64, state8, S[2], S[3] );
    }

  // main hash function 

    export function hash( msg = '', { out_format : out_format = 'hex', bits: bits = 64 } = {}, seed = 0) {
      if ( typeof msg == 'string' ) {
        msg = new UTF8Str( msg ).bytes;
      }

      const key = new ArrayBuffer(msg.length + (8 - msg.length %8));
      const key8Arr = new Uint8Array(key);
      const key64Arr = new Uint32Array(key);

      const seedbuf = new ArrayBuffer(8);
      const seed64Arr = new Uint32Array(seedbuf);
      const seed8Arr = new Uint8Array(seedbuf);

      const buf = new ArrayBuffer(32);
      const state8 = new Uint8Array(buf);
      const state32 = new Uint32Array(buf);
      const state = new Uint32Array(buf);

      key8Arr.set(msg);

      seed64Arr[0] = seed;
      seed64Arr[1] = seed;

      // Include the number in state initialization
      round( seed64Arr, seed8Arr, state, state8 );
      round( key64Arr, key8Arr, state, state8 );
      round( seed64Arr, seed8Arr, state, state8 );
      round( key64Arr, key8Arr, state, state8 );

      const output = new ArrayBuffer(16);
      const h = new Uint32Array(output);

      // The new combination step
      h[0] = state32[0];
      h[1] = state32[1];
      h[2] = state32[2];
      h[3] = state32[3];
      h[0] += state32[4];
      h[1] += state32[5];
      h[2] += state32[6];
      h[3] += state32[7];


      if ( bits < 128 ) {
        h[0] = h[0] + h[3];
        h[1] = h[1] + h[2];
      }

      if ( bits < 64 ) {
        h[0] = h[0] + h[1];
      }

      let result = '';

      if ( out_format == 'hex' ) {
        result += pad( 8, h[0].toString(16));
        if ( bits > 32 ) {
          result += pad( 8, h[1].toString(16));
        }
        if ( bits > 64 ) {
          result += pad( 8, h[2].toString(16));
          result += pad( 8, h[3].toString(16));
        }
      } else if ( out_format == 'binary' ) {
        const bytes = new Uint8Array(output);
        for(let i = 0; i < bits/8; i++) {
          const v = bytes[i];
          result += String.fromCharCode(v);
        }
      } else if ( out_format == 'bytes' ) {
        result = new Uint8Array(output);
        result = result.slice(0, bits/8);
      } else if ( out_format = 'uint32s' ) {
        result = h.slice(0, bits/32);
      }
      return result;
    }

  // Write to file for test

    export function evaluate( fileName ) {
      try {
        if ( ! process.argv[2] && ! fileName ) {
          console.warn( "Filename for output required" ); 
          return;
        }
      } catch(e) {
        console.warn("Evaluate only runs at the command line in Node.");
        return;
      }
      fileName = fileName || process.argv[2];
      const fs = require('fs'); 
      let max = 1025*1000000;
      let i = 0;
      const out = new Uint8Array(max);
      let HASH = '';
      let threshold = 1000000;

      console.log(`Generating ${max} bytes...`);

      while( i < max ) {
        HASH = hash( HASH, { out_format : 'bytes' } ); // 8 bytes 
        out.set(HASH,i);
        i += HASH.length;
        if ( i > threshold ) {
          threshold += 1000000;
          console.log(`${i} bytes generated...`);
        }
      }

      const buf = Buffer.from(out);

      /**
      const compressed = zlib.gzipSync(buf);
      const rate = -(max-compressed.length)
      console.log(`Done. Compression was ${rate}`);
      **/
      fs.writeFileSync( fileName, buf, 'binary' );
    }

  // Test

    export function test() {
      console.log( pad( 10, '' ), hash() );
      console.log( pad( 10, 'abc'), hash('abc') );
      console.log( pad( 10, 'abd'), hash('abd') );
      console.log( pad( 10, 'cris'), hash('cris') );
      console.log( pad( 30, "Foo © bar 𝌆 baz ☃ qux"), hash("Foo © bar 𝌆 baz ☃ qux") );
    }

  // String padding 

    export function pad( width, str ) {
      const padding = new Array( Math.max( 0, width - str.length ) + 1 ).join('0');
      return padding + str;
    }

