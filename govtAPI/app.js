const express = require('express');
const request = require('request');
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/" , function(req , res) {
    res.send("index");

})


app.get('/results',function (req , res) {

    // var q=res.query.search;
    var user_key= '579b464db66ec23bdd000001ea457e602bb74df466bf6e0c8bdfc55e';

    var url = 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key='+user_key+'&format=json&offset=0&limit=10000';

    request(url , function (error,response ,data) {
        
        if(!error ){
            console.log(typeof data)
            var data = JSON.parse(data);
            res.render("result", {data:data});
        }
        
    })

})

app.listen(5000 , function () {
    console.log("SERVER running");
})