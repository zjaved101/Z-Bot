exports.run = (client, message, args) => {
    
    // const wordSite = "http://svnweb.freebsd.org/csrg/share/dict/words?view=co&content-type=text/plain";
    // const request = require('request');
    // const timeout = 10 * 1000;
    // const opts = {url: url, timeout: timeout};

    // requests(opts, function (err, res, body) {
    //     if(err) {
    //         console.dir(err)
    //         return
    //     }

    //     const statusCode = res.statusCode;
    //     console.log('status code: ' + statusCode);
    // });

    // counter = 0;
    // run = 90;

    function changeNick(text, member) {
        member.setNickname(text[Math.floor(Math.random() * text.length)]).catch(console.error);
    }

    //This is how you can change a users nickname
    const request = require('request');
    const wordSite = "http://svnweb.freebsd.org/csrg/share/dict/words?view=co&content-type=text/plain"
    request({
        url: wordSite,
        json: true,
    }, (err, res, body) => {
        if(!err && res.statusCode === 200) {
            let member = message.mentions.members.first();
            let parsed = body.split('\n');
            // console.log(parse);
            const count = Math.floor(Math.random() * 50);
            for(let i = 0; i < count; i++) {
                // member.setNickname(parse[Math.floor(Math.random() * parse.length)]).catch(console.error);
                setTimeout(changeNick, 2000, parsed, member);
                // console.log(body);
                // let parsed = JSON.parse(body);
                // console.log(parsed);
                // console.log(body.key);
                // console.log(body[Math.floor(Math.random() * body.length)]);
                // member.setNickname(body[Math.floor(Math.random() * body.length)]);
            }
            console.log('finished changing nickname');
            // console.log(body[Math.floor(Math.random() * body.length)]);
            // member.setNickname(body[Math.floor(Math.random() * body.length)]);
        }
        else {
            console.log(err);
        }
    });
    
    // var member = message.mentions.members.first();
    // member.setNickname("prebbbb");



    
}