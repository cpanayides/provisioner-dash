var https = require("https");
var querystring = require("querystring");
var _ = require('underscore');
var Asset = require('../models/asset');
var fs = require('fs');

//read in collins credentials
var creds = JSON.parse(fs.readFileSync('./conf/collins.json'));

var s = [
  {
    "ASSET": {
      "ID": 2293,
      "TAG": "005186",
      "STATE": {
        "ID": 3,
        "STATUS": null,
        "NAME": "RUNNING",
        "LABEL": "Running",
        "DESCRIPTION": "A service in this state is operational."
      },
      "STATUS": "Provisioning",
      "TYPE": "SERVER_NODE",
      "CREATED": "2012-08-15T12:51:33",
      "UPDATED": "2014-05-07T15:46:31",
      "DELETED": null
    },
    "HARDWARE": {
      "CPU": [
        {
          "CORES": 6,
          "THREADS": 6,
          "SPEED_GHZ": 2.3,
          "DESCRIPTION": "Opteron (To Be Filled By O.E.M.) Advanced Micro Devices [AMD]",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "CORES": 6,
          "THREADS": 6,
          "SPEED_GHZ": 2.3,
          "DESCRIPTION": "Opteron (To Be Filled By O.E.M.) Advanced Micro Devices [AMD]",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "MEMORY": [
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 0,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 1,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 2,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Samsung M393B1K70DH0-YH9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 3,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 4,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 5,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Samsung M393B1K70DH0-YH9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 6,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 7,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 8,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Samsung M393B1K70DH0-YH9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 9,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 10,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 11,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Samsung M393B1K70DH0-YH9",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "NIC": [
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "04:7d:7b:68:5a:dc",
          "DESCRIPTION": "82576 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "04:7d:7b:68:5a:dd",
          "DESCRIPTION": "82576 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "DISK": [
        {
          "SIZE": 500107862016,
          "SIZE_S": "500107862016",
          "SIZE_HUMAN": "465.76 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST9500620NS",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "BASE": {
        "DESCRIPTION": "Rack Mount Chassis",
        "PRODUCT": "PowerEdge C6105",
        "VENDOR": "Dell Inc."
      }
    },
    "LLDP": {
      "INTERFACES": [
        {
          "NAME": "eth0",
          "CHASSIS": {
            "NAME": "ToR-c101-102-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "28:8a:1c:0d:ae:80"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "1035"
            },
            "DESCRIPTION": "ge-5/0/12.0"
          },
          "VLANS": [
            {
              "ID": 1101,
              "NAME": "C101-102-PROVISIONING"
            }
          ]
        },
        {
          "NAME": "eth1",
          "CHASSIS": {
            "NAME": "ToR-c101-102-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "28:8a:1c:0d:ae:80"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "965"
            },
            "DESCRIPTION": "ge-3/0/36.0"
          },
          "VLANS": [
            {
              "ID": 1101,
              "NAME": "C101-102-PROVISIONING"
            }
          ]
        }
      ]
    },
    "IPMI": {
      "ASSET_ID": 2293,
      "ASSET_TAG": "005186",
      "IPMI_USERNAME": "root",
      "IPMI_PASSWORD": "MetSTsDDdodAOfRs",
      "IPMI_GATEWAY": "172.16.32.1",
      "IPMI_ADDRESS": "172.16.40.192",
      "IPMI_NETMASK": "255.255.240.0",
      "ID": 2690
    },
    "ADDRESSES": [
      {
        "ASSET_ID": 2293,
        "ASSET_TAG": "005186",
        "GATEWAY": "172.17.100.1",
        "ADDRESS": "172.17.100.53",
        "NETMASK": "255.255.255.0",
        "POOL": "C101-102",
        "ID": 7805
      }
    ],
    "POWER": [
      {
        "UNIT_ID": 0,
        "UNITS": [
          {
            "KEY": "POWER_PORT_A",
            "VALUE": "EWR01-PDU008",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip A",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          },
          {
            "KEY": "POWER_OUTLET_A",
            "VALUE": "AA5",
            "TYPE": "POWER_OUTLET",
            "LABEL": "Outlet A",
            "POSITION": 1,
            "IS_REQUIRED": true,
            "UNIQUE": false
          }
        ]
      },
      {
        "UNIT_ID": 1,
        "UNITS": [
          {
            "KEY": "POWER_PORT_B",
            "VALUE": "EWR01-PDU007",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip B",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          },
          {
            "KEY": "POWER_OUTLET_B",
            "VALUE": "AA2",
            "TYPE": "POWER_OUTLET",
            "LABEL": "Outlet B",
            "POSITION": 1,
            "IS_REQUIRED": true,
            "UNIQUE": false
          }
        ]
      }
    ],
    "ATTRIBS": {
      "0": {
        "CHASSIS_TAG": "005186",
        "RACK_POSITION": "EWR01-C102-U12",
        "DISK_STORAGE_TOTAL": "500107862016",
        "CONTACT": "sre-sys@tumblr.com",
        "PRIMARY_ROLE": "DEVEL",
        "POOL": "DEVEL",
        "NODECLASS": "devel6node",
        "SYSTEM_PASSWORD": "NndLJUzWYavK",
        "HOSTNAME": "dev6-mschenck-685bf155.ewr01.tumblr.net",
        "SUFFIX": "mschenck",
        "MIGRATION": "1.0",
        "PROVISIONING_PROCESS_JSON": "{\"json_class\":\"Collins::State::Specification\",\"data\":{\"name\":\"kickstart_post_started\",\"description\":\"Asset has started kickstart post section\",\"timestamp\":\"1399491988\"}}",
        "CHASSIS_POSITION": "03",
        "D2_CUTOFF": "OFF",
        "REDIS_INSTANCE_COUNT": "1",
        "REDIS_FIRST_PORT": "6380",
        "LLDP_VERIFIED": "1356196990",
        "USE_NGINX": "true",
        "IPMI_LOG": "TRUE",
        "SCRIBE_UPGRADE": "true",
        "HARDWARE_PRODUCT": "PowerEdge C6105",
        "OS_VENDOR": "Scientific",
        "OS_RELEASE": "6.4",
        "OS_CODENAME": "Carbon",
        "KERNEL": "2.6.32-358.11.1.el6",
        "HARDWARE_VENDOR": "Dell Inc.",
        "PROVISIONING_PREP_COMPLETE": "true",
        "BUILD_CONTACT": "mschenck",
        "SYSTEM_SERVICE_TAG": "33WT4V1"
      }
    }
  },
  {
    "ASSET": {
      "ID": 3484,
      "TAG": "004437",
      "STATE": {
        "ID": 3,
        "STATUS": null,
        "NAME": "RUNNING",
        "LABEL": "Running",
        "DESCRIPTION": "A service in this state is operational."
      },
      "STATUS": "Provisioning",
      "TYPE": "SERVER_NODE",
      "CREATED": "2013-10-22T14:44:21",
      "UPDATED": "2014-05-07T15:36:39",
      "DELETED": null
    },
    "HARDWARE": {
      "CPU": [
        {
          "CORES": 8,
          "THREADS": 16,
          "SPEED_GHZ": 1.8,
          "DESCRIPTION": "Intel(R) Xeon(R) CPU E5-2650L 0 @ 1.80GHz Intel Corp.",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "CORES": 8,
          "THREADS": 16,
          "SPEED_GHZ": 1.8,
          "DESCRIPTION": "Intel(R) Xeon(R) CPU E5-2650L 0 @ 1.80GHz Intel Corp.",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "MEMORY": [
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 0,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - Hynix Semiconductor (Hyundai Electronics) HMT31GR7EFR4A-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 1,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 2,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - Hynix Semiconductor (Hyundai Electronics) HMT31GR7EFR4A-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 3,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 4,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 5,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 6,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 7,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 8,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - Hynix Semiconductor (Hyundai Electronics) HMT31GR7EFR4A-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 9,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 10,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - Hynix Semiconductor (Hyundai Electronics) HMT31GR7EFR4A-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 11,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 12,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 13,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 14,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 15,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "NIC": [
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "78:45:c4:fa:e1:3b",
          "DESCRIPTION": "I350 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "78:45:c4:fa:e1:3c",
          "DESCRIPTION": "I350 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "DISK": [
        {
          "SIZE": 500107862016,
          "SIZE_S": "500107862016",
          "SIZE_HUMAN": "465.76 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST9500620NS",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "BASE": {
        "DESCRIPTION": "Rack Mount Chassis",
        "PRODUCT": "PowerEdge C6220 (N/A)",
        "VENDOR": "Winbond Electronics"
      }
    },
    "LLDP": {
      "INTERFACES": [
        {
          "NAME": "eth0",
          "CHASSIS": {
            "NAME": "ToR-c511-512-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "b0:a8:6e:06:3f:80"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "820"
            },
            "DESCRIPTION": "ge-2/0/21.0"
          },
          "VLANS": [
            {
              "ID": 1511,
              "NAME": "C511-512-PROVISIONING"
            }
          ]
        },
        {
          "NAME": "eth1",
          "CHASSIS": {
            "NAME": "ToR-c511-512-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "b0:a8:6e:06:3f:80"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "868"
            },
            "DESCRIPTION": "ge-3/0/21.0"
          },
          "VLANS": [
            {
              "ID": 1511,
              "NAME": "C511-512-PROVISIONING"
            }
          ]
        }
      ]
    },
    "IPMI": {
      "ASSET_ID": 3484,
      "ASSET_TAG": "004437",
      "IPMI_USERNAME": "root",
      "IPMI_PASSWORD": "oYCsz2CwcFX9IzVG",
      "IPMI_GATEWAY": "172.16.32.1",
      "IPMI_ADDRESS": "172.16.43.48",
      "IPMI_NETMASK": "255.255.240.0",
      "ID": 3914
    },
    "ADDRESSES": [
      {
        "ASSET_ID": 3484,
        "ASSET_TAG": "004437",
        "GATEWAY": "172.17.154.1",
        "ADDRESS": "172.17.154.8",
        "NETMASK": "255.255.255.128",
        "POOL": "C511-512",
        "ID": 6518
      }
    ],
    "POWER": [
      {
        "UNIT_ID": 0,
        "UNITS": [
          {
            "KEY": "POWER_PORT_A",
            "VALUE": "PDU-C512F.EWR01",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip A",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          },
          {
            "KEY": "POWER_OUTLET_A",
            "VALUE": "AA7",
            "TYPE": "POWER_OUTLET",
            "LABEL": "Outlet A",
            "POSITION": 1,
            "IS_REQUIRED": true,
            "UNIQUE": false
          }
        ]
      },
      {
        "UNIT_ID": 1,
        "UNITS": [
          {
            "KEY": "POWER_PORT_B",
            "VALUE": "PDU-C512B.EWR01",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip B",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          },
          {
            "KEY": "POWER_OUTLET_B",
            "VALUE": "AA7",
            "TYPE": "POWER_OUTLET",
            "LABEL": "Outlet B",
            "POSITION": 1,
            "IS_REQUIRED": true,
            "UNIQUE": false
          }
        ]
      }
    ],
    "ATTRIBS": {
      "0": {
        "CHASSIS_TAG": "004437",
        "RACK_POSITION": "EWR01-C512-U19",
        "DISK_STORAGE_TOTAL": "500107862016",
        "CONTACT": "eng-core@tumblr.com",
        "PRIMARY_ROLE": "SERVICE",
        "SECONDARY_ROLE": "READER",
        "POOL": "REFROG",
        "NODECLASS": "servicenode6",
        "SYSTEM_PASSWORD": "ZAh49qal79VP",
        "HOSTNAME": "service-refrog-94550b8b.ewr01.tumblr.net",
        "SUFFIX": "refrog",
        "PROVISIONING_PROCESS_JSON": "{\"json_class\":\"Collins::State::Specification\",\"data\":{\"name\":\"vlan_moved_to_provisioning\",\"description\":\"Moved to provisioning VLAN\",\"timestamp\":1399491399}}",
        "CHASSIS_POSITION": "02",
        "SCRIBE_UPGRADE": "true",
        "HARDWARE_PRODUCT": "PowerEdge C6220",
        "OS_VENDOR": "CentOS",
        "OS_RELEASE": "5.8",
        "OS_CODENAME": "Final",
        "KERNEL": "2.6.18-308.el5",
        "HARDWARE_VENDOR": "Dell",
        "BUILD_CONTACT": "dan"
      }
    }
  },
  {
    "ASSET": {
      "ID": 3450,
      "TAG": "004423",
      "STATE": {
        "ID": 3,
        "STATUS": null,
        "NAME": "RUNNING",
        "LABEL": "Running",
        "DESCRIPTION": "A service in this state is operational."
      },
      "STATUS": "Provisioning",
      "TYPE": "SERVER_NODE",
      "CREATED": "2013-10-22T14:16:40",
      "UPDATED": "2014-05-07T15:49:28",
      "DELETED": null
    },
    "HARDWARE": {
      "CPU": [
        {
          "CORES": 8,
          "THREADS": 16,
          "SPEED_GHZ": 1.8,
          "DESCRIPTION": "Xeon Intel Corp.",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "CORES": 8,
          "THREADS": 16,
          "SPEED_GHZ": 1.8,
          "DESCRIPTION": "Xeon Intel Corp.",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "MEMORY": [
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 0,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - Hynix Semiconductor (Hyundai Electronics) HMT31GR7EFR4A-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 1,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 2,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - Hynix Semiconductor (Hyundai Electronics) HMT31GR7EFR4A-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 3,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 4,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 5,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 6,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 7,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 8,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - Hynix Semiconductor (Hyundai Electronics) HMT31GR7EFR4A-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 9,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 10,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - Hynix Semiconductor (Hyundai Electronics) HMT31GR7EFR4A-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 11,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 12,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 13,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 14,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 15,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "NIC": [
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "78:45:c4:fb:5f:bf",
          "DESCRIPTION": "I350 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "78:45:c4:fb:5f:c0",
          "DESCRIPTION": "I350 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "DISK": [
        {
          "SIZE": 500107862016,
          "SIZE_S": "500107862016",
          "SIZE_HUMAN": "465.76 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST9500620NS",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "BASE": {
        "DESCRIPTION": "Rack Mount Chassis",
        "PRODUCT": "PowerEdge C6220 (N/A)",
        "VENDOR": "Winbond Electronics"
      }
    },
    "LLDP": {
      "INTERFACES": [
        {
          "NAME": "eth0",
          "CHASSIS": {
            "NAME": "ToR-c511-512-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "b0:a8:6e:06:3f:80"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "830"
            },
            "DESCRIPTION": "ge-2/0/30.0"
          },
          "VLANS": [
            {
              "ID": 1511,
              "NAME": "C511-512-PROVISIONING"
            }
          ]
        },
        {
          "NAME": "eth1",
          "CHASSIS": {
            "NAME": "ToR-c511-512-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "b0:a8:6e:06:3f:80"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "878"
            },
            "DESCRIPTION": "ge-3/0/30.0"
          },
          "VLANS": [
            {
              "ID": 1511,
              "NAME": "C511-512-PROVISIONING"
            }
          ]
        }
      ]
    },
    "IPMI": {
      "ASSET_ID": 3450,
      "ASSET_TAG": "004423",
      "IPMI_USERNAME": "root",
      "IPMI_PASSWORD": "3mQfjpovcUGbQ6Mu",
      "IPMI_GATEWAY": "172.16.32.1",
      "IPMI_ADDRESS": "172.16.43.15",
      "IPMI_NETMASK": "255.255.240.0",
      "ID": 3871
    },
    "ADDRESSES": [
      {
        "ASSET_ID": 3450,
        "ASSET_TAG": "004423",
        "GATEWAY": "172.17.154.1",
        "ADDRESS": "172.17.154.89",
        "NETMASK": "255.255.255.128",
        "POOL": "C511-512",
        "ID": 6755
      }
    ],
    "POWER": [
      {
        "UNIT_ID": 0,
        "UNITS": [
          {
            "KEY": "POWER_PORT_A",
            "VALUE": "PDU-C512F.EWR01",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip A",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          },
          {
            "KEY": "POWER_OUTLET_A",
            "VALUE": "AB6",
            "TYPE": "POWER_OUTLET",
            "LABEL": "Outlet A",
            "POSITION": 1,
            "IS_REQUIRED": true,
            "UNIQUE": false
          }
        ]
      },
      {
        "UNIT_ID": 1,
        "UNITS": [
          {
            "KEY": "POWER_PORT_B",
            "VALUE": "PDU-C512B.EWR01",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip B",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          },
          {
            "KEY": "POWER_OUTLET_B",
            "VALUE": "AB6",
            "TYPE": "POWER_OUTLET",
            "LABEL": "Outlet B",
            "POSITION": 1,
            "IS_REQUIRED": true,
            "UNIQUE": false
          }
        ]
      }
    ],
    "ATTRIBS": {
      "0": {
        "CHASSIS_TAG": "004423",
        "RACK_POSITION": "EWR01-C512-U14",
        "DISK_STORAGE_TOTAL": "500107862016",
        "CONTACT": "eng-core@tumblr.com",
        "PRIMARY_ROLE": "SERVICE",
        "SECONDARY_ROLE": "READER",
        "POOL": "REFROG",
        "NODECLASS": "servicenode6",
        "SYSTEM_PASSWORD": "NLUqDAaKjiMm",
        "HOSTNAME": "service-refrog-3a58e049.ewr01.tumblr.net",
        "LAST_PUPPET_RUN": "2014-05-07T15:49:28",
        "SUFFIX": "refrog",
        "PROVISIONING_PROCESS_JSON": "{\"json_class\":\"Collins::State::Specification\",\"data\":{\"name\":\"kickstart_post_started\",\"description\":\"Asset has started kickstart post section\",\"timestamp\":\"1399492013\"}}",
        "CHASSIS_POSITION": "03",
        "HARDWARE_PRODUCT": "PowerEdge C6220",
        "OS_VENDOR": "CentOS",
        "OS_RELEASE": "5.8",
        "OS_CODENAME": "Final",
        "KERNEL": "2.6.18-308.el5",
        "HARDWARE_VENDOR": "Dell",
        "PROVISIONING_PREP_COMPLETE": "true",
        "BUILD_CONTACT": "dan",
        "SYSTEM_SERVICE_TAG": "7WQKDX1"
      }
    }
  },
  {
    "ASSET": {
      "ID": 3603,
      "TAG": "003818",
      "STATE": {
        "ID": 3,
        "STATUS": null,
        "NAME": "RUNNING",
        "LABEL": "Running",
        "DESCRIPTION": "A service in this state is operational."
      },
      "STATUS": "Provisioning",
      "TYPE": "SERVER_NODE",
      "CREATED": "2013-12-12T15:35:54",
      "UPDATED": "2014-05-07T15:37:38",
      "DELETED": null
    },
    "HARDWARE": {
      "CPU": [
        {
          "CORES": 8,
          "THREADS": 16,
          "SPEED_GHZ": 2.6,
          "DESCRIPTION": "Intel(R) Xeon(R) CPU E5-2670 0 @ 2.60GHz Intel Corp.",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "CORES": 8,
          "THREADS": 16,
          "SPEED_GHZ": 2.6,
          "DESCRIPTION": "Intel(R) Xeon(R) CPU E5-2670 0 @ 2.60GHz Intel Corp.",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "MEMORY": [
        {
          "SIZE": 17179869184,
          "SIZE_S": "17179869184",
          "SIZE_HUMAN": "16.00 GB",
          "BANK": 0,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - 00AD00B300AD HMT42GR7MFR4C-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 17179869184,
          "SIZE_S": "17179869184",
          "SIZE_HUMAN": "16.00 GB",
          "BANK": 1,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - 00AD00B300AD HMT42GR7MFR4C-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 17179869184,
          "SIZE_S": "17179869184",
          "SIZE_HUMAN": "16.00 GB",
          "BANK": 2,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - 00AD00B300AD HMT42GR7MFR4C-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 17179869184,
          "SIZE_S": "17179869184",
          "SIZE_HUMAN": "16.00 GB",
          "BANK": 3,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - 00AD00B300AD HMT42GR7MFR4C-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 4,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 5,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 6,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 7,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 8,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 9,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 10,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 11,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 17179869184,
          "SIZE_S": "17179869184",
          "SIZE_HUMAN": "16.00 GB",
          "BANK": 12,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - 00AD00B300AD HMT42GR7MFR4C-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 17179869184,
          "SIZE_S": "17179869184",
          "SIZE_HUMAN": "16.00 GB",
          "BANK": 13,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - 00AD00B300AD HMT42GR7MFR4C-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 17179869184,
          "SIZE_S": "17179869184",
          "SIZE_HUMAN": "16.00 GB",
          "BANK": 14,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - 00AD00B300AD HMT42GR7MFR4C-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 17179869184,
          "SIZE_S": "17179869184",
          "SIZE_HUMAN": "16.00 GB",
          "BANK": 15,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - 00AD00B300AD HMT42GR7MFR4C-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 16,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 17,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 18,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 19,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 20,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 21,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 22,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 23,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "NIC": [
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "e0:db:55:0d:7b:f6",
          "DESCRIPTION": "NetXtreme BCM5720 Gigabit Ethernet PCIe - Broadcom Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "e0:db:55:0d:7b:f7",
          "DESCRIPTION": "NetXtreme BCM5720 Gigabit Ethernet PCIe - Broadcom Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "e0:db:55:0d:7b:f4",
          "DESCRIPTION": "NetXtreme BCM5720 Gigabit Ethernet PCIe - Broadcom Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "e0:db:55:0d:7b:f5",
          "DESCRIPTION": "NetXtreme BCM5720 Gigabit Ethernet PCIe - Broadcom Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "DISK": [
        {
          "SIZE": 999653638144,
          "SIZE_S": "999653638144",
          "SIZE_HUMAN": "931.00 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Winbond Electronics PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 999653638144,
          "SIZE_S": "999653638144",
          "SIZE_HUMAN": "931.00 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Winbond Electronics PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 999653638144,
          "SIZE_S": "999653638144",
          "SIZE_HUMAN": "931.00 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Winbond Electronics PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 999653638144,
          "SIZE_S": "999653638144",
          "SIZE_HUMAN": "931.00 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Winbond Electronics PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 999653638144,
          "SIZE_S": "999653638144",
          "SIZE_HUMAN": "931.00 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Winbond Electronics PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 999653638144,
          "SIZE_S": "999653638144",
          "SIZE_HUMAN": "931.00 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Winbond Electronics PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 999653638144,
          "SIZE_S": "999653638144",
          "SIZE_HUMAN": "931.00 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Winbond Electronics PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 999653638144,
          "SIZE_S": "999653638144",
          "SIZE_HUMAN": "931.00 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Winbond Electronics PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 999653638144,
          "SIZE_S": "999653638144",
          "SIZE_HUMAN": "931.00 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Winbond Electronics PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 999653638144,
          "SIZE_S": "999653638144",
          "SIZE_HUMAN": "931.00 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Winbond Electronics PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "BASE": {
        "DESCRIPTION": "Rack Mount Chassis",
        "PRODUCT": "PowerEdge R720xd (SKU=NotProvided;ModelName=PowerEdge R720xd)",
        "VENDOR": "Winbond Electronics"
      }
    },
    "LLDP": {
      "INTERFACES": [
        {
          "NAME": "eth0",
          "CHASSIS": {
            "NAME": "ToR-C503-504-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "40:b4:f0:73:a4:80"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "836"
            },
            "DESCRIPTION": "ge-2/0/12.0"
          },
          "VLANS": [
            {
              "ID": 1503,
              "NAME": "C503-504-PROVISIONING"
            }
          ]
        },
        {
          "NAME": "eth1",
          "CHASSIS": {
            "NAME": "ToR-C503-504-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "40:b4:f0:73:a4:80"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "689"
            },
            "DESCRIPTION": "ge-3/0/12.0"
          },
          "VLANS": [
            {
              "ID": 1503,
              "NAME": "C503-504-PROVISIONING"
            }
          ]
        }
      ]
    },
    "IPMI": {
      "ASSET_ID": 3603,
      "ASSET_TAG": "003818",
      "IPMI_USERNAME": "root",
      "IPMI_PASSWORD": "whbPKvt6rLSN0Nid",
      "IPMI_GATEWAY": "172.16.32.1",
      "IPMI_ADDRESS": "172.16.43.136",
      "IPMI_NETMASK": "255.255.240.0",
      "ID": 4063
    },
    "ADDRESSES": [
      {
        "ASSET_ID": 3603,
        "ASSET_TAG": "003818",
        "GATEWAY": "172.17.150.1",
        "ADDRESS": "172.17.150.14",
        "NETMASK": "255.255.255.128",
        "POOL": "C503-504",
        "ID": 6752
      }
    ],
    "POWER": [
      {
        "UNIT_ID": 0,
        "UNITS": [
          {
            "KEY": "POWER_PORT_A",
            "VALUE": "PDU-C504F.EWR01",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip A",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          },
          {
            "KEY": "POWER_OUTLET_A",
            "VALUE": "AB6",
            "TYPE": "POWER_OUTLET",
            "LABEL": "Outlet A",
            "POSITION": 1,
            "IS_REQUIRED": true,
            "UNIQUE": false
          }
        ]
      },
      {
        "UNIT_ID": 1,
        "UNITS": [
          {
            "KEY": "POWER_PORT_B",
            "VALUE": "PDU-C504B.EWR01",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip B",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          },
          {
            "KEY": "POWER_OUTLET_B",
            "VALUE": "AB6",
            "TYPE": "POWER_OUTLET",
            "LABEL": "Outlet B",
            "POSITION": 1,
            "IS_REQUIRED": true,
            "UNIQUE": false
          }
        ]
      }
    ],
    "ATTRIBS": {
      "0": {
        "CHASSIS_TAG": "003818",
        "RACK_POSITION": "EWR01-C504-U25",
        "DISK_STORAGE_TOTAL": "9996536381440",
        "CONTACT": "sre-data@tumblr.com",
        "PRIMARY_ROLE": "DATABASE",
        "NODECLASS": "backupdatabasenode6",
        "SYSTEM_PASSWORD": "drflH2ChHeea",
        "HOSTNAME": "db-backup-976932a5.ewr01.tumblr.net",
        "PROVISIONING_PROCESS_JSON": "{\"json_class\":\"Collins::State::Specification\",\"data\":{\"name\":\"vlan_moved_to_provisioning\",\"description\":\"Moved to provisioning VLAN\",\"timestamp\":1399491458}}",
        "CHASSIS_POSITION": "Not",
        "IDRAC_VERSION": "1.50.50",
        "HARDWARE_PRODUCT": "PowerEdge R720xd",
        "OS_VENDOR": "CentOS",
        "OS_RELEASE": "5.8",
        "OS_CODENAME": "Final",
        "KERNEL": "2.6.18-308.el5",
        "HARDWARE_VENDOR": "Dell Inc.",
        "BUILD_CONTACT": "tchrist",
        "CONTACT_NOTES": "https://confluence.ewr01.tumblr.net/display/TUMBLR/MySQL+architecture"
      }
    }
  },
  {
    "ASSET": {
      "ID": 3619,
      "TAG": "003488",
      "STATE": {
        "ID": 3,
        "STATUS": null,
        "NAME": "RUNNING",
        "LABEL": "Running",
        "DESCRIPTION": "A service in this state is operational."
      },
      "STATUS": "Provisioning",
      "TYPE": "SERVER_NODE",
      "CREATED": "2013-12-13T18:07:29",
      "UPDATED": "2014-05-05T14:04:53",
      "DELETED": null
    },
    "HARDWARE": {
      "CPU": [
        {
          "CORES": 8,
          "THREADS": 16,
          "SPEED_GHZ": 2.6,
          "DESCRIPTION": "Xeon Intel Corp.",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "CORES": 8,
          "THREADS": 16,
          "SPEED_GHZ": 2.6,
          "DESCRIPTION": "Xeon Intel Corp.",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "MEMORY": [
        {
          "SIZE": 17179869184,
          "SIZE_S": "17179869184",
          "SIZE_HUMAN": "16.00 GB",
          "BANK": 0,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - 00AD00B300AD HMT42GR7MFR4C-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 17179869184,
          "SIZE_S": "17179869184",
          "SIZE_HUMAN": "16.00 GB",
          "BANK": 1,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - 00AD00B300AD HMT42GR7MFR4C-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 17179869184,
          "SIZE_S": "17179869184",
          "SIZE_HUMAN": "16.00 GB",
          "BANK": 2,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - 00AD00B300AD HMT42GR7MFR4C-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 17179869184,
          "SIZE_S": "17179869184",
          "SIZE_HUMAN": "16.00 GB",
          "BANK": 3,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - 00AD00B300AD HMT42GR7MFR4C-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 4,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 5,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 6,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 7,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 8,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 9,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 10,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 11,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 17179869184,
          "SIZE_S": "17179869184",
          "SIZE_HUMAN": "16.00 GB",
          "BANK": 12,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - 00AD00B300AD HMT42GR7MFR4C-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 17179869184,
          "SIZE_S": "17179869184",
          "SIZE_HUMAN": "16.00 GB",
          "BANK": 13,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - 00AD00B300AD HMT42GR7MFR4C-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 17179869184,
          "SIZE_S": "17179869184",
          "SIZE_HUMAN": "16.00 GB",
          "BANK": 14,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - 00AD00B300AD HMT42GR7MFR4C-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 17179869184,
          "SIZE_S": "17179869184",
          "SIZE_HUMAN": "16.00 GB",
          "BANK": 15,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - 00AD00B300AD HMT42GR7MFR4C-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 16,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 17,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 18,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 19,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 20,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 21,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 22,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 23,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "NIC": [
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "e0:db:55:0d:7d:7a",
          "DESCRIPTION": "NetXtreme BCM5720 Gigabit Ethernet PCIe - Broadcom Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "e0:db:55:0d:7d:7b",
          "DESCRIPTION": "NetXtreme BCM5720 Gigabit Ethernet PCIe - Broadcom Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "e0:db:55:0d:7d:78",
          "DESCRIPTION": "NetXtreme BCM5720 Gigabit Ethernet PCIe - Broadcom Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "e0:db:55:0d:7d:79",
          "DESCRIPTION": "NetXtreme BCM5720 Gigabit Ethernet PCIe - Broadcom Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "DISK": [
        {
          "SIZE": 799535005696,
          "SIZE_S": "799535005696",
          "SIZE_HUMAN": "744.63 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "DELL PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 799535005696,
          "SIZE_S": "799535005696",
          "SIZE_HUMAN": "744.63 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "DELL PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 999653638144,
          "SIZE_S": "999653638144",
          "SIZE_HUMAN": "931.00 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "DELL PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 799535005696,
          "SIZE_S": "799535005696",
          "SIZE_HUMAN": "744.63 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "DELL PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 999653638144,
          "SIZE_S": "999653638144",
          "SIZE_HUMAN": "931.00 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "DELL PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 799535005696,
          "SIZE_S": "799535005696",
          "SIZE_HUMAN": "744.63 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "DELL PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 799535005696,
          "SIZE_S": "799535005696",
          "SIZE_HUMAN": "744.63 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "DELL PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 999653638144,
          "SIZE_S": "999653638144",
          "SIZE_HUMAN": "931.00 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "DELL PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 799535005696,
          "SIZE_S": "799535005696",
          "SIZE_HUMAN": "744.63 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "DELL PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 999653638144,
          "SIZE_S": "999653638144",
          "SIZE_HUMAN": "931.00 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "DELL PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 799535005696,
          "SIZE_S": "799535005696",
          "SIZE_HUMAN": "744.63 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "DELL PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 799535005696,
          "SIZE_S": "799535005696",
          "SIZE_HUMAN": "744.63 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "DELL PERC H710",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "BASE": {
        "DESCRIPTION": "Rack Mount Chassis",
        "PRODUCT": "PowerEdge R720xd (SKU=NotProvided;ModelName=PowerEdge R720xd)",
        "VENDOR": "Winbond Electronics"
      }
    },
    "LLDP": {
      "INTERFACES": [
        {
          "NAME": "eth0",
          "CHASSIS": {
            "NAME": "ToR-c401-402-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "40:b4:f0:73:cd:80"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "517"
            },
            "DESCRIPTION": "ge-0/0/7.0"
          },
          "VLANS": [
            {
              "ID": 1401,
              "NAME": "C401-402-PROVISIONING"
            }
          ]
        },
        {
          "NAME": "eth1",
          "CHASSIS": {
            "NAME": "ToR-c401-402-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "40:b4:f0:73:cd:80"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "641"
            },
            "DESCRIPTION": "ge-1/0/7.0"
          },
          "VLANS": [
            {
              "ID": 1401,
              "NAME": "C401-402-PROVISIONING"
            }
          ]
        }
      ]
    },
    "IPMI": {
      "ASSET_ID": 3619,
      "ASSET_TAG": "003488",
      "IPMI_USERNAME": "root",
      "IPMI_PASSWORD": "8ZzT3ru6mHo0Irst",
      "IPMI_GATEWAY": "172.16.32.1",
      "IPMI_ADDRESS": "172.16.43.151",
      "IPMI_NETMASK": "255.255.240.0",
      "ID": 4088
    },
    "ADDRESSES": [
      {
        "ASSET_ID": 3619,
        "ASSET_TAG": "003488",
        "GATEWAY": "172.17.142.1",
        "ADDRESS": "172.17.142.34",
        "NETMASK": "255.255.255.128",
        "POOL": "C401-402",
        "ID": 7299
      }
    ],
    "POWER": [
      {
        "UNIT_ID": 0,
        "UNITS": [
          {
            "KEY": "POWER_PORT_A",
            "VALUE": "PDU-C401F.EWR01",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip A",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          },
          {
            "KEY": "POWER_OUTLET_A",
            "VALUE": "AB1",
            "TYPE": "POWER_OUTLET",
            "LABEL": "Outlet A",
            "POSITION": 1,
            "IS_REQUIRED": true,
            "UNIQUE": false
          }
        ]
      },
      {
        "UNIT_ID": 1,
        "UNITS": [
          {
            "KEY": "POWER_PORT_B",
            "VALUE": "PDU-C401B.EWR01",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip B",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          },
          {
            "KEY": "POWER_OUTLET_B",
            "VALUE": "AB1",
            "TYPE": "POWER_OUTLET",
            "LABEL": "Outlet B",
            "POSITION": 1,
            "IS_REQUIRED": true,
            "UNIQUE": false
          }
        ]
      }
    ],
    "ATTRIBS": {
      "0": {
        "CHASSIS_TAG": "003488",
        "RACK_POSITION": "EWR01-C401-U15",
        "DISK_STORAGE_TOTAL": "10394894598144",
        "CONTACT": "sre-data@tumblr.com",
        "PRIMARY_ROLE": "DATABASE",
        "POOL": "TESTING",
        "NODECLASS": "utildatabasenode6",
        "SYSTEM_PASSWORD": "zYyDOtMVtSZ0",
        "HOSTNAME": "db-11b6160b.ewr01.tumblr.net",
        "PROVISIONING_PROCESS_JSON": "{\"json_class\":\"Collins::State::Specification\",\"data\":{\"name\":\"vlan_moved_to_provisioning\",\"description\":\"Moved to provisioning VLAN\",\"timestamp\":1398027997,\"extras\":{\"log\":[{\"count\":0,\"timestamp\":1398003353,\"name\":\"reprovision\",\"result\":true},{\"count\":1,\"timestamp\":1398006337,\"name\":\"reboot_hard\",\"result\":true},{\"count\":2,\"timestamp\":1398006956,\"name\":\"reprovision\",\"result\":true},{\"count\":3,\"timestamp\":1398009955,\"name\":\"reprovision\",\"result\":true},{\"count\":4,\"timestamp\":1398012955,\"name\":\"reprovision\",\"result\":true},{\"count\":5,\"timestamp\":1398015956,\"name\":\"reprovision\",\"result\":true},{\"count\":6,\"timestamp\":1398018955,\"name\":\"reprovision\",\"result\":true},{\"count\":7,\"timestamp\":1398021953,\"name\":\"reprovision\",\"result\":true},{\"count\":8,\"timestamp\":1398024961,\"name\":\"reprovision\",\"result\":true},{\"count\":9,\"timestamp\":1398027958,\"name\":\"reprovision\",\"result\":true}]}}}",
        "ORIGINAL_STATUS": "Maintenance",
        "IDRAC_VERSION": "1.50.50",
        "BUILD_CONTACT": "dallas",
        "CONTACT_NOTES": "https://confluence.ewr01.tumblr.net/display/TUMBLR/MySQL+architecture"
      }
    }
  },
  {
    "ASSET": {
      "ID": 3902,
      "TAG": "003183",
      "STATE": {
        "ID": 3,
        "STATUS": null,
        "NAME": "RUNNING",
        "LABEL": "Running",
        "DESCRIPTION": "A service in this state is operational."
      },
      "STATUS": "Provisioning",
      "TYPE": "SERVER_NODE",
      "CREATED": "2014-03-11T16:58:18",
      "UPDATED": "2014-05-05T14:04:54",
      "DELETED": null
    },
    "HARDWARE": {
      "CPU": [
        {
          "CORES": 6,
          "THREADS": 12,
          "SPEED_GHZ": 2.1,
          "DESCRIPTION": "Intel(R) Xeon(R) CPU E5-2620 v2 @ 2.10GHz Intel Corp.",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "CORES": 6,
          "THREADS": 12,
          "SPEED_GHZ": 2.1,
          "DESCRIPTION": "Intel(R) Xeon(R) CPU E5-2620 v2 @ 2.10GHz Intel Corp.",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "MEMORY": [
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 0,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - Hynix Semiconductor (Hyundai Electronics) HMT41GR7AFR4A-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 1,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 2,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - Hynix Semiconductor (Hyundai Electronics) HMT41GR7AFR4A-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 3,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 4,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 5,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 6,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 7,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 8,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - Hynix Semiconductor (Hyundai Electronics) HMT41GR7AFR4A-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 9,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 10,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1600 MHz (0.6 ns) - Hynix Semiconductor (Hyundai Electronics) HMT41GR7AFR4A-PB",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 11,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 12,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 13,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 14,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 15,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "NIC": [
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "f0:4d:a2:77:35:95",
          "DESCRIPTION": "I350 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "f0:4d:a2:77:35:96",
          "DESCRIPTION": "I350 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "DISK": [
        {
          "SIZE": 500107862016,
          "SIZE_S": "500107862016",
          "SIZE_HUMAN": "465.76 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST9500620NS",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "BASE": {
        "DESCRIPTION": "Rack Mount Chassis",
        "PRODUCT": "PowerEdge C6220 II (N/A)",
        "VENDOR": "Winbond Electronics"
      }
    },
    "LLDP": {
      "INTERFACES": [
        {
          "NAME": "eth0",
          "CHASSIS": {
            "NAME": "ToR-c507-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "b0:a8:6e:82:6e:80"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-24t , version 11.4R6.6 Build date: 2013-01-05 21:07:35 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "533"
            },
            "DESCRIPTION": "ge-0/0/15.0"
          },
          "VLANS": [
            {
              "ID": 108,
              "NAME": "EWR-PROVISIONING"
            }
          ]
        },
        {
          "NAME": "eth1",
          "CHASSIS": {
            "NAME": "ToR-c507-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "b0:a8:6e:82:6e:80"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-24t , version 11.4R6.6 Build date: 2013-01-05 21:07:35 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "619"
            },
            "DESCRIPTION": "ge-1/0/15.0"
          },
          "VLANS": [
            {
              "ID": 108,
              "NAME": "EWR-PROVISIONING"
            }
          ]
        }
      ]
    },
    "IPMI": {
      "ASSET_ID": 3902,
      "ASSET_TAG": "003183",
      "IPMI_USERNAME": "root",
      "IPMI_PASSWORD": "PCR5ZzOy1x1wzAAa",
      "IPMI_GATEWAY": "172.16.32.1",
      "IPMI_ADDRESS": "172.16.44.38",
      "IPMI_NETMASK": "255.255.240.0",
      "ID": 4650
    },
    "ADDRESSES": [
      {
        "ASSET_ID": 3902,
        "ASSET_TAG": "003183",
        "GATEWAY": "172.16.132.1",
        "ADDRESS": "172.16.132.63",
        "NETMASK": "255.255.254.0",
        "POOL": "EWR-ROW5.2",
        "ID": 7231
      }
    ],
    "POWER": [
      {
        "UNIT_ID": 0,
        "UNITS": [
          {
            "KEY": "POWER_PORT_A",
            "VALUE": "PDU-C507F-EWR01",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip A",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          },
          {
            "KEY": "POWER_OUTLET_A",
            "VALUE": "AA5",
            "TYPE": "POWER_OUTLET",
            "LABEL": "Outlet A",
            "POSITION": 1,
            "IS_REQUIRED": true,
            "UNIQUE": false
          }
        ]
      },
      {
        "UNIT_ID": 1,
        "UNITS": [
          {
            "KEY": "POWER_PORT_B",
            "VALUE": "PDU-C507B-EWR01",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip B",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          },
          {
            "KEY": "POWER_OUTLET_B",
            "VALUE": "AA5",
            "TYPE": "POWER_OUTLET",
            "LABEL": "Outlet B",
            "POSITION": 1,
            "IS_REQUIRED": true,
            "UNIQUE": false
          }
        ]
      }
    ],
    "ATTRIBS": {
      "0": {
        "CHASSIS_TAG": "003183",
        "RACK_POSITION": "EWR01-C507-U08",
        "DISK_STORAGE_TOTAL": "500107862016",
        "CONTACT": "sre-sys@tumblr.com",
        "PRIMARY_ROLE": "TUMBLR_APP",
        "SECONDARY_ROLE": "ALL",
        "POOL": "TUMBLELOG_POOL",
        "NODECLASS": "blogswebnode",
        "SYSTEM_PASSWORD": "9bFpviqmoQux",
        "HOSTNAME": "web-04d30674.ewr01.tumblr.net",
        "PROVISIONING_PROCESS_JSON": "{\"json_class\":\"Collins::State::Specification\",\"data\":{\"name\":\"vlan_moved_to_provisioning\",\"description\":\"Moved to provisioning VLAN\",\"timestamp\":1397637098,\"extras\":{\"log\":[{\"count\":0,\"timestamp\":1397612456,\"name\":\"reprovision\",\"result\":true},{\"count\":1,\"timestamp\":1397615438,\"name\":\"reboot_hard\",\"result\":true},{\"count\":2,\"timestamp\":1397616059,\"name\":\"reprovision\",\"result\":true},{\"count\":3,\"timestamp\":1397619060,\"name\":\"reprovision\",\"result\":true},{\"count\":4,\"timestamp\":1397622053,\"name\":\"reprovision\",\"result\":true},{\"count\":5,\"timestamp\":1397625056,\"name\":\"reprovision\",\"result\":true},{\"count\":6,\"timestamp\":1397628055,\"name\":\"reprovision\",\"result\":true},{\"count\":7,\"timestamp\":1397631054,\"name\":\"reprovision\",\"result\":true},{\"count\":8,\"timestamp\":1397634052,\"name\":\"reprovision\",\"result\":true},{\"count\":9,\"timestamp\":1397637060,\"name\":\"reprovision\",\"result\":true}]}}}",
        "BUILD_CONTACT": "agl"
      }
    }
  },
  {
    "ASSET": {
      "ID": 564,
      "TAG": "001490",
      "STATE": {
        "ID": 3,
        "STATUS": null,
        "NAME": "RUNNING",
        "LABEL": "Running",
        "DESCRIPTION": "A service in this state is operational."
      },
      "STATUS": "Provisioning",
      "TYPE": "SERVER_NODE",
      "CREATED": "2012-04-10T15:14:12",
      "UPDATED": "2014-05-07T15:38:46",
      "DELETED": null
    },
    "HARDWARE": {
      "CPU": [
        {
          "CORES": 6,
          "THREADS": 6,
          "SPEED_GHZ": 2.3,
          "DESCRIPTION": "Opteron (To Be Filled By O.E.M.) Advanced Micro Devices [AMD]",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "CORES": 6,
          "THREADS": 6,
          "SPEED_GHZ": 2.3,
          "DESCRIPTION": "Opteron (To Be Filled By O.E.M.) Advanced Micro Devices [AMD]",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "MEMORY": [
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 0,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 1,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 2,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 3,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 4,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 5,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 6,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 7,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 8,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 9,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 10,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 11,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "NIC": [
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "04:7d:7b:06:94:12",
          "DESCRIPTION": "82576 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "04:7d:7b:06:94:13",
          "DESCRIPTION": "82576 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "DISK": [
        {
          "SIZE": 500107862016,
          "SIZE_S": "500107862016",
          "SIZE_HUMAN": "465.76 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST9500620NS",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 500107862016,
          "SIZE_S": "500107862016",
          "SIZE_HUMAN": "465.76 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST9500620NS",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "BASE": {
        "DESCRIPTION": "Rack Mount Chassis",
        "PRODUCT": "PowerEdge C6105 (N/A)",
        "VENDOR": "Dell Inc."
      }
    },
    "LLDP": {
      "INTERFACES": [
        {
          "NAME": "eth0",
          "CHASSIS": {
            "NAME": "ToR-C111-112-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "28:8a:1c:0d:c5:00"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "995"
            },
            "DESCRIPTION": "ge-4/0/13.0"
          },
          "VLANS": [
            {
              "ID": 1111,
              "NAME": "C111-112-PROVISIONING"
            }
          ]
        },
        {
          "NAME": "eth1",
          "CHASSIS": {
            "NAME": "ToR-C111-112-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "28:8a:1c:0d:c5:00"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "1069"
            },
            "DESCRIPTION": "ge-5/0/37.0"
          },
          "VLANS": [
            {
              "ID": 1111,
              "NAME": "C111-112-PROVISIONING"
            }
          ]
        }
      ]
    },
    "IPMI": {
      "ASSET_ID": 564,
      "ASSET_TAG": "001490",
      "IPMI_USERNAME": "root",
      "IPMI_PASSWORD": "JCxHwlvM98OJCvzn",
      "IPMI_GATEWAY": "172.16.32.1",
      "IPMI_ADDRESS": "172.16.34.152",
      "IPMI_NETMASK": "255.255.240.0",
      "ID": 564
    },
    "ADDRESSES": [
      {
        "ASSET_ID": 564,
        "ASSET_TAG": "001490",
        "GATEWAY": "172.17.110.1",
        "ADDRESS": "172.17.110.138",
        "NETMASK": "255.255.255.0",
        "POOL": "C111-112",
        "ID": 7807
      }
    ],
    "POWER": [
      {
        "UNIT_ID": 0,
        "UNITS": [
          {
            "KEY": "POWER_PORT_A",
            "VALUE": "ewr01-pdu032",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip A",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          }
        ]
      },
      {
        "UNIT_ID": 1,
        "UNITS": [
          {
            "KEY": "POWER_PORT_B",
            "VALUE": "ewr01-pdu031",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip B",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          }
        ]
      }
    ],
    "ATTRIBS": {
      "0": {
        "CHASSIS_TAG": "001490",
        "RACK_POSITION": "EWR01-C112-U23",
        "DISK_STORAGE_TOTAL": "1000215724032",
        "CONTACT": "eng-core@tumblr.com",
        "PRIMARY_ROLE": "SERVICE",
        "POOL": "PUSH",
        "NODECLASS": "servicenode",
        "SYSTEM_PASSWORD": "ivDF8gf0Blco",
        "HOSTNAME": "service-push-7bf31ce0.ewr01.tumblr.net",
        "SUFFIX": "push",
        "PROVISIONING_PROCESS_JSON": "{\"json_class\":\"Collins::State::Specification\",\"data\":{\"name\":\"kickstart_started\",\"description\":\"Asset has started kickstart process\",\"timestamp\":\"1399491173\"}}",
        "CHASSIS_POSITION": "04",
        "D2_CUTOFF": "OFF",
        "LLDP_FIX_TS": "1388677271",
        "LLDP_VERIFIED": "1356196990",
        "CDH4": "upgraded",
        "DISABLE_ATIME": "TRUE",
        "HARDWARE_PRODUCT": "PowerEdge C6105",
        "OS_VENDOR": "CentOS",
        "OS_RELEASE": "5.8",
        "OS_CODENAME": "Final",
        "KERNEL": "2.6.18-308.4.1.el5",
        "HARDWARE_VENDOR": "Dell Inc.",
        "PROVISIONING_PREP_COMPLETE": "true",
        "BUILD_CONTACT": "mike",
        "DESIRED_LDAP_SERVERS": "true",
        "SYSTEM_SERVICE_TAG": "DYBBVR1"
      }
    }
  },
  {
    "ASSET": {
      "ID": 518,
      "TAG": "001489",
      "STATE": {
        "ID": 3,
        "STATUS": null,
        "NAME": "RUNNING",
        "LABEL": "Running",
        "DESCRIPTION": "A service in this state is operational."
      },
      "STATUS": "Provisioning",
      "TYPE": "SERVER_NODE",
      "CREATED": "2012-04-09T23:14:11",
      "UPDATED": "2014-05-07T15:34:39",
      "DELETED": null
    },
    "HARDWARE": {
      "CPU": [
        {
          "CORES": 6,
          "THREADS": 6,
          "SPEED_GHZ": 2.3,
          "DESCRIPTION": "Opteron (To Be Filled By O.E.M.) Advanced Micro Devices [AMD]",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "CORES": 6,
          "THREADS": 6,
          "SPEED_GHZ": 2.3,
          "DESCRIPTION": "Opteron (To Be Filled By O.E.M.) Advanced Micro Devices [AMD]",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "MEMORY": [
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 0,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 1,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 2,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 3,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 4,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 5,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 6,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 7,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 8,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 9,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 10,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 11,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "NIC": [
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "04:7d:7b:06:92:d8",
          "DESCRIPTION": "82576 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "04:7d:7b:06:92:d9",
          "DESCRIPTION": "82576 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "DISK": [
        {
          "SIZE": 500107862016,
          "SIZE_S": "500107862016",
          "SIZE_HUMAN": "465.76 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST9500620NS",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 500107862016,
          "SIZE_S": "500107862016",
          "SIZE_HUMAN": "465.76 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST9500620NS",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "BASE": {
        "DESCRIPTION": "Rack Mount Chassis",
        "PRODUCT": "PowerEdge C6105 (N/A)",
        "VENDOR": "Dell Inc."
      }
    },
    "LLDP": {
      "INTERFACES": [
        {
          "NAME": "eth0",
          "CHASSIS": {
            "NAME": "ToR-C111-112-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "28:8a:1c:0d:c5:00"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "994"
            },
            "DESCRIPTION": "ge-4/0/12.0"
          },
          "VLANS": [
            {
              "ID": 1111,
              "NAME": "C111-112-PROVISIONING"
            }
          ]
        },
        {
          "NAME": "eth1",
          "CHASSIS": {
            "NAME": "ToR-C111-112-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "28:8a:1c:0d:c5:00"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "1068"
            },
            "DESCRIPTION": "ge-5/0/36.0"
          },
          "VLANS": [
            {
              "ID": 1111,
              "NAME": "C111-112-PROVISIONING"
            }
          ]
        }
      ]
    },
    "IPMI": {
      "ASSET_ID": 518,
      "ASSET_TAG": "001489",
      "IPMI_USERNAME": "root",
      "IPMI_PASSWORD": "9zsjRQrdLDGKoaq6",
      "IPMI_GATEWAY": "172.16.32.1",
      "IPMI_ADDRESS": "172.16.34.106",
      "IPMI_NETMASK": "255.255.240.0",
      "ID": 518
    },
    "ADDRESSES": [
      {
        "ASSET_ID": 518,
        "ASSET_TAG": "001489",
        "GATEWAY": "172.17.110.1",
        "ADDRESS": "172.17.110.139",
        "NETMASK": "255.255.255.0",
        "POOL": "C111-112",
        "ID": 7808
      }
    ],
    "POWER": [
      {
        "UNIT_ID": 0,
        "UNITS": [
          {
            "KEY": "POWER_PORT_A",
            "VALUE": "ewr01-pdu032",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip A",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          }
        ]
      },
      {
        "UNIT_ID": 1,
        "UNITS": [
          {
            "KEY": "POWER_PORT_B",
            "VALUE": "ewr01-pdu031",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip B",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          }
        ]
      }
    ],
    "ATTRIBS": {
      "0": {
        "CHASSIS_TAG": "001489",
        "RACK_POSITION": "EWR01-C112-U24",
        "DISK_STORAGE_TOTAL": "1000215724032",
        "CONTACT": "eng-core@tumblr.com",
        "PRIMARY_ROLE": "SERVICE",
        "POOL": "PUSH",
        "NODECLASS": "servicenode",
        "SYSTEM_PASSWORD": "3MaYOJ2cHz0Y",
        "HOSTNAME": "service-push-18db795d.ewr01.tumblr.net",
        "SUFFIX": "push",
        "PROVISIONING_PROCESS_JSON": "{\"json_class\":\"Collins::State::Specification\",\"data\":{\"name\":\"kickstart_started\",\"description\":\"Asset has started kickstart process\",\"timestamp\":\"1399491276\"}}",
        "CHASSIS_POSITION": "03",
        "D2_CUTOFF": "OFF",
        "LLDP_FIX_TS": "1388677055",
        "LLDP_VERIFIED": "1356196990",
        "TCP_STATE_TRENDING": "true",
        "HARDWARE_PRODUCT": "PowerEdge C6105",
        "OS_VENDOR": "CentOS",
        "OS_RELEASE": "5.8",
        "OS_CODENAME": "Final",
        "KERNEL": "2.6.18-308.4.1.el5",
        "HARDWARE_VENDOR": "Dell Inc.",
        "PROVISIONING_PREP_COMPLETE": "true",
        "BUILD_CONTACT": "mike",
        "DESIRED_LDAP_SERVERS": "true",
        "SYSTEM_SERVICE_TAG": "DYBBVR1"
      }
    }
  },
  {
    "ASSET": {
      "ID": 281,
      "TAG": "001172",
      "STATE": {
        "ID": 3,
        "STATUS": null,
        "NAME": "RUNNING",
        "LABEL": "Running",
        "DESCRIPTION": "A service in this state is operational."
      },
      "STATUS": "Provisioning",
      "TYPE": "SERVER_NODE",
      "CREATED": "2012-04-05T18:44:34",
      "UPDATED": "2014-05-05T14:08:31",
      "DELETED": null
    },
    "HARDWARE": {
      "CPU": [
        {
          "CORES": 6,
          "THREADS": 6,
          "SPEED_GHZ": 2.3,
          "DESCRIPTION": "AMD Opteron(tm) Processor 4174 HE Hynix Semiconductor (Hyundai Electronics)",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "CORES": 6,
          "THREADS": 6,
          "SPEED_GHZ": 2.3,
          "DESCRIPTION": "AMD Opteron(tm) Processor 4174 HE Hynix Semiconductor (Hyundai Electronics)",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "MEMORY": [
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 0,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 1,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 2,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 3,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 4,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 5,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 6,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 7,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 8,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 9,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 10,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 11,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "NIC": [
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "04:7d:7b:06:95:7c",
          "DESCRIPTION": "82576 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "04:7d:7b:06:95:7d",
          "DESCRIPTION": "82576 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "DISK": [
        {
          "SIZE": 1000204886016,
          "SIZE_S": "1000204886016",
          "SIZE_HUMAN": "931.51 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST91000640NS",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 1000204886016,
          "SIZE_S": "1000204886016",
          "SIZE_HUMAN": "931.51 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST91000640NS",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 1000204886016,
          "SIZE_S": "1000204886016",
          "SIZE_HUMAN": "931.51 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST91000640NS",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 1000204886016,
          "SIZE_S": "1000204886016",
          "SIZE_HUMAN": "931.51 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST91000640NS",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "BASE": {
        "DESCRIPTION": "Rack Mount Chassis",
        "PRODUCT": "PowerEdge C6105 (N/A)",
        "VENDOR": "Winbond Electronics"
      }
    },
    "LLDP": {
      "INTERFACES": [
        {
          "NAME": "eth0",
          "CHASSIS": {
            "NAME": "re0.access-switch06.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "84:18:88:23:73:f0"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex8216 , version 11.4R2.14 Build date: 2012-03-17 17:46:53 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "1552"
            },
            "DESCRIPTION": "ge-2/0/33.0"
          },
          "VLANS": [
            {
              "ID": 108,
              "NAME": "EWR-PROVISIONING"
            }
          ]
        },
        {
          "NAME": "eth1",
          "CHASSIS": {
            "NAME": "re0.access-switch05.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "84:18:88:23:27:f0"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex8216 , version 11.4R2.14 Build date: 2012-03-17 17:46:53 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "1937"
            },
            "DESCRIPTION": "ge-2/0/33.0"
          },
          "VLANS": [
            {
              "ID": 108,
              "NAME": "EWR-PROVISIONING"
            }
          ]
        }
      ]
    },
    "IPMI": {
      "ASSET_ID": 281,
      "ASSET_TAG": "001172",
      "IPMI_USERNAME": "root",
      "IPMI_PASSWORD": "ZY80chwH0jJxjlco",
      "IPMI_GATEWAY": "172.16.32.1",
      "IPMI_ADDRESS": "172.16.33.124",
      "IPMI_NETMASK": "255.255.240.0",
      "ID": 281
    },
    "ADDRESSES": [
      {
        "ASSET_ID": 281,
        "ASSET_TAG": "001172",
        "GATEWAY": "172.16.124.1",
        "ADDRESS": "172.16.124.124",
        "NETMASK": "255.255.254.0",
        "POOL": "EWR-ROW3.2",
        "ID": 2338
      }
    ],
    "POWER": [
      {
        "UNIT_ID": 0,
        "UNITS": [
          {
            "KEY": "POWER_PORT_A",
            "VALUE": "PDU154.EWR01",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip A",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          },
          {
            "KEY": "POWER_OUTLET_A",
            "VALUE": "CC4",
            "TYPE": "POWER_OUTLET",
            "LABEL": "Outlet A",
            "POSITION": 1,
            "IS_REQUIRED": true,
            "UNIQUE": false
          }
        ]
      },
      {
        "UNIT_ID": 1,
        "UNITS": [
          {
            "KEY": "POWER_PORT_B",
            "VALUE": "PDU153.EWR01",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip B",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          },
          {
            "KEY": "POWER_OUTLET_B",
            "VALUE": "CC4",
            "TYPE": "POWER_OUTLET",
            "LABEL": "Outlet B",
            "POSITION": 1,
            "IS_REQUIRED": true,
            "UNIQUE": false
          }
        ]
      }
    ],
    "ATTRIBS": {
      "0": {
        "CHASSIS_TAG": "001172",
        "RACK_POSITION": "EWR01-C313-U09",
        "DISK_STORAGE_TOTAL": "4000819544064",
        "CONTACT": "sre-data@tumblr.com",
        "PRIMARY_ROLE": "DATABASE",
        "POOL": "TESTING",
        "NODECLASS": "utildatabasenode6",
        "SYSTEM_PASSWORD": "x2BOEJzsO4Hv",
        "HOSTNAME": "db-3825bc7c.ewr01.tumblr.net",
        "PROVISIONING_PROCESS_JSON": "{\"json_class\":\"Collins::State::Specification\",\"data\":{\"name\":\"kickstart_seen\",\"description\":\"Asset has made kickstart request to Phil\",\"timestamp\":1394253169,\"extras\":{\"log\":[{\"count\":0,\"timestamp\":1394227546,\"name\":\"reboot_hard\",\"result\":true},{\"count\":1,\"timestamp\":1394230845,\"name\":\"reboot_hard\",\"result\":true},{\"count\":2,\"timestamp\":1394233846,\"name\":\"reboot_hard\",\"result\":true},{\"count\":3,\"timestamp\":1394236848,\"name\":\"reboot_hard\",\"result\":true},{\"count\":4,\"timestamp\":1394238043,\"name\":\"reboot_hard\",\"result\":true},{\"count\":5,\"timestamp\":1394241045,\"name\":\"reboot_hard\",\"result\":true},{\"count\":6,\"timestamp\":1394244044,\"name\":\"reboot_hard\",\"result\":true},{\"count\":7,\"timestamp\":1394247045,\"name\":\"reboot_hard\",\"result\":true},{\"count\":8,\"timestamp\":1394250046,\"name\":\"reboot_hard\",\"result\":true},{\"count\":9,\"timestamp\":1394253046,\"name\":\"reboot_hard\",\"result\":true}]}}}",
        "CHASSIS_POSITION": "02",
        "D2_CUTOFF": "OFF",
        "ORIGINAL_STATUS": "Maintenance",
        "MIGRATE": "true",
        "LLDP_VERIFIED": "1356196990",
        "IPMI_LOG": "TRUE",
        "HARDWARE_PRODUCT": "PowerEdge C6105",
        "OS_VENDOR": "CentOS",
        "OS_RELEASE": "5.8",
        "OS_CODENAME": "Final",
        "KERNEL": "2.6.18-308.4.1.el5",
        "HARDWARE_VENDOR": "Dell Inc.",
        "PROVISIONING_PREP_COMPLETE": "true",
        "BUILD_CONTACT": "dallas",
        "CONTACT_NOTES": "https://confluence.ewr01.tumblr.net/display/TUMBLR/MySQL+architecture"
      }
    }
  },
  {
    "ASSET": {
      "ID": 319,
      "TAG": "001115",
      "STATE": {
        "ID": 3,
        "STATUS": null,
        "NAME": "RUNNING",
        "LABEL": "Running",
        "DESCRIPTION": "A service in this state is operational."
      },
      "STATUS": "Provisioning",
      "TYPE": "SERVER_NODE",
      "CREATED": "2012-04-05T19:06:13",
      "UPDATED": "2014-05-07T15:34:12",
      "DELETED": null
    },
    "HARDWARE": {
      "CPU": [
        {
          "CORES": 6,
          "THREADS": 6,
          "SPEED_GHZ": 2.3,
          "DESCRIPTION": "Opteron (To Be Filled By O.E.M.) Advanced Micro Devices [AMD]",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "CORES": 6,
          "THREADS": 6,
          "SPEED_GHZ": 2.3,
          "DESCRIPTION": "Opteron (To Be Filled By O.E.M.) Advanced Micro Devices [AMD]",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "MEMORY": [
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 0,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 1,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 2,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 3,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 4,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 5,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 6,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 7,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 8,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 9,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 10,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 11,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "NIC": [
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "04:7d:7b:06:96:68",
          "DESCRIPTION": "82576 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "04:7d:7b:06:96:69",
          "DESCRIPTION": "82576 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "DISK": [
        {
          "SIZE": 500107862016,
          "SIZE_S": "500107862016",
          "SIZE_HUMAN": "465.76 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST9500620NS",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 500107862016,
          "SIZE_S": "500107862016",
          "SIZE_HUMAN": "465.76 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST9500620NS",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "BASE": {
        "DESCRIPTION": "Rack Mount Chassis",
        "PRODUCT": "PowerEdge C6105 (N/A)",
        "VENDOR": "Winbond Electronics"
      }
    },
    "LLDP": {
      "INTERFACES": [
        {
          "NAME": "eth0",
          "CHASSIS": {
            "NAME": "ToR-C111-112-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "28:8a:1c:0d:c5:00"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "869"
            },
            "DESCRIPTION": "ge-1/0/3.0"
          },
          "VLANS": [
            {
              "ID": 1111,
              "NAME": "C111-112-PROVISIONING"
            }
          ]
        },
        {
          "NAME": "eth1",
          "CHASSIS": {
            "NAME": "ToR-C111-112-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "28:8a:1c:0d:c5:00"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "913"
            },
            "DESCRIPTION": "ge-2/0/26.0"
          },
          "VLANS": [
            {
              "ID": 1111,
              "NAME": "C111-112-PROVISIONING"
            }
          ]
        }
      ]
    },
    "IPMI": {
      "ASSET_ID": 319,
      "ASSET_TAG": "001115",
      "IPMI_USERNAME": "root",
      "IPMI_PASSWORD": "BXiQ0HleQu3LFL0U",
      "IPMI_GATEWAY": "172.16.32.1",
      "IPMI_ADDRESS": "172.16.33.162",
      "IPMI_NETMASK": "255.255.240.0",
      "ID": 319
    },
    "ADDRESSES": [
      {
        "ASSET_ID": 319,
        "ASSET_TAG": "001115",
        "GATEWAY": "172.17.110.1",
        "ADDRESS": "172.17.110.81",
        "NETMASK": "255.255.255.0",
        "POOL": "C111-112",
        "ID": 7645
      },
      {
        "ASSET_ID": 319,
        "ASSET_TAG": "001115",
        "GATEWAY": "172.17.110.1",
        "ADDRESS": "172.17.110.113",
        "NETMASK": "255.255.255.0",
        "POOL": "C111-112",
        "ID": 7692
      },
      {
        "ASSET_ID": 319,
        "ASSET_TAG": "001115",
        "GATEWAY": "172.17.110.1",
        "ADDRESS": "172.17.110.114",
        "NETMASK": "255.255.255.0",
        "POOL": "C111-112",
        "ID": 7694
      },
      {
        "ASSET_ID": 319,
        "ASSET_TAG": "001115",
        "GATEWAY": "172.17.110.1",
        "ADDRESS": "172.17.110.115",
        "NETMASK": "255.255.255.0",
        "POOL": "C111-112",
        "ID": 7696
      }
    ],
    "POWER": [
      {
        "UNIT_ID": 0,
        "UNITS": [
          {
            "KEY": "POWER_PORT_A",
            "VALUE": "ewr01-pdu026",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip A",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          }
        ]
      },
      {
        "UNIT_ID": 1,
        "UNITS": [
          {
            "KEY": "POWER_PORT_B",
            "VALUE": "ewr01-pdu025",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip B",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          }
        ]
      }
    ],
    "ATTRIBS": {
      "0": {
        "CHASSIS_TAG": "001115",
        "RACK_POSITION": "EWR01-C111-U18",
        "DISK_STORAGE_TOTAL": "1000215724032",
        "CONTACT": "sre-sys@tumblr.com",
        "PRIMARY_ROLE": "DEVEL",
        "POOL": "DEVEL",
        "NODECLASS": "devel6node",
        "SYSTEM_PASSWORD": "LvUVzpXqKVhr",
        "HOSTNAME": "dev6-mleone-os-8d038cfd.ewr01.tumblr.net",
        "LAST_PUPPET_RUN": "2014-05-07T15:34:10",
        "SUFFIX": "mleone-os",
        "PROVISIONING_PROCESS_JSON": "{\"json_class\":\"Collins::State::Specification\",\"data\":{\"name\":\"kickstart_post_started\",\"description\":\"Asset has started kickstart post section\",\"timestamp\":\"1399490625\"}}",
        "CHASSIS_POSITION": "01",
        "REDIS_INSTANCE_COUNT": "1",
        "REDIS_FIRST_PORT": "6380",
        "LLDP_FIX_TS": "1388678629",
        "LLDP_VERIFIED": "1356196990",
        "HARDWARE_PRODUCT": "PowerEdge C6105",
        "OS_VENDOR": "Scientific",
        "OS_RELEASE": "6.4",
        "OS_CODENAME": "Carbon",
        "KERNEL": "2.6.32-358.11.1.el6",
        "HARDWARE_VENDOR": "Dell Inc.",
        "PROVISIONING_PREP_COMPLETE": "true",
        "BUILD_CONTACT": "mleone",
        "PUPPET_SERVER": "true",
        "DESIRED_LDAP_SERVERS": "true",
        "SYSTEM_SERVICE_TAG": "DXQ7VR1"
      }
    }
  },
  {
    "ASSET": {
      "ID": 141,
      "TAG": "001077",
      "STATE": {
        "ID": 3,
        "STATUS": null,
        "NAME": "RUNNING",
        "LABEL": "Running",
        "DESCRIPTION": "A service in this state is operational."
      },
      "STATUS": "Provisioning",
      "TYPE": "SERVER_NODE",
      "CREATED": "2012-04-05T18:31:38",
      "UPDATED": "2014-05-07T15:28:01",
      "DELETED": null
    },
    "HARDWARE": {
      "CPU": [
        {
          "CORES": 6,
          "THREADS": 6,
          "SPEED_GHZ": 2.3,
          "DESCRIPTION": "Opteron (To Be Filled By O.E.M.) Advanced Micro Devices [AMD]",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "CORES": 6,
          "THREADS": 6,
          "SPEED_GHZ": 2.3,
          "DESCRIPTION": "Opteron (To Be Filled By O.E.M.) Advanced Micro Devices [AMD]",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "MEMORY": [
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 0,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 1,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 2,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 3,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 4,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 5,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 6,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 7,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 8,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 9,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 10,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 11,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "NIC": [
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "04:7d:7b:06:96:18",
          "DESCRIPTION": "82576 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "04:7d:7b:06:96:19",
          "DESCRIPTION": "82576 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "DISK": [
        {
          "SIZE": 500107862016,
          "SIZE_S": "500107862016",
          "SIZE_HUMAN": "465.76 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST9500620NS",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "BASE": {
        "DESCRIPTION": "Rack Mount Chassis",
        "PRODUCT": "PowerEdge C6105 (N/A)",
        "VENDOR": "Winbond Electronics"
      }
    },
    "LLDP": {
      "INTERFACES": [
        {
          "NAME": "eth0",
          "CHASSIS": {
            "NAME": "ToR-c105-106-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "28:8a:1c:0e:53:00"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "519"
            },
            "DESCRIPTION": "ge-0/0/8.0"
          },
          "VLANS": [
            {
              "ID": 1105,
              "NAME": "C105-106-PROVISIONING"
            }
          ]
        },
        {
          "NAME": "eth1",
          "CHASSIS": {
            "NAME": "ToR-c105-106-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "28:8a:1c:0e:53:00"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "1057"
            },
            "DESCRIPTION": "ge-1/0/32.0"
          },
          "VLANS": [
            {
              "ID": 1105,
              "NAME": "C105-106-PROVISIONING"
            }
          ]
        }
      ]
    },
    "IPMI": {
      "ASSET_ID": 141,
      "ASSET_TAG": "001077",
      "IPMI_USERNAME": "root",
      "IPMI_PASSWORD": "HopeaP8q49fdspYF",
      "IPMI_GATEWAY": "172.16.32.1",
      "IPMI_ADDRESS": "172.16.32.239",
      "IPMI_NETMASK": "255.255.240.0",
      "ID": 141
    },
    "ADDRESSES": [
      {
        "ASSET_ID": 141,
        "ASSET_TAG": "001077",
        "GATEWAY": "172.17.104.1",
        "ADDRESS": "172.17.104.29",
        "NETMASK": "255.255.255.0",
        "POOL": "C105-106",
        "ID": 7498
      }
    ],
    "POWER": [
      {
        "UNIT_ID": 0,
        "UNITS": [
          {
            "KEY": "POWER_PORT_A",
            "VALUE": "ewr01-pdu018",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip A",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          }
        ]
      },
      {
        "UNIT_ID": 1,
        "UNITS": [
          {
            "KEY": "POWER_PORT_B",
            "VALUE": "ewr01-pdu017",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip B",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          }
        ]
      }
    ],
    "ATTRIBS": {
      "0": {
        "CHASSIS_TAG": "001077",
        "RACK_POSITION": "EWR01-C105-U34",
        "DISK_STORAGE_TOTAL": "500107862016",
        "CONTACT": "sre-sys@tumblr.com",
        "PRIMARY_ROLE": "TUMBLR_APP",
        "SECONDARY_ROLE": "ALL",
        "POOL": "DASHBOARD_POOL",
        "NODECLASS": "dashwebnode",
        "SYSTEM_PASSWORD": "GObWIz15tBZ4",
        "HOSTNAME": "web-9e48fd96.ewr01.tumblr.net",
        "MIGRATION": "1.0",
        "PROVISIONING_PROCESS_JSON": "{\"json_class\":\"Collins::State::Specification\",\"data\":{\"name\":\"kickstart_started\",\"description\":\"Asset has started kickstart process\",\"timestamp\":\"1399490877\",\"extras\":{\"log\":[{\"count\":0,\"timestamp\":1399472741,\"name\":\"reboot_hard\",\"result\":true},{\"count\":1,\"timestamp\":1399475776,\"name\":\"reboot_hard\",\"result\":true},{\"count\":2,\"timestamp\":1399478737,\"name\":\"reboot_hard\",\"result\":true},{\"count\":3,\"timestamp\":1399481772,\"name\":\"reboot_hard\",\"result\":true},{\"count\":4,\"timestamp\":1399484740,\"name\":\"reboot_hard\",\"result\":true},{\"count\":5,\"timestamp\":1399487779,\"name\":\"reboot_hard\",\"result\":true},{\"count\":6,\"timestamp\":1399490738,\"name\":\"reboot_hard\",\"result\":true}]}}}",
        "CHASSIS_POSITION": "03",
        "D2_CUTOFF": "OFF",
        "LLDP_FIX_TS": "1388682022",
        "LLDP_VERIFIED": "1356196990",
        "USE_NGINX": "true",
        "IPMI_LOG": "TRUE",
        "SCRIBE_UPGRADE": "true",
        "HARDWARE_PRODUCT": "PowerEdge C6105",
        "OS_VENDOR": "CentOS",
        "OS_RELEASE": "5.8",
        "OS_CODENAME": "Final",
        "KERNEL": "2.6.18-308.4.1.el5",
        "HARDWARE_VENDOR": "Dell Inc.",
        "PROVISIONING_PREP_COMPLETE": "true",
        "BUILD_CONTACT": "gabe",
        "SYSTEM_SERVICE_TAG": "85BDVR1"
      }
    }
  },
  {
    "ASSET": {
      "ID": 412,
      "TAG": "000945",
      "STATE": {
        "ID": 3,
        "STATUS": null,
        "NAME": "RUNNING",
        "LABEL": "Running",
        "DESCRIPTION": "A service in this state is operational."
      },
      "STATUS": "Provisioning",
      "TYPE": "SERVER_NODE",
      "CREATED": "2012-04-05T23:41:59",
      "UPDATED": "2014-05-07T15:30:37",
      "DELETED": null
    },
    "HARDWARE": {
      "CPU": [
        {
          "CORES": 6,
          "THREADS": 6,
          "SPEED_GHZ": 2.3,
          "DESCRIPTION": "Opteron (To Be Filled By O.E.M.) Advanced Micro Devices [AMD]",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "CORES": 6,
          "THREADS": 6,
          "SPEED_GHZ": 2.3,
          "DESCRIPTION": "Opteron (To Be Filled By O.E.M.) Advanced Micro Devices [AMD]",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "MEMORY": [
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 0,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 1,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 2,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 3,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 4,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 5,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 6,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 7,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 8,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 9,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 0,
          "SIZE_S": "0",
          "SIZE_HUMAN": "0 Bytes",
          "BANK": 10,
          "DESCRIPTION": "Empty Memory Bank",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 11,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "NIC": [
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "e8:9a:8f:83:ce:82",
          "DESCRIPTION": "82576 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "e8:9a:8f:83:ce:83",
          "DESCRIPTION": "82576 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "DISK": [
        {
          "SIZE": 500107862016,
          "SIZE_S": "500107862016",
          "SIZE_HUMAN": "465.76 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST9500620NS",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "BASE": {
        "DESCRIPTION": "Rack Mount Chassis",
        "PRODUCT": "PowerEdge C6105 (N/A)",
        "VENDOR": "Dell Inc."
      }
    },
    "LLDP": {
      "INTERFACES": [
        {
          "NAME": "eth0",
          "CHASSIS": {
            "NAME": "ToR-c101-102-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "28:8a:1c:0d:ae:80"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "543"
            },
            "DESCRIPTION": "ge-0/0/20.0"
          },
          "VLANS": [
            {
              "ID": 1101,
              "NAME": "C101-102-PROVISIONING"
            }
          ]
        },
        {
          "NAME": "eth1",
          "CHASSIS": {
            "NAME": "ToR-c101-102-VC.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "28:8a:1c:0d:ae:80"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4200-48t , version 12.3R3.4 Build date: 2013-06-14 01:38:46 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "878"
            },
            "DESCRIPTION": "ge-1/0/44.0"
          },
          "VLANS": [
            {
              "ID": 1101,
              "NAME": "C101-102-PROVISIONING"
            }
          ]
        }
      ]
    },
    "IPMI": {
      "ASSET_ID": 412,
      "ASSET_TAG": "000945",
      "IPMI_USERNAME": "root",
      "IPMI_PASSWORD": "Z12VdUaiSQbTBmiq",
      "IPMI_GATEWAY": "172.16.32.1",
      "IPMI_ADDRESS": "172.16.33.254",
      "IPMI_NETMASK": "255.255.240.0",
      "ID": 412
    },
    "ADDRESSES": [
      {
        "ASSET_ID": 412,
        "ASSET_TAG": "000945",
        "GATEWAY": "172.17.100.1",
        "ADDRESS": "172.17.100.54",
        "NETMASK": "255.255.255.0",
        "POOL": "C101-102",
        "ID": 7806
      }
    ],
    "POWER": [
      {
        "UNIT_ID": 0,
        "UNITS": [
          {
            "KEY": "POWER_PORT_A",
            "VALUE": "ewr01-pdu004",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip A",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          }
        ]
      },
      {
        "UNIT_ID": 1,
        "UNITS": [
          {
            "KEY": "POWER_PORT_B",
            "VALUE": "ewr01-pdu003",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip B",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          }
        ]
      }
    ],
    "ATTRIBS": {
      "0": {
        "CHASSIS_TAG": "000945",
        "RACK_POSITION": "EWR01-C101-U40",
        "DISK_STORAGE_TOTAL": "500107862016",
        "CONTACT": "sre-sys@tumblr.com",
        "PRIMARY_ROLE": "DEVEL",
        "POOL": "DEVEL",
        "NODECLASS": "devel6node",
        "SYSTEM_PASSWORD": "wufGINwuKCVP",
        "HOSTNAME": "dev6-alexandr-bbefa698.ewr01.tumblr.net",
        "LAST_PUPPET_RUN": "2014-05-07T15:30:36",
        "SUFFIX": "alexandr",
        "MIGRATION": "1.0",
        "PROVISIONING_PROCESS_JSON": "{\"json_class\":\"Collins::State::Specification\",\"data\":{\"name\":\"kickstart_post_started\",\"description\":\"Asset has started kickstart post section\",\"timestamp\":\"1399490478\"}}",
        "CHASSIS_POSITION": "03",
        "D2_CUTOFF": "OFF",
        "LLDP_FIX_TS": "1388682957",
        "LLDP_VERIFIED": "1356196990",
        "USE_NGINX": "true",
        "IPMI_LOG": "TRUE",
        "SCRIBE_UPGRADE": "true",
        "HARDWARE_PRODUCT": "PowerEdge C6105",
        "OS_VENDOR": "CentOS",
        "OS_RELEASE": "5.8",
        "OS_CODENAME": "Final",
        "KERNEL": "2.6.18-308.4.1.el5",
        "HARDWARE_VENDOR": "Dell Inc.",
        "PROVISIONING_PREP_COMPLETE": "true",
        "BUILD_CONTACT": "gtorre",
        "DESIRED_LDAP_SERVERS": "true",
        "SYSTEM_SERVICE_TAG": "84Y7VR1"
      }
    }
  },
  {
    "ASSET": {
      "ID": 1175,
      "TAG": "000880",
      "STATE": {
        "ID": 3,
        "STATUS": null,
        "NAME": "RUNNING",
        "LABEL": "Running",
        "DESCRIPTION": "A service in this state is operational."
      },
      "STATUS": "Provisioning",
      "TYPE": "SERVER_NODE",
      "CREATED": "2012-06-19T20:11:23",
      "UPDATED": "2014-05-05T14:08:58",
      "DELETED": "2012-06-25T18:28:37"
    },
    "HARDWARE": {
      "CPU": [
        {
          "CORES": 6,
          "THREADS": 6,
          "SPEED_GHZ": 2.3,
          "DESCRIPTION": "AMD Opteron(tm) Processor 4174 HE Hynix Semiconductor (Hyundai Electronics)",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "CORES": 6,
          "THREADS": 6,
          "SPEED_GHZ": 2.3,
          "DESCRIPTION": "AMD Opteron(tm) Processor 4174 HE Hynix Semiconductor (Hyundai Electronics)",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "MEMORY": [
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 0,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 1,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 2,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 3,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 4,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 5,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 6,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 7,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 8,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 9,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 10,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 11,
          "DESCRIPTION": "DIMM DDR3 Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "NIC": [
        {
          "SPEED": 10000000000,
          "SPEED_S": "10000000000",
          "SPEED_HUMAN": "10.00 Gb",
          "MAC_ADDRESS": "90:e2:ba:00:8e:ea",
          "DESCRIPTION": "82599EB 10-Gigabit SFI/SFP+ Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "e8:9a:8f:73:ee:36",
          "DESCRIPTION": "82576 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "e8:9a:8f:73:ee:37",
          "DESCRIPTION": "82576 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "DISK": [
        {
          "SIZE": 1000204886016,
          "SIZE_S": "1000204886016",
          "SIZE_HUMAN": "931.51 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST91000640NS",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 1000204886016,
          "SIZE_S": "1000204886016",
          "SIZE_HUMAN": "931.51 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST91000640NS",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 1000204886016,
          "SIZE_S": "1000204886016",
          "SIZE_HUMAN": "931.51 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST91000640NS",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 1000204886016,
          "SIZE_S": "1000204886016",
          "SIZE_HUMAN": "931.51 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST91000640NS",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 1000204886016,
          "SIZE_S": "1000204886016",
          "SIZE_HUMAN": "931.51 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST91000640NS",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 1000204886016,
          "SIZE_S": "1000204886016",
          "SIZE_HUMAN": "931.51 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST91000640NS",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "BASE": {
        "DESCRIPTION": "",
        "PRODUCT": "",
        "VENDOR": ""
      }
    },
    "LLDP": {
      "INTERFACES": [
        {
          "NAME": "eth0",
          "CHASSIS": {
            "NAME": "10ge-access03.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "78:19:f7:88:55:00"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4500-40f , version 11.4R2.14 Build date: 2012-03-17 17:46:53 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "690"
            },
            "DESCRIPTION": "xe-1/0/23.0"
          },
          "VLANS": [
            {
              "ID": 128,
              "NAME": "EWR-HADOOP"
            }
          ]
        },
        {
          "NAME": "eth2",
          "CHASSIS": {
            "NAME": "re0.access-switch05.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "84:18:88:23:27:f0"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex8216 , version 11.4R2.14 Build date: 2012-03-17 17:46:53 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "1836"
            },
            "DESCRIPTION": "ge-14/0/29.0"
          },
          "VLANS": [
            {
              "ID": 108,
              "NAME": "EWR-PROVISIONING"
            }
          ]
        },
        {
          "NAME": "eth1",
          "CHASSIS": {
            "NAME": "re0.access-switch06.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "84:18:88:23:73:f0"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex8216 , version 11.4R2.14 Build date: 2012-03-17 17:46:53 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "1451"
            },
            "DESCRIPTION": "ge-14/0/29.0"
          },
          "VLANS": [
            {
              "ID": 108,
              "NAME": "EWR-PROVISIONING"
            }
          ]
        }
      ]
    },
    "IPMI": {
      "ASSET_ID": 1175,
      "ASSET_TAG": "000880",
      "IPMI_USERNAME": "root",
      "IPMI_PASSWORD": "4HEzAfMM6qacd9b2",
      "IPMI_GATEWAY": "172.16.32.1",
      "IPMI_ADDRESS": "172.16.36.208",
      "IPMI_NETMASK": "255.255.240.0",
      "ID": 1167
    },
    "ADDRESSES": [
      {
        "ASSET_ID": 1175,
        "ASSET_TAG": "000880",
        "GATEWAY": "172.16.92.1",
        "ADDRESS": "172.16.92.14",
        "NETMASK": "255.255.254.0",
        "POOL": "EWR-HADOOP",
        "ID": 953
      }
    ],
    "POWER": [
      {
        "UNIT_ID": 0,
        "UNITS": [
          {
            "KEY": "POWER_PORT_A",
            "VALUE": "PDU158.EWR01",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip A",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          },
          {
            "KEY": "POWER_OUTLET_A",
            "VALUE": "CC5",
            "TYPE": "POWER_OUTLET",
            "LABEL": "Outlet A",
            "POSITION": 1,
            "IS_REQUIRED": true,
            "UNIQUE": false
          }
        ]
      },
      {
        "UNIT_ID": 1,
        "UNITS": [
          {
            "KEY": "POWER_PORT_B",
            "VALUE": "PDU157.EWR01",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip B",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          },
          {
            "KEY": "POWER_OUTLET_B",
            "VALUE": "CC5",
            "TYPE": "POWER_OUTLET",
            "LABEL": "Outlet B",
            "POSITION": 1,
            "IS_REQUIRED": true,
            "UNIQUE": false
          }
        ]
      }
    ],
    "ATTRIBS": {
      "0": {
        "CHASSIS_TAG": "000880",
        "RACK_POSITION": "EWR01-C301-U07",
        "DISK_STORAGE_TOTAL": "6001229316096",
        "CONTACT": "sre-data@tumblr.com",
        "PRIMARY_ROLE": "HADOOP",
        "SECONDARY_ROLE": "REGION_SERVER",
        "POOL": "JELLY",
        "NODECLASS": "regionserver6node",
        "SYSTEM_PASSWORD": "m07IGZXJ88S1",
        "HOSTNAME": "hbrs-8676e160.ewr01.tumblr.net",
        "PROVISIONING_PROCESS_JSON": "{\"json_class\":\"Collins::State::Specification\",\"data\":{\"name\":\"vlan_moved_to_provisioning\",\"description\":\"Moved to provisioning VLAN\",\"timestamp\":1397049088,\"extras\":{\"log\":[{\"count\":0,\"timestamp\":1397024445,\"name\":\"reprovision\",\"result\":true},{\"count\":1,\"timestamp\":1397027148,\"name\":\"reboot_hard\",\"result\":true},{\"count\":2,\"timestamp\":1397028047,\"name\":\"reprovision\",\"result\":true},{\"count\":3,\"timestamp\":1397031048,\"name\":\"reprovision\",\"result\":true},{\"count\":4,\"timestamp\":1397034048,\"name\":\"reprovision\",\"result\":true},{\"count\":5,\"timestamp\":1397037047,\"name\":\"reprovision\",\"result\":true},{\"count\":6,\"timestamp\":1397040048,\"name\":\"reprovision\",\"result\":true},{\"count\":7,\"timestamp\":1397043048,\"name\":\"reprovision\",\"result\":true},{\"count\":8,\"timestamp\":1397046047,\"name\":\"reprovision\",\"result\":true},{\"count\":9,\"timestamp\":1397049046,\"name\":\"reprovision\",\"result\":true}]}}}",
        "CHASSIS_POSITION": "02",
        "D2_CUTOFF": "OFF",
        "ORIGINAL_STATUS": "New",
        "LLDP_VERIFIED": "1356196990",
        "CDH4": "upgraded",
        "HARDWARE_PRODUCT": "PowerEdge C6105",
        "OS_VENDOR": "CentOS",
        "OS_RELEASE": "5.8",
        "OS_CODENAME": "Final",
        "KERNEL": "2.6.18-308.4.1.el5",
        "HARDWARE_VENDOR": "Dell",
        "BUILD_CONTACT": "cjshaulis"
      }
    }
  },
  {
    "ASSET": {
      "ID": 1189,
      "TAG": "000879",
      "STATE": {
        "ID": 3,
        "STATUS": null,
        "NAME": "RUNNING",
        "LABEL": "Running",
        "DESCRIPTION": "A service in this state is operational."
      },
      "STATUS": "Provisioning",
      "TYPE": "SERVER_NODE",
      "CREATED": "2012-06-27T20:30:02",
      "UPDATED": "2014-05-05T14:08:58",
      "DELETED": null
    },
    "HARDWARE": {
      "CPU": [
        {
          "CORES": 1,
          "THREADS": 1,
          "SPEED_GHZ": 2.3,
          "DESCRIPTION": "AMD Opteron(tm) Processor 4174 HE Advanced Micro Devices [AMD]",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "CORES": 1,
          "THREADS": 1,
          "SPEED_GHZ": 2.3,
          "DESCRIPTION": "AMD Opteron(tm) Processor 4174 HE Advanced Micro Devices [AMD]",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "MEMORY": [
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 0,
          "DESCRIPTION": "DIMM Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 1,
          "DESCRIPTION": "DIMM Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 2,
          "DESCRIPTION": "DIMM Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 3,
          "DESCRIPTION": "DIMM Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 4,
          "DESCRIPTION": "DIMM Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 5,
          "DESCRIPTION": "DIMM Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 6,
          "DESCRIPTION": "DIMM Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 7,
          "DESCRIPTION": "DIMM Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 8,
          "DESCRIPTION": "DIMM Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 9,
          "DESCRIPTION": "DIMM Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 10,
          "DESCRIPTION": "DIMM Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 8589934592,
          "SIZE_S": "8589934592",
          "SIZE_HUMAN": "8.00 GB",
          "BANK": 11,
          "DESCRIPTION": "DIMM Synchronous 1333 MHz (0.8 ns) - Hyundai HMT31GR7BFR4A-H9",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "NIC": [
        {
          "SPEED": 10000000000,
          "SPEED_S": "10000000000",
          "SPEED_HUMAN": "10.00 Gb",
          "MAC_ADDRESS": "90:e2:ba:00:91:14",
          "DESCRIPTION": "82599EB 10-Gigabit SFI/SFP+ Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "e8:9a:8f:73:ee:38",
          "DESCRIPTION": "82576 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SPEED": 1000000000,
          "SPEED_S": "1000000000",
          "SPEED_HUMAN": "1.00 Gb",
          "MAC_ADDRESS": "e8:9a:8f:73:ee:39",
          "DESCRIPTION": "82576 Gigabit Network Connection - Intel Corporation",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "DISK": [
        {
          "SIZE": 1000204886016,
          "SIZE_S": "1000204886016",
          "SIZE_HUMAN": "931.51 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST91000640NS",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 1000204886016,
          "SIZE_S": "1000204886016",
          "SIZE_HUMAN": "931.51 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST91000640NS",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 1000204886016,
          "SIZE_S": "1000204886016",
          "SIZE_HUMAN": "931.51 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST91000640NS",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 1000204886016,
          "SIZE_S": "1000204886016",
          "SIZE_HUMAN": "931.51 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST91000640NS",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 1000204886016,
          "SIZE_S": "1000204886016",
          "SIZE_HUMAN": "931.51 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST91000640NS",
          "PRODUCT": "",
          "VENDOR": ""
        },
        {
          "SIZE": 1000204886016,
          "SIZE_S": "1000204886016",
          "SIZE_HUMAN": "931.51 GB",
          "TYPE": "SCSI",
          "DESCRIPTION": "Seagate ST91000640NS",
          "PRODUCT": "",
          "VENDOR": ""
        }
      ],
      "BASE": {
        "DESCRIPTION": "",
        "PRODUCT": "",
        "VENDOR": ""
      }
    },
    "LLDP": {
      "INTERFACES": [
        {
          "NAME": "eth0",
          "CHASSIS": {
            "NAME": "10ge-access03.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "78:19:f7:88:55:00"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex4500-40f , version 11.4R2.14 Build date: 2012-03-17 17:46:53 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "687"
            },
            "DESCRIPTION": "xe-1/0/20.0"
          },
          "VLANS": [
            {
              "ID": 128,
              "NAME": "EWR-HADOOP"
            }
          ]
        },
        {
          "NAME": "eth2",
          "CHASSIS": {
            "NAME": "re0.access-switch05.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "84:18:88:23:27:f0"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex8216 , version 11.4R2.14 Build date: 2012-03-17 17:46:53 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "1835"
            },
            "DESCRIPTION": "ge-14/0/28.0"
          },
          "VLANS": [
            {
              "ID": 108,
              "NAME": "EWR-PROVISIONING"
            }
          ]
        },
        {
          "NAME": "eth1",
          "CHASSIS": {
            "NAME": "re0.access-switch06.ewr01",
            "ID": {
              "TYPE": "mac",
              "VALUE": "84:18:88:23:73:f0"
            },
            "DESCRIPTION": "Juniper Networks, Inc. ex8216 , version 11.4R2.14 Build date: 2012-03-17 17:46:53 UTC "
          },
          "PORT": {
            "ID": {
              "TYPE": "local",
              "VALUE": "1450"
            },
            "DESCRIPTION": "ge-14/0/28.0"
          },
          "VLANS": [
            {
              "ID": 108,
              "NAME": "EWR-PROVISIONING"
            }
          ]
        }
      ]
    },
    "IPMI": {
      "ASSET_ID": 1189,
      "ASSET_TAG": "000879",
      "IPMI_USERNAME": "root",
      "IPMI_PASSWORD": "IFYJ49mO9VW81vW4",
      "IPMI_GATEWAY": "172.16.32.1",
      "IPMI_ADDRESS": "172.16.36.222",
      "IPMI_NETMASK": "255.255.240.0",
      "ID": 1181
    },
    "ADDRESSES": [
      {
        "ASSET_ID": 1189,
        "ASSET_TAG": "000879",
        "GATEWAY": "172.16.92.1",
        "ADDRESS": "172.16.92.13",
        "NETMASK": "255.255.254.0",
        "POOL": "EWR-HADOOP",
        "ID": 952
      }
    ],
    "POWER": [
      {
        "UNIT_ID": 0,
        "UNITS": [
          {
            "KEY": "POWER_PORT_A",
            "VALUE": "PDU158.EWR01",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip A",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          },
          {
            "KEY": "POWER_OUTLET_A",
            "VALUE": "CC5",
            "TYPE": "POWER_OUTLET",
            "LABEL": "Outlet A",
            "POSITION": 1,
            "IS_REQUIRED": true,
            "UNIQUE": false
          }
        ]
      },
      {
        "UNIT_ID": 1,
        "UNITS": [
          {
            "KEY": "POWER_PORT_B",
            "VALUE": "PDU157.EWR01",
            "TYPE": "POWER_PORT",
            "LABEL": "Plug Strip B",
            "POSITION": 0,
            "IS_REQUIRED": true,
            "UNIQUE": true
          },
          {
            "KEY": "POWER_OUTLET_B",
            "VALUE": "CC5",
            "TYPE": "POWER_OUTLET",
            "LABEL": "Outlet B",
            "POSITION": 1,
            "IS_REQUIRED": true,
            "UNIQUE": false
          }
        ]
      }
    ],
    "ATTRIBS": {
      "0": {
        "CHASSIS_TAG": "000879",
        "RACK_POSITION": "EWR01-C301-U08",
        "DISK_STORAGE_TOTAL": "6001229316096",
        "CONTACT": "sre-data@tumblr.com",
        "PRIMARY_ROLE": "HADOOP",
        "SECONDARY_ROLE": "REGION_SERVER",
        "POOL": "JELLY",
        "NODECLASS": "regionserver6node",
        "SYSTEM_PASSWORD": "6YCZoqSQEVVb",
        "HOSTNAME": "hbrs-8404b278.ewr01.tumblr.net",
        "PROVISIONING_PROCESS_JSON": "{\"json_class\":\"Collins::State::Specification\",\"data\":{\"name\":\"vlan_moved_to_provisioning\",\"description\":\"Moved to provisioning VLAN\",\"timestamp\":1397039791,\"extras\":{\"log\":[{\"count\":0,\"timestamp\":1397014848,\"name\":\"reprovision\",\"result\":true},{\"count\":1,\"timestamp\":1397017832,\"name\":\"reboot_hard\",\"result\":true},{\"count\":2,\"timestamp\":1397018750,\"name\":\"reprovision\",\"result\":true},{\"count\":3,\"timestamp\":1397021747,\"name\":\"reprovision\",\"result\":true},{\"count\":4,\"timestamp\":1397024746,\"name\":\"reprovision\",\"result\":true},{\"count\":5,\"timestamp\":1397027749,\"name\":\"reprovision\",\"result\":true},{\"count\":6,\"timestamp\":1397030750,\"name\":\"reprovision\",\"result\":true},{\"count\":7,\"timestamp\":1397033749,\"name\":\"reprovision\",\"result\":true},{\"count\":8,\"timestamp\":1397036749,\"name\":\"reprovision\",\"result\":true},{\"count\":9,\"timestamp\":1397039752,\"name\":\"reprovision\",\"result\":true}]}}}",
        "CHASSIS_POSITION": "01",
        "D2_CUTOFF": "OFF",
        "ORIGINAL_STATUS": "Maintenance",
        "LLDP_VERIFIED": "1356196990",
        "CDH4": "upgraded",
        "HARDWARE_PRODUCT": "PowerEdge C6105",
        "OS_VENDOR": "CentOS",
        "OS_RELEASE": "5.8",
        "OS_CODENAME": "Final",
        "KERNEL": "2.6.18-308.4.1.el5",
        "HARDWARE_VENDOR": "Dell",
        "BUILD_CONTACT": "cjshaulis"
      }
    }
  }
] ;

/*
//TODO: parse URL from creds file and use correct protocol/hostname
exports.assets = function(params, handler){
  var err = arguments[2];
  var opts = {
    auth: creds.username + ":" + creds.password,
    hostname: "collins.ewr01.tumblr.net",
    port: 443,
    path: "/api/assets?" + querystring.stringify(params),
    method: "GET",
    headers: {
      accept: "application/json"
    }
  };
  console.log("Collins request to " + opts.hostname + " " + opts.path);
  return https.request(opts)
     .on("error", err)
     .on("response",handler)
     .end();
};
*/

exports.assets = function(){
  var params = arguments[0] || {};
  //TODO instead of reading static assets, lets query collins. see above
  return _.map(s,function(x){ return Asset(x); });
};
