#!/bin/bash

tag=tumblrtag305
echo "Moving ${tag} to unallocated"
curl --basic -u blake:admin:first -d status=Unallocated -d state=Running -d reason='gabe unallocating' "http://localhost:9000/api/asset/${tag}/status"
echo "sleeping 10s"
sleep 10s

echo "Moving ${tag} to provisioning"
curl --basic -u blake:admin:first -d status=Provisioning -d state=Running -d reason='gabe provisioning' "http://localhost:9000/api/asset/${tag}/status"
echo "sleeping 10s"
sleep 10s

echo "Moving ${tag} to provisioned"
curl --basic -u blake:admin:first -d status=Provisioned -d state=Running -d reason='gabe provisioning' "http://localhost:9000/api/asset/${tag}/status"
echo "sleeping 10s"
sleep 10s

echo "Moving ${tag} to Allocated"
curl --basic -u blake:admin:first -d status=Allocated -d state=Running -d reason='gabe allocating' "http://localhost:9000/api/asset/${tag}/status"
echo "sleeping 10s"
sleep 10s
