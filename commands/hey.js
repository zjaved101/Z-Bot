exports.run = (client, message, args) => {

    if(message.member.voiceChannel){
        message.member.voiceChannel.join().then(connection => {
            console.log("I have successfully connected to the channel!");

            const ytdl = require('ytdl-core');
            const dispatcher = connection.playStream(ytdl('https://www.youtube.com/watch?v=61i2iDz7u04', { filter: 'audioonly' }))
            //const dispatcher = connection.playArbitraryInput('https://www.youtube.com/watch?v=ZlAU_w7-Xp8');
            dispatcher.on('end', () => {
                connection.disconnect();
                message.member.voiceChannel.leave();
            });
            
        }).catch(console.log);
    } else{
        message.reply("You need to join a voice channel first!");
        }
}