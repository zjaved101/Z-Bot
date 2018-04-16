exports.run = (client, message, args) => {
    if (message.member.voiceChannel) {
        if (message.member.voiceChannel.connection === null) {
            message.member.voiceChannel.join().then(connection => {
                console.log("I have successfully connected to the channel!");

                let rand = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
                let path = require("path");
                //console.log("./ = %s", path.resolve("./"));

                let link;
                // //console.log(args[0] === "ads");
                // if (args[0] === "ads") {
                //     link = path.resolve("./") + "/audio/fb_ads.mp3";
                // }

                if(rand === 0){
                    link = path.resolve("./" + "/audio/fb_ads.mp3");
                } else if(rand === 1){
                    link = path.resolve("./" + "/audio/fb_categories.mp3");
                }


                const dispatcher = connection.playFile(link);
                dispatcher.setVolume(1);
                dispatcher.on('end', () => {
                    connection.disconnect();
                    message.member.voiceChannel.leave();
                });
            }).catch(console.log);
        } else { message.reply("Chill bro, chill"); }
    } else {
        message.reply("You need to join a voice channel first!");
    }
}