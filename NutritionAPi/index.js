// This code depends on jQuery Core and Handlebars.js
const express = require('express');
const app = express();
const request = require('request');
app.set("view engine" , "ejs");
app.use(express.static(__dirname + '/public'));



var NutritionixClient = require('nutritionix');
var nutritionix = new NutritionixClient({
    appId: 'YOUR_APP_ID',
    appKey: 'YOUR_APP_KEY'
    // debug: true, // defaults to false
});


app.get('/', function (req , res) {
    var user_key = 'cb63a0b7167858983a55046353183b6d'; // Get your API key at developer.betterdoctor.com

    var url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + user_key;


    request(url ,  function (error , response , data) {
        console.log(typeof data)
        if(!error && response.statusCode==200){

            var data = JSON.parse(data);
            res.render("index" , {data : data});
        }


    })

})



app.listen(5000,function () {

    console.log("SERVER RUNNING")
})