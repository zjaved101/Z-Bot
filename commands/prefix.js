exports.run = (client, message, args) => {

    const modRole = message.guild.roles.find("name", "HighLevel Admin")

    if(!modRole){
        return console.log("The Highlevel Admin role does not exit");
    }

    if(message.author.id !== message.config.ownerID) {
        message.channel.send("You do not have permission to use that command!");
        return;
    }

    //Gets the prefix from the command
        let newPrefix = message.content.split(" ").slice(1, 2)[0];

        //Changes prefix
        client.config.prefix = newPrefix;

        //Writes to config file with new prefix
        fs.writeFile("./config.json", JSON.stringify(message.config), (err) => message.config.error);

        message.channel.send("prefix has been changed");
}