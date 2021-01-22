# Bluetooth Battery Extension
## Description
This is a very simple gnome-extension which shows battery percentage of Mi True Wireless 2 Basic headphones. It should work, by the way, even with other devices, but i have not tested.

## Dependencies
In order to work, you need to install Bluetooth Headset Battery Level from here:

https://github.com/TheWeirdDev/Bluetooth_Headset_Battery_Level

and also you may need to follow those instructions to test and see if all works good.

## Add extension
Before you add your extension, open up the file <a href="bluetoothpercentage@luiggi.it/extension.js">extension.js</a> and edit line number 8 with your headphones MAC Address:
```Javascript
let MAC_ADDR = "bluetooth_battery [HEADPHONES_MAC_ADDRESS]"; //INSERT YOUR MAC ADDRESS HERE
```
Then save it, and move the entire folder to:
```
~/.local/share/gnome-shell/extensions/
```
In the end, you need to open up your extension manager and activate this new extension. After that, you need to reload Gnome (Alt+F2 and then type r). If everything was fine, you should now see at the top right corner the Mi logo near a percentage, which is the battery level of your headphones.

### Change icon
If you want to change the icon, you can do it by replace the "logo.png" file with a custom one, then reload Gnome again.