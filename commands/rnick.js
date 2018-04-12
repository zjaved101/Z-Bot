exports.run = (client, message, args) => {
    
    const wordSite = "http://svnweb.freebsd.org/csrg/share/dict/words?view=co&content-type=text/plain";
    const request = require('request');
    const timeout = 10 * 1000;
    const opts = {url: url, timeout: timeout};

    requests(opts, function (err, res, body) {
        if(err) {
            console.dir(err)
            return
        }

        const statusCode = res.statusCode;
        console.log('status code: ' + statusCode);
    });

    counter = 0;
    run = 90;

    
}