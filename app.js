var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));






app.listen(3000, function()
{
    console.log("SERVER IS RUNNING")
})