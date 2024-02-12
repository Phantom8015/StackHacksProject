// Import necessary modules
const { SlashCommandBuilder } = require('@discordjs/builders'); // Import SlashCommandBuilder for creating slash commands
const { EmbedBuilder } = require('discord.js'); // Import EmbedBuilder for creating embeds

// Export module
module.exports = {
    // Define the slash command data
    data: new SlashCommandBuilder()
        .setName('carbonate') // Command name
        .setDescription('Get the carbon data for a city.') // Command description
        .addStringOption(option => // Add a string option for specifying the city
            option.setName('city')
                .setDescription('The city to query')
                .setRequired(true)), // City option is required

    // Execute function to handle the command
    async execute(interaction) {
        const city = interaction.options.getString('city'); // Get the city option from the interaction

        try {
            // Execute a child process to run a Python script with the specified city
            const { exec } = require('child_process');
            const command = "python cmd_1.py " + city.replace(' ', '_'); // Prepare the command
            exec(command, (error, stdout, stderr) => { // Execute the command
                if (error) { // If there's an error, log it and reply with an error message
                    console.log(`error: ${error.message}`);
                    interaction.reply('Error occurred while running the command.');
                    return;
                }

                if (stderr) { // If there's stderr output, console.log it and reply with an error message
                    console.log(`stderr: ${stderr}`);
                    interaction.reply('Error occurred while running the command.');
                    return;
                }

                if (stdout.startsWith('No')) { // If the stdout starts with 'No', it means no data found
                    // Create and send an embed with an error message
                    const embed = new EmbedBuilder()
                        .setTitle('Results')
                        .setColor('#ff0000')
                        .setDescription('No data found for that city. Please try again with a different city.');
                    interaction.reply({ embeds: [embed] });
                    return;
                }

                // Parse the stdout (assuming it's in JSON format)
                data = JSON.parse(stdout.replace(/'/g, '"'));

                // Create an embed with the carbon data
                const embed = new EmbedBuilder()
                    .setTitle('Results')
                    .setColor('#07a700')
                    .addFields(
                        { name: 'Population', value: data[0], inline: true }, // Population field
                        { name: 'City', value: data[1], inline: true }, // City field
                        { name: 'Country', value: data[2], inline: true }, // Country field
                        { name: 'CO2 Emissions in metric tons', value: data[3], inline: true }, // CO2 emissions field
                        { name: 'How many people can that can be killed by that amount of CO2', value: data[4], inline: true }, // Kill rate field
                    )
                    .setFooter("Like this bot? Try our website, https://citycarbon.tech! The website has been updated to our latest and greatest algorithm that you see here!")

                // Reply with the embed
                interaction.reply({ embeds: [embed] });
            });
        } catch (error) { // If an error occurs, log it and reply with an error message
            console.error(error);
            const errorEmbed = new EmbedBuilder()
                .setTitle('Error')
                .setColor('#ff000')
                .setDescription("Please report the error to ")
        }
    },
};


