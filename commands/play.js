exports.run = (client, message, args) => {

    if(message.member.voiceChannel){
        message.member.voiceChannel.join().then(connection => {
            console.log("I have successfully connected to the channel!");

            const ytdl = require('ytdl-core');
            // var link = args[0];
            // console.log(typeof link == "string");
            if(link !== undefined){
                const dispatcher = connection.playStream(ytdl(link, { filter: 'audioonly'}));
                dispatcher.on('end', () => {
                    connection.disconnect();
                    message.member.voiceChannel.leave();
                });
            } else{
                message.reply("Pass in a youtube link!");
            }

            // connection.disconnect();
            // message.member.voiceChannel.leave();
        }).catch(console.log);
    } else{
        message.reply("You need to join a voice channel first!");
        }
}