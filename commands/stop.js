exports.run = (client, message, args) => {
    if(message.member.voiceChannel){
        //Look at this later, figure out how to get correct voiceConnection
        // let voiceConnection = client.voiceConnections.get("313602511057453056");
        // console.log("voice: " + voiceConnection);
        // voiceConnection.disconnect();
        if(message.member.voiceChannel.connection !== null){
            message.member.voiceChannel.connection.disconnect();
        } else {
            message.reply("Bot must be playing something first");
        }
    } else{
        message.reply("You must be in a voice channel first");
    }
}