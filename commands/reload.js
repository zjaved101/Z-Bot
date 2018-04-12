exports.run = (client, message, args) => {

    const modRole = message.guild.roles.find("name", "HighLevel Admin")
    if(!modRole){
        return console.log("The Highlevel Admin role does not exit");
    }

    if(!message.member.roles.has(modRole.id)) return message.reply("Must be an admin to use this command");

    if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.reply(`The command ${args[0]} has been reloaded`);
  };