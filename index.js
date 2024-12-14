#!/usr/bin/env node

const { exec } = require("child_process");

const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(err.message);
      } else if (stderr) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
};

async function toggleTailscaleVpn() {
  try {
    await runCommand('tailscale status')
    console.log('Tailscale VPN is connected! VPN is now disconnecting!')
    await runCommand('sudo tailscale down')
    console.log('VPN disconnected!');
  } catch (err) {
    console.log('Tailsclae VPN is disconnected! VPN is now connecting!')
    await runCommand('sudo tailscale up')
    console.log('VPN connected successfully!');
  }
}

toggleTailscaleVpn()
