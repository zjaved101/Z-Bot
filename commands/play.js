exports.run = (client, message, args) => {

    if(message.member.voiceChannel){
        message.member.voiceChannel.join().then(connection => {
            console.log("I have successfully connected to the channel!");

            connection.disconnect();
            message.member.voiceChannel.leave();
        }).catch(console.log);
    } else{
        message.reply("You need to join a voice channel first!");
        }
}