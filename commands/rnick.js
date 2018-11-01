exports.run = (client, message, args) => {

    function changeNick(text, member) {
        member.setNickname(text[Math.floor(Math.random() * text.length)]).catch("ERROR:" + console.error);
    }

    //This is how you can change a users nickname
    const request = require('request');
    const wordSites = ["http://svnweb.freebsd.org/csrg/share/dict/words?view=co&content-type=text/plain", "https://www.cs.cmu.edu/~biglou/resources/bad-words.txt"];
    
    let index = 0;
    if(args.length > 1)
        index = args[1];

    request({
        url: wordSites[index],
        json: true,
    }, (err, res, body) => {
        if(!err && res.statusCode === 200) {
            let member = message.mentions.members.first();
            let parsed = body.split('\n');

            const count = Math.floor(Math.random() * 50);
            for(let i = 0; i < count; i++) 
                setTimeout(changeNick, 3000, parsed, member);
            
            console.log('finished changing nickname');
        }
        else {
            console.log(err);
        }
    });
    
}