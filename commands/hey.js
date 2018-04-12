exports.run = (client, message, args) => {

    if(message.member.voiceChannel){
        message.member.voiceChannel.join().then(connection => {
            console.log("I have successfully connected to the channel!");

            const ytdl = require('ytdl-core');
            //const dispatcher = connection.playStream(ytdl('https://www.youtube.com/watch?v=61i2iDz7u04', { filter: 'audioonly' }))

            // let choice = args[0];
            // console.log(choice);
            // const dispatcher;

            // if(args.size < 0){
            //     //EDM version
            //     const dispatcher = connection.playStream(ytdl('https://www.youtube.com/watch?v=e5nyQmaq4k4', { filter: 'audioonly' }))
            //     // dispatcher.on('end', () => {
            //     //     connection.disconnect();
            //     //     message.member.voiceChannel.leave();
            //     // });
            // } else{
            //     //High pitched
            //     dispatcher = connection.playStream(ytdl('https://www.youtube.com/watch?v=yIL9wLxG01M', { filter: 'audioonly' }))
            //     // dispatcher.on('end', () => {
            //     //     connection.disconnect();
            //     //     message.member.voiceChannel.leave();
            //     // });
            // }

            var link; 
            
            if(args[0] == 1){
                link = 'https://www.youtube.com/watch?v=yIL9wLxG01M';
            }
            else{
                
                link = 'https://www.youtube.com/watch?v=e5nyQmaq4k4';
            }

            const dispatcher = connection.playStream(ytdl(link, { filter: 'audioonly'}));
            dispatcher.on('end', () => {
                connection.disconnect();
                message.member.voiceChannel.leave();
            });
            
        }).catch(console.log);
    } else{
        message.reply("You need to join a voice channel first!");
        }
}