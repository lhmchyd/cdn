const { exec } = require("child_process");

const presence = {
  details: "Using Pake CLI",
  state: "Building a web app",
  largeImageKey: "logo",
  largeImageText: "Pake Web App",
  smallImageKey: "code",
  smallImageText: "Coding Mode",
  startTimestamp: Math.floor(Date.now() / 1000),
};

// Convert presence object to Discord RPC format
const args = [
  `--details "${presence.details}"`,
  `--state "${presence.state}"`,
  `--large_image "${presence.largeImageKey}"`,
  `--large_text "${presence.largeImageText}"`,
  `--small_image "${presence.smallImageKey}"`,
  `--small_text "${presence.smallImageText}"`,
  `--start_timestamp ${presence.startTimestamp}`,
].join(" ");

// Inject presence using Pake CLI
exec(`pake-cli rpc ${args}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Discord Rich Presence Set:\n${stdout}`);
});
