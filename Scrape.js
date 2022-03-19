const cheerio = require('cheerio');
const https = require('https');

const options = {
    hostname: 'www.udemy.com',
    port: 443,
    method: 'GET',
}

const req = https.request(options , res => {
    console.log("status : " + res.statusCode);

    res.on('data' , data => {
        process.stdout.write(data)
    })

})

req.on('error' , (error) => {
    console.log(error);
})

req.end();