const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const cron = require('node-cron');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log("Bot is ready");
});

client.initialize();

const number = "919872958327@c.us";

// 2:00 PM
cron.schedule('0 14 * * *', () => {
    client.sendMessage(number, "Going to eat");
});

// 3:30 PM
cron.schedule('30 15 * * *', () => {
    client.sendMessage(number, "Going to college");
});

// 4:10 PM
cron.schedule('10 16 * * *', () => {
    client.sendMessage(number, "At college");
});

// 9:10 PM
cron.schedule('10 21 * * *', () => {
    client.sendMessage(number, "Chitkara se ja rha hun");
});

// 9:30 PM
cron.schedule('30 21 * * *', () => {
    client.sendMessage(number, "At PG");
});