
require('dotenv').config(); 

const fs = require('fs');

const express = require('express');

const { Client, Collection } = require('discord.js');



const app = express();

const PORT = process.env.PORT || 3000;



const client = new Client({

intents: [

    'Guilds',

    'GuildMessages',

    'GuildMembers'

]

});



client.on('error', (err) => {

console.log(err.message)

});



const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const commands = [];

client.commands = new Collection();



for (const file of commandFiles) {

const command = require(`./commands/${file}`);

commands.push(command.data.toJSON());

client.commands.set(command.data.name, command);

}



const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));



for (const file of eventFiles) {

const event = require(`./events/${file}`);

if (event.once) {

    client.once(event.name, (...args) => event.execute(...args, commands));

} else {

    client.on(event.name, (...args) => event.execute(...args, commands));

}

}

client.login(process.env.TOKEN)


































// i need 15 dollars for xbox game pass to play forza motorsport - evaan