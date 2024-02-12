# CITY CARBON

City Carbon is a Discord bot that allows you to view the stats of a city in terms of gasoline car emissions. With a single command, you can view the total emissions of a city, the population of the city, and the emissions and how many people would die if all the emissions were to be inhaled.

## Installation

First you need to install [Node.js](https://nodejs.org/en/download/) and Python 3.11 or higher. Then you need to install the required packages.

Then clone the repository.

```bash
git clone {url}
```

## Usage

Navigate to the directory using `cd {dir}` and run the following command.

Then use the package manager [npm](https://www.npmjs.com/) to install the required packages.

```bash
npm install
```

Then you must open the folder in an application like [Visual Studio Code](https://code.visualstudio.com/) and fill in the file called `.env` with the following information.
    
```env 
TOKEN={your bot token} // Obtain this by creating a bot in the Discord Developer Portal and copying the token. Refer to this video by How To Tech for more in depth tutorial: https://youtu.be/mcsbmv7mZus
GUILD_ID={your guild id} // Obtain this by right clicking on your Discord server and clicking on "Copy ID". Make sure to enable developer mode in your Discord settings
ENV=production // Change this to anything but production if you want to run the bot in development mode which will only load the commands in the guild you specified
```

Finally, run the bot using the following command.

```bash
node .
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. 

Please make sure to update tests as appropriate.


## License
City Carbon is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.



## Developers 
Bisher Almasri - [GitHub](https://github.com/BISHER-AL-MASRI) 
Evaan Chowdhry - [GitHub](https://github.com/EvaanChowdhry)
