 
## Logitech kvm fix

This fixes logitech mouse/keyboards special keys and macros not working after switching from a different OS (windows, mac...) using a hardware kvm.

This mod assumes you are already using or have installed ratbagctl.

## How to use

I'd recommend having a scripts folder somewhere so you can put your reconnect.sh file inside

Once you have placed the reconnect.sh file in your preferred folder edit the `g502.rules` file so the `RUN+="SomePath/reconnect.sh"` points to your reconnect file.

You also need to set the idVendor and idProduct of your mouse, to get this information run the following command:

```bash
lsusb |grep logitech -i
```

#### If the command above doesn't give any output try this one and look on the list for your device:
```bash
lsusb
```

Here's an example output:
```bash
Bus 002 Device 004: ID 046d:c07d Logitech, Inc. G502 Mouse
```

The ID numbers before the `:` is the idVendor and the ones after the idProduct.

Here's an example of the resulting `g502.rules` file using the information above:

```bash
ATTRS{idVendor}=="046d", ATTRS{idProduct}=="c07d", RUN+="~/scripts/g502/reconnect.sh"
```

Once you have everything configured move the `g502.rules` file to `/etc/udev/rules.d/`

And you are done, if you have any issues or questions you can open an issue and I'll try to help.