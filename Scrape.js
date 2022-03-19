const fetch = require('node-fetch');
const cheerio = require('cheerio'); 
const url = 'https://www.udemy.com/course/database-engines-crash-course/'

function getCourseDetails(){

    return fetch(url)
        .then((response) => {
            return response.text()
        }).catch((err) => {
            console.log(err);    
        });

}

getCourseDetails()
    .then(body => {
        console.log(body);
    })

