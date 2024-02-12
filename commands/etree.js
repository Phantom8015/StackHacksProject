// Import necessary modules
const { EmbedBuilder } = require('discord.js'); // Import EmbedBuilder for creating embeds

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('plant')
        .setDescription('Plant a real tree'),
    async execute(interaction) {
        // Create an embed message
        const embed = new EmbedBuilder()
            .setTitle("Plant a tree in real life")
            .setDescription("Microsoft E-Tree is a free game that plants a tree in real life!")
            .setColor('#07a700')
            .addFields({ name: "Click for more information", value: "https://blogs.msn.com/e-trees/" });

        // Send the embed message as a reply
        interaction.reply({ embeds: [embed] });
    }
};