## Tailscale VPN Toggle Script ##
If you run your **own private** VPN server, you must definitely *use* Tailscale to connect to the VPN on different devices.

In addition to offering a VPN, Tailscale also **allows you to share files across different devices connected to the VPN**, *entirely safe* **from outsiders**.

Usage:
Install the script:
`npm install -g your-package-name`

Run the script:
To toggle the Tailscale VPN connection (connect if disconnected, disconnect if connected), run the following command:
`connect-vpn`

This command will automatically detect whether the VPN is **connected or not**, and it will either connect or disconnect *accordingly*.

***Requirements***:
- Tailscale must be installed and configured on your machine.