var request = require('request');
var jokeURL = "https://api.chucknorris.io/jokes/random";

function index(req, res){
    request( jokeURL, function(err, response, body){
        const joke = JSON.parse(body).value
        res.render('index', {joke})
        console.log(joke)
    });
}

module.exports = { index };