var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
//Models

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

//landing page...
app.get("/",function(req,res){
    res.render("index");
});

app.get("/subjects/:sub",function(req,res){
 res.send(req.params.sub);
});



// ----------------------------------------------------//
// ----------------------------------------------------//

app.get("/admin",(req,res)=>{
    res.render("admin/index");
});

app.post("/admin",(req,res)=>{

})

app.listen(4000, function(){
    console.log("SERVER IS RUNNING")
})