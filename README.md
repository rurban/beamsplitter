# :stars: [beamsplitter](https://github.com/dosyago/beamsplitter) ![npm downloads](https://img.shields.io/npm/dt/beamsplitter) ![version](https://img.shields.io/npm/v/beamsplitter)

A very simple S-box only hash.

# Get

```console
npm i beamsplitter
```

## accolades

Passes Dieharder.

## work in progress

1. c source to run SMHasher tests
2. browser compatible build

## Test vectors

```text
0000000000                       1f8f4631de2d2b25
0000000abc                       2f79311058a7cb5e
0000000abd                       e17250d28fdfebe1
000000cris                       ad9795c229dfcad3
00000000Foo © bar 𝌆 baz ☃ qux   55f4b5a313fe8af7
````

## Dieharder test results

```txt
#=============================================================================#
#            dieharder version 3.31.1 Copyright 2003 Robert G. Brown          #
#=============================================================================#
   rng_name    |           filename             |rands/second|
        mt19937|                      out.bs.bin|  1.27e+08  |
#=============================================================================#
        test_name   |ntup| tsamples |psamples|  p-value |Assessment
#=============================================================================#
   diehard_birthdays|   0|       100|     100|0.24672224|  PASSED
      diehard_operm5|   0|   1000000|     100|0.86756304|  PASSED
  diehard_rank_32x32|   0|     40000|     100|0.36846890|  PASSED
    diehard_rank_6x8|   0|    100000|     100|0.35438687|  PASSED
   diehard_bitstream|   0|   2097152|     100|0.44426423|  PASSED
        diehard_opso|   0|   2097152|     100|0.18338238|  PASSED
        diehard_oqso|   0|   2097152|     100|0.36445942|  PASSED
         diehard_dna|   0|   2097152|     100|0.05589872|  PASSED
diehard_count_1s_str|   0|    256000|     100|0.55079949|  PASSED
diehard_count_1s_byt|   0|    256000|     100|0.80024758|  PASSED
 diehard_parking_lot|   0|     12000|     100|0.56954935|  PASSED
    diehard_2dsphere|   2|      8000|     100|0.37941315|  PASSED
    diehard_3dsphere|   3|      4000|     100|0.90057218|  PASSED
     diehard_squeeze|   0|    100000|     100|0.84598743|  PASSED
        diehard_sums|   0|       100|     100|0.01955341|  PASSED
        diehard_runs|   0|    100000|     100|0.28401112|  PASSED
        diehard_runs|   0|    100000|     100|0.99083453|  PASSED
       diehard_craps|   0|    200000|     100|0.76161367|  PASSED
       diehard_craps|   0|    200000|     100|0.78185101|  PASSED
 marsaglia_tsang_gcd|   0|  10000000|     100|0.16288143|  PASSED
 marsaglia_tsang_gcd|   0|  10000000|     100|0.97730684|  PASSED
         sts_monobit|   1|    100000|     100|0.87566659|  PASSED
            sts_runs|   2|    100000|     100|0.17991919|  PASSED
          sts_serial|   1|    100000|     100|0.76107087|  PASSED
          sts_serial|   2|    100000|     100|0.86344884|  PASSED
          sts_serial|   3|    100000|     100|0.96526723|  PASSED
          sts_serial|   3|    100000|     100|0.99405465|  PASSED
          sts_serial|   4|    100000|     100|0.63635298|  PASSED
          sts_serial|   4|    100000|     100|0.03961769|  PASSED
          sts_serial|   5|    100000|     100|0.32435330|  PASSED
          sts_serial|   5|    100000|     100|0.98549496|  PASSED
          sts_serial|   6|    100000|     100|0.08621325|  PASSED
          sts_serial|   6|    100000|     100|0.57795685|  PASSED
          sts_serial|   7|    100000|     100|0.10896358|  PASSED
          sts_serial|   7|    100000|     100|0.67538887|  PASSED
          sts_serial|   8|    100000|     100|0.95236992|  PASSED
          sts_serial|   8|    100000|     100|0.02314287|  PASSED
          sts_serial|   9|    100000|     100|0.46028163|  PASSED
          sts_serial|   9|    100000|     100|0.56933085|  PASSED
          sts_serial|  10|    100000|     100|0.91053073|  PASSED
          sts_serial|  10|    100000|     100|0.40814421|  PASSED
          sts_serial|  11|    100000|     100|0.86955684|  PASSED
          sts_serial|  11|    100000|     100|0.51021947|  PASSED
          sts_serial|  12|    100000|     100|0.71688562|  PASSED
          sts_serial|  12|    100000|     100|0.77195545|  PASSED
          sts_serial|  13|    100000|     100|0.67648724|  PASSED
          sts_serial|  13|    100000|     100|0.59253023|  PASSED
          sts_serial|  14|    100000|     100|0.03182104|  PASSED
          sts_serial|  14|    100000|     100|0.17926062|  PASSED
          sts_serial|  15|    100000|     100|0.03760870|  PASSED
          sts_serial|  15|    100000|     100|0.11617544|  PASSED
          sts_serial|  16|    100000|     100|0.03928257|  PASSED
          sts_serial|  16|    100000|     100|0.46202569|  PASSED
         rgb_bitdist|   1|    100000|     100|0.58473081|  PASSED
         rgb_bitdist|   2|    100000|     100|0.63642930|  PASSED
         rgb_bitdist|   3|    100000|     100|0.50615655|  PASSED
         rgb_bitdist|   4|    100000|     100|0.89963187|  PASSED
         rgb_bitdist|   5|    100000|     100|0.65571996|  PASSED
         rgb_bitdist|   6|    100000|     100|0.96682576|  PASSED
         rgb_bitdist|   7|    100000|     100|0.42576416|  PASSED
         rgb_bitdist|   8|    100000|     100|0.40707375|  PASSED
         rgb_bitdist|   9|    100000|     100|0.82116208|  PASSED
         rgb_bitdist|  10|    100000|     100|0.69245107|  PASSED
         rgb_bitdist|  11|    100000|     100|0.13169497|  PASSED
         rgb_bitdist|  12|    100000|     100|0.93479625|  PASSED
rgb_minimum_distance|   2|     10000|    1000|0.90822794|  PASSED
rgb_minimum_distance|   3|     10000|    1000|0.70211235|  PASSED
rgb_minimum_distance|   4|     10000|    1000|0.50342075|  PASSED
rgb_minimum_distance|   5|     10000|    1000|0.72528680|  PASSED
    rgb_permutations|   2|    100000|     100|0.69702866|  PASSED
    rgb_permutations|   3|    100000|     100|0.16663950|  PASSED
    rgb_permutations|   4|    100000|     100|0.98350584|  PASSED
    rgb_permutations|   5|    100000|     100|0.75539090|  PASSED
      rgb_lagged_sum|   0|   1000000|     100|0.44816474|  PASSED
      rgb_lagged_sum|   1|   1000000|     100|0.29107079|  PASSED
      rgb_lagged_sum|   2|   1000000|     100|0.67124509|  PASSED
      rgb_lagged_sum|   3|   1000000|     100|0.46205576|  PASSED
      rgb_lagged_sum|   4|   1000000|     100|0.10553558|  PASSED
      rgb_lagged_sum|   5|   1000000|     100|0.33231911|  PASSED
      rgb_lagged_sum|   6|   1000000|     100|0.19452714|  PASSED
      rgb_lagged_sum|   7|   1000000|     100|0.21053587|  PASSED
      rgb_lagged_sum|   8|   1000000|     100|0.77605894|  PASSED
      rgb_lagged_sum|   9|   1000000|     100|0.61211593|  PASSED
      rgb_lagged_sum|  10|   1000000|     100|0.94872748|  PASSED
      rgb_lagged_sum|  11|   1000000|     100|0.91560986|  PASSED
      rgb_lagged_sum|  12|   1000000|     100|0.69546525|  PASSED
      rgb_lagged_sum|  13|   1000000|     100|0.99052601|  PASSED
      rgb_lagged_sum|  14|   1000000|     100|0.14770186|  PASSED
      rgb_lagged_sum|  15|   1000000|     100|0.68454426|  PASSED
      rgb_lagged_sum|  16|   1000000|     100|0.39612251|  PASSED
      rgb_lagged_sum|  17|   1000000|     100|0.84583594|  PASSED
      rgb_lagged_sum|  18|   1000000|     100|0.14888072|  PASSED
      rgb_lagged_sum|  19|   1000000|     100|0.27826107|  PASSED
      rgb_lagged_sum|  20|   1000000|     100|0.80697886|  PASSED
      rgb_lagged_sum|  21|   1000000|     100|0.32797963|  PASSED
      rgb_lagged_sum|  22|   1000000|     100|0.17301146|  PASSED
      rgb_lagged_sum|  23|   1000000|     100|0.99371451|  PASSED
      rgb_lagged_sum|  24|   1000000|     100|0.16349136|  PASSED
      rgb_lagged_sum|  25|   1000000|     100|0.84134581|  PASSED
      rgb_lagged_sum|  26|   1000000|     100|0.50080715|  PASSED
      rgb_lagged_sum|  27|   1000000|     100|0.18029632|  PASSED
      rgb_lagged_sum|  28|   1000000|     100|0.10448283|  PASSED
      rgb_lagged_sum|  29|   1000000|     100|0.95250158|  PASSED
      rgb_lagged_sum|  30|   1000000|     100|0.78741524|  PASSED
      rgb_lagged_sum|  31|   1000000|     100|0.53801403|  PASSED
      rgb_lagged_sum|  32|   1000000|     100|0.35628415|  PASSED
     rgb_kstest_test|   0|     10000|    1000|0.67863361|  PASSED
     dab_bytedistrib|   0|  51200000|       1|0.33887011|  PASSED
             dab_dct| 256|     50000|       1|0.13394638|  PASSED
Preparing to run test 207.  ntuple = 0
        dab_filltree|  32|  15000000|       1|0.34722201|  PASSED
        dab_filltree|  32|  15000000|       1|0.64103161|  PASSED
Preparing to run test 208.  ntuple = 0
       dab_filltree2|   0|   5000000|       1|0.26371652|  PASSED
       dab_filltree2|   1|   5000000|       1|0.35528108|  PASSED
Preparing to run test 209.  ntuple = 0
        dab_monobit2|  12|  65000000|       1|0.53583603|  PASSED


```

# how were the s-boxes generated?

I went to random.org and generated 32 sets of 256 no-repeat numbers between 0 and 255 inclusive.

# are the s-boxes perfect?

I don't know. 
