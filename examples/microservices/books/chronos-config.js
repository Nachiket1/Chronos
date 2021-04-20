require('dotenv').config();
const chronos = require('chronos-tracker');

chronos.use({
  microservice: 'books',
  interval: 2000,
  // dockerized: true,
  database: {
    connection: 'REST',
    type: 'MongoDB',
    URI: process.env.CHRONOS_URI,
  },
  notifications: [
    {
      type: 'email',
      settings: {
        emails: 'nachiketpingle@gmail.com',
        emailHost: 'smpt@gmail.com',
        emailPort: 465,
        user: process.env.SENDER_EMAIL,
        password: process.env.SENDER_PASSWORD
      }
    }
  ],
});