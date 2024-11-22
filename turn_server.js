// Install the Twilio Node.js SDK
const twilio = require("twilio");

// Replace with your Twilio Account SID and Auth Token

const client = twilio(accountSid, authToken);

async function createToken() {
  const token = await client.tokens.create();
  console.log(token.iceServers);
}

createToken();
