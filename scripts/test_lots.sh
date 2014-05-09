#!/bin/bash

for i in $(seq 1 5) ; do
  t="$((($RANDOM % 3 + 2)))"
  ./test_provision.sh tumblrtag30$i &
  echo "sleeping $t"
  sleep $t
done
