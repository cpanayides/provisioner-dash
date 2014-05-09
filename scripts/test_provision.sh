#!/bin/bash

tag="${1:-tumblrtag305}"
firehose="http://localhost:3000/firehose/asset/${tag}"
collins="http://localhost:9000/api/asset/${tag}"

for i in 1 2 3 4 ; do
  t=tumblrtag30$i
  echo "Moving ${t} to provisioning"
  curl --basic -u blake:admin:first -d status=Provisioning -d state=Running -d reason='gabe unallocating' http://localhost:9000/api/asset/$t/status
  curl --data-urlencode "" http://localhost:3000/firehose/asset/${t}
done

echo "Moving ${tag} to unallocated"
curl --basic -u blake:admin:first -d status=Unallocated -d state=Running -d reason='gabe unallocating' $collins/status
curl --data-urlencode "" $firehose
sleep 5s

echo "Moving ${tag} to provisioning"
curl --basic -u blake:admin:first -d status=Provisioning -d state=Running -d reason='gabe provisioning' $collins/status
curl --data-urlencode "" $firehose
sleep 5s

# set provisioning process json
ppj='{"json_class":"Collins::State::Specification","data":{"name":"start","description":"Asset has made kickstart request to Phil","timestamp":1394253169,"extras":[]}}'
curl --basic -u blake:admin:first --data-urlencode "attribute=PROVISIONING_PROCESS_JSON;$ppj" $collins
curl --data-urlencode "" $firehose
sleep 3s
ppj='{"json_class":"Collins::State::Specification","data":{"name":"vlan_moved_to_provisioning","description":"Asset has made kickstart request to Phil","timestamp":1394253169,"extras":[]}}'
curl --basic -u blake:admin:first --data-urlencode "attribute=PROVISIONING_PROCESS_JSON;$ppj" $collins
curl --data-urlencode "" $firehose
sleep 3s
curl --basic -u blake:admin:first --data-urlencode "attribute=PROVISIONING_PREP_COMPLETE;true" $collins
curl --data-urlencode "" $firehose
sleep 3s
ppj='{"json_class":"Collins::State::Specification","data":{"name":"ipxe_seen","description":"Asset has made kickstart request to Phil","timestamp":1394253169,"extras":[]}}'
curl --basic -u blake:admin:first --data-urlencode "attribute=PROVISIONING_PROCESS_JSON;$ppj" $collins
curl --data-urlencode "" $firehose
sleep 3s
ppj='{"json_class":"Collins::State::Specification","data":{"name":"kickstart_seen","description":"Asset has made kickstart request to Phil","timestamp":1394253169,"extras":[]}}'
curl --basic -u blake:admin:first --data-urlencode "attribute=PROVISIONING_PROCESS_JSON;$ppj" $collins
curl --data-urlencode "" $firehose
sleep 3s
ppj='{"json_class":"Collins::State::Specification","data":{"name":"kickstart_started","description":"Asset has made kickstart request to Phil","timestamp":1394253169,"extras":[]}}'
curl --basic -u blake:admin:first --data-urlencode "attribute=PROVISIONING_PROCESS_JSON;$ppj" $collins
curl --data-urlencode "" $firehose
sleep 3s
ppj='{"json_class":"Collins::State::Specification","data":{"name":"kickstart_post_started","description":"Asset has made kickstart request to Phil","timestamp":1394253169,"extras":[]}}'
curl --basic -u blake:admin:first --data-urlencode "attribute=PROVISIONING_PROCESS_JSON;$ppj" $collins
curl --data-urlencode "" $firehose
sleep 3s
ppj='{"json_class":"Collins::State::Specification","data":{"name":"kickstart_finished","description":"Asset has made kickstart request to Phil","timestamp":1394253169,"extras":[]}}'
curl --basic -u blake:admin:first --data-urlencode "attribute=PROVISIONING_PROCESS_JSON;$ppj" $collins
curl --data-urlencode "" $firehose
sleep 3s
ppj='{"json_class":"Collins::State::Specification","data":{"name":"vlan_moved_to_production","description":"Asset has made kickstart request to Phil","timestamp":1394253169,"extras":[]}}'
curl --basic -u blake:admin:first --data-urlencode "attribute=PROVISIONING_PROCESS_JSON;$ppj" $collins
curl --data-urlencode "" $firehose
sleep 3s
ppj='{"json_class":"Collins::State::Specification","data":{"name":"reachable_by_ip","description":"Asset has made kickstart request to Phil","timestamp":1394253169,"extras":[]}}'
curl --basic -u blake:admin:first --data-urlencode "attribute=PROVISIONING_PROCESS_JSON;$ppj" $collins
curl --data-urlencode "" $firehose
sleep 3s
curl --basic -u blake:admin:first --data-urlencode "attribute=PROVISIONING_PROCESS_JSON;" $collins
curl --data-urlencode "" $firehose
sleep 3s

echo "Moving ${tag} to provisioned"
curl --basic -u blake:admin:first -d status=Provisioned -d state=Running -d reason='gabe provisioning' $collins/status
curl --data-urlencode "" $firehose
sleep 5s

echo "Moving ${tag} to Allocated"
curl --basic -u blake:admin:first -d status=Allocated -d state=Running -d reason='gabe allocating' $collins/status
curl --data-urlencode "" $firehose



