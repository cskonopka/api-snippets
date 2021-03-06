// Download the Node helper library from twilio.com/docs/node/install
// These identifiers are your accountSid and authToken from
// https://www.twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.api.account.newKeys
  .create({
    friendlyName: 'User Joey',
  })
  .then(key => {
    process.stdout.write(key.sid);
    process.stdout.write(key.secret);
  });
