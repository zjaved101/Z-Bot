module.exports = (client, message) => {
    // ignore all bots
    if(message.author.bot) return;

    // ignore messages not starting with the prefix (in config.json)
    if(message.content.indexOf(client.config.prefix) !==0 ) return;

    // our standard argument/command name definition
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);

    // if command doesn't exist, silently exit and do nothing
    if(!cmd) return message.reply("Sorry to say this command doesn't exist ;(");

    // run command
    cmd.run(client, message, args);
};