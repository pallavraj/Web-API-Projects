const express = require('express');
const app = express();
const request = require('request');
app.set("view engine" , "ejs");
app.use(express.static(__dirname + '/public'));


app.get("/",function (req , res) {
    res.render("search");
})

app.get('/results', function (req , res) {
    var q = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + q + "&apikey=7848dea3"

    request(url ,  function (error , response , body) {
        if(!error && response.statusCode==200){
            var data = JSON.parse(body);
            res.render("results" , {data : data});
        }

    })

})


// const PORT =process.env || 5000;

app.listen(5000,function () {

console.log("SERVER RUNNING")
})
