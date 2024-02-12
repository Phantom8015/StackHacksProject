// Import necessary modules
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
require("dotenv").config(); // Load environment variables from .env file

// Export module
module.exports = {
	name: "ready", // Event name
	once: true, // Event should only be executed once
	execute(client, commands) { // Function to execute when the event occurs
		console.log(`Logged in as ${client.user.tag}!`); // Log client's tag upon login
		const clientId = client.user.id; // Get the client's user ID
		const guildId = process.env.GUILD_ID; // Get the guild ID from environment variables
		const rest = new REST({ // Create a new REST client
			version: "10", // Discord API version
		}).setToken(process.env.TOKEN); // Set the token for the REST client

		// Asynchronous function to register slash commands
		(async () => {
			try {
				// Check if environment is production
				if (process.env.ENV === "production") {
					// Register commands globally
					await rest.put(
						Routes.applicationCommands(clientId),
						{ body: commands },
					);
					console.log("Successfully registered commands globally."); // Log success message
				} else {
					// Register commands locally for a specific guild
					await rest.put(
						Routes.applicationGuildCommands(clientId, guildId),
						{ body: commands },
					);
					console.log("Successfully registered commands locally."); // Log success message
				}

				commands = {}; // Reset commands object
			} catch (err) { // Catch any errors that occur
				if (err) console.error(err); // Log the error if it occurs
			}
		})();
	},
};
