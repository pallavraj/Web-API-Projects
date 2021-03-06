// This code depends on jQuery Core and Handlebars.js
const express = require('express');
const app = express();
const request = require('request');
app.set("view engine" , "ejs");
app.use(express.static(__dirname + '/public'));



app.get("/",function (req , res) {
    res.send("index");
})


app.get('/results', function (req , res) {

    var q = req.query.search;
    var user_key = 'cb63a0b7167858983a55046353183b6d';


        var url = 'https://api.betterdoctor.com/2016-03-01/doctors?query='+ q +',100&skip=2&limit=10&user_key='+ user_key;


    request(url ,  function (error , response , data) {
        console.log(typeof data)
        if(!error && response.statusCode==200){

            var data = JSON.parse(data);
            res.render("index" , {data : data});
        }


    })

})

app.get('/know', function (req , res) {
    var user_key = 'cb63a0b7167858983a55046353183b6d';
    var url = 'https://api.betterdoctor.com/2018-03-01/specialties?skip=0&limit=50&user_key='+user_key;


    request(url ,  function (error , response , data) {
        console.log(typeof data)
        if(!error && response.statusCode==200){

            var data = JSON.parse(data);
            res.render("know" , {data : data});
        }


    })

})


app.get('/search', function (req , res) {

    res.render("main");

})

app.get('/team', function (req , res) {

    res.render("team");

})

app.get('/about', function (req , res) {

    res.render("about");

})


app.listen(5000,function () {

    console.log("SERVER RUNNING")
})