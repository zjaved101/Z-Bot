exports.run = (client, message, args) => {
    if(message.member.voiceChannel){
        message.member.voiceChannel.join().then(connection => {
            console.log("I have successfully connected to the channel!");

            let path = require("path");
            //console.log("./ = %s", path.resolve("./"));

            let link;
            //console.log(args[0] === "ads");
            if(args[0] === "ads"){
                link = path.resolve("./") + "/audio/fb_ads.mp3";
            }

            const dispatcher = connection.playFile(link);
            dispatcher.on('end', () => {
                connection.disconnect();
                message.member.voiceChannel.leave();
            });
        }).catch(console.log);
    } else{
        message.reply("You need to join a voice channel first!");
        }
}