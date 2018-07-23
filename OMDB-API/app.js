const express = require('express');
const app = express();
const request = require('request');
app.set("view engine" , "ejs");

app.get('/results', function (req , res) {

    request("http://www.omdbapi.com/?s=star&apikey=7848dea3" , function (error , response , body) {
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
