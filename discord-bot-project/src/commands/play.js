const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Bot is ready to play lesbian porno!');
});

client.on('messageCreate', async message => {
    if (message.content === '!play') {
        // Logic to play lesbian porno
    }
});

client.login('your-token-goes-here');