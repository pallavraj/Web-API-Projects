const express = require('express');
const app = express();
const request = require('request');
app.set("view engine" , "ejs");
app.use(express.static(__dirname + '/public'));


app.get("/",function (req , res) {
    res.send("index");
})

app.get('/results', function (req , res) {
    // var q = req.query.search;
    var url = "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=barbed%20wire&q_artist=kendrick%20lamar&apikey=5a1d2a9325749b05f90c943354586824"


    request(url ,  function (error , response ,body ) {

       var data= JSON.parse(JSON.stringify(body))
            res.render("results" , {data : data});


    })

})


// const PORT =process.env || 5000;

app.listen(5000,function () {

    console.log("SERVER RUNNING")
})
