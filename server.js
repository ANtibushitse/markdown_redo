var express = require ("express"); 
var app = express(); 

var bodyParser=require("body-parser")


app.get("/",function(req, res){
	res.sendFile(__dirname + "/public/index.html"); 
}) 
app.use(express.static("public")); 

app.listen(7188, function() {
	console.log("7188 est ecouté.")
})  