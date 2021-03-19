require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

//Import Command Handler
const commandHandler = require('./commands');

// Announce arrival
client.once("ready", () => {
    console.log('I have arrived, sirs');
});

// Respond to bot command 🤖
client.on("message",commandHandler);

 
client.login(process.env.TOKEN);