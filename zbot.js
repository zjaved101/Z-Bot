const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const config = require("./config.json");

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      let eventFunction = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      // super-secret recipe to call events with all their proper arguments *after* the `client` var.
      client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
  });
  
  client.on("message", message => {
    if (message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
  
    // This is the best way to define args. Trust me.
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // The list of if/else is replaced with those simple 2 lines:
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
    } catch (err) {
      console.error(err);
    }
  });

// client.on("message", (message) => {
//     const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
//     const command = args.shift().toLowerCase();

//     //Checks if someone inputted a command
//     if(!message.content.startsWith(config.prefix) || message.author.bot) return;

//     if (command === "ping"){
//         message.channel.send("pong!");
//     }

//     if(command === "doo"){
//         message.channel.send("doo");
//     }

//     if(command === "play"){
//         if(message.member.voiceChannel){
//             message.member.voiceChannel.join().then(connection => {
//                 message.reply("I have successfully connected to the channel!");
//             }).catch(console.log);
//         } else{
//             message.reply("You need to join a voice channel first!");
//         }
//     }

//     //------------------- Commands under this are for owner of this bot only    -----------------------------------------------------
//     if(message.author.id !== config.ownerID) {
//         message.channel.send("You do not have permission to use that command!");
//         return;
//     }

//     if(command === "prefix"){
//         //Gets the prefix from the command
//         let newPrefix = message.content.split(" ").slice(1, 2)[0];

//         //Changes prefix
//         config.prefix = newPrefix;

//         //Writes to config file with new prefix
//         fs.writeFile("./config.json", JSON.stringify(config), (err) => config.error);

//         message.channel.send("prefix has been changed");
//     }

//     if(command === "kick"){
//         let member = message.mentions.members.first();
//         let reason = args.slice(1).join(" ");
//         member.kick(reason);
//     }
    
    

client.login(config.token);