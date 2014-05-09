#!/bin/bash

tag="${1:-tumblrtag305}"
firehose="http://localhost:3000/firehose/asset/${tag}"
collins="http://localhost:9000/api/asset/${tag}/status"

echo "Moving ${tag} to unallocated"
curl --basic -u blake:admin:first -d status=Unallocated -d state=Running -d reason='gabe unallocating' $collins
curl --data-urlencode "" $firehose
sleep 5s

echo "Moving ${tag} to provisioning"
curl --basic -u blake:admin:first -d status=Provisioning -d state=Running -d reason='gabe provisioning' $collins
curl --data-urlencode "" $firehose
sleep 5s

echo "Moving ${tag} to provisioned"
curl --basic -u blake:admin:first -d status=Provisioned -d state=Running -d reason='gabe provisioning' $collins
curl --data-urlencode "" $firehose
sleep 5s

echo "Moving ${tag} to Allocated"
curl --basic -u blake:admin:first -d status=Allocated -d state=Running -d reason='gabe allocating' $collins
curl --data-urlencode "" $firehose
