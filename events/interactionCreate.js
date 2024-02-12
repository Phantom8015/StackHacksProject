// Exporting a module with a function named "interactionCreate"
module.exports = {
	// Defining the function "execute" that takes an "interaction" object as a parameter
	name: "interactionCreate",
	async execute(interaction) {
		// Checking if the interaction is a command
		if (!interaction.isCommand()) return;

		// Retrieving the command object corresponding to the interaction's commandName
		const command = interaction.client.commands.get(interaction.commandName);

		// If the command does not exist, return
		if (!command) return;

		try {
			// Delaying execution of the command by 1000 milliseconds (1 second)
			setTimeout(() => {
				command.execute(interaction); // Executing the command with the interaction object
			}, 1000);
		} catch (error) {
			// Handling errors by replying with an error message and a Discord server link
			await interaction.reply('There was an unexpected error while executing this command. Please try again later.');
		}
	}
};
