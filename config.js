const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DORA-MD~toJlBSya#klyUwrJ6h8xN0Z1Q0Qg2eM8l0bazxqxxBueWEaC2zgQ",
ALIVE_IMG: process.env.ALIVE_IMG || "",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, I am DORA MD I am alive now!",
};
