const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const cron = require('node-cron');

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log("Bot is ready!");
});

client.initialize();

// 7 AM message
cron.schedule('0 7 * * *', () => {
  client.sendMessage('91XXXXXXXXXX@c.us', 'Good morning Mom ❤️');
});

// 10 PM message
cron.schedule('0 22 * * *', () => {
  client.sendMessage('91XXXXXXXXXX@c.us', 'Good night Dad ❤️');
});