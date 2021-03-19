
const butler = require('./commands/butler');
const currentgame = require('./commands/currentGame');
const region = require('./commands/region');

// Handler that parsers the commands from the message and invokes the relevant function.
module.exports = (message) => {
    // Command objects
    const Commands = {
        butler,
        currentgame,
        region,
    };
    let tokens = message.content.split(" "); // parse the bot command 
    let command = tokens.shift(); // Get the command from the tokens (e.g. !command)

    if (command.charAt(0) === "!") {
        command = command.substring(1); // remove the "!" from the command 
        if (command in Commands) {
            Commands[command](message,tokens); // invoke the command
        } else {
            message.channel.send("Sir, I don't know that one...");
        }
    }
};
