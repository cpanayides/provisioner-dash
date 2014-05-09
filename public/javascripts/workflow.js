var provisioning_workflow = [
  {
    name: "start",
    description: "VLAN is changing to provisioning, asset is rebooting",
    expires: 30*60,
    index: 1
  },
  {
    name: "vlan_moved_to_provisioning",
    description: "Moved to provisioning VLAN",
    expires: 15*60,
    index: 2
  },
  {
    name: "provision_prep",
    description: "Provisioning preparation: format RAID, update hardware report, etc",
    expires: 15*60,
    index: 3
  },
  {
    name: "ipxe_seen",
    description: "Has DHCP'd and made iPXE request to Phil",
    expires: 5*60,
    index: 4
  },
  {
    name: "kickstart_seen",
    description: "Kickstart file has been downloaded from Phil",
    expires: 15*60,
    index: 5
  },
  {
    name: "kickstart_started",
    description: "Kickstart formatting and package installation has begun",
    expires: 45*60,
    index: 6
  },
  {
    name: "kickstart_post_started",
    description: "Asset has started kickstart post section and is running puppet",
    expires: 45*60,
    index: 7
  },
  {
    name: "kickstart_finished",
    description: "Asset has finished provisioning and is now provisioned",
    expires: 15*60,
    index: 8
  },
  {
    name: "vlan_move_to_production",
    description: "Moved to production VLAN",
    expires: 15*60,
    index: 9
  },
  {
    name: "reachable_by_ip",
    description: "Machine is pinging and online",
    expires: 10*60,
    index: 10
  },
  {
    name: "done",
    description: "Machine is pinging and online",
    expires: 10*60,
    index: 11
  },
];

var provisioningProgress = function(asset){
  var ppj = asset.get('PROVISIONING_PROCESS_JSON');
  var s = asset.get('STATUS');
  console.log(asset);
  var state = {};
  if (s === "Provisioned" && _.isUndefined(ppj)) {
    // we are done!
    state = provisioning_workflow.slice(-1)[0];
  } else if (s === "Provisioning" && !_.isUndefined(ppj)){
    var pp = JSON.parse(ppj);
    var state_name = pp.data.name;
    if (state_name === "vlan_moved_to_provisioning" && asset.get('PROVISIONING_PREP_COMPLETE')){
      //we should be in provisioning_prep
      state = _.find(provisioning_workflow,function(x){
        return x.name === "provision_prep";
      });
    } else {
      // we are in a real workflow state, just return that
      state = _.find(provisioning_workflow,function(x){ return x.name === state_name; });
    }
  } else {
    console.log("No idea what state " + asset.get('TAG') + " is in, assuming start");
    state = provisioning_workflow.slice(0,1)[0];
  }
  console.log("returning state:");
  console.log(state);
  return state;
}

