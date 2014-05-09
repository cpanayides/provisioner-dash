# provisioner-dash

Realtime dashboard to monitor asset provisioning

## Collins Callbacks

We want to be informed whenever an asset:

* isProvisioning has an attribute update (provisioning process has been updated)
* !isProvisioning -> isProvisioning (now provisioning)
* !isProvisioned -> isProvisioned (now waiting to allocate)
* !isAllocated -> isAllocated (machine was just allocated)
* log events on any machine

## TODO

* Implement log streaming per asset
* import workflow for provisoining + allocation
* make display look better
