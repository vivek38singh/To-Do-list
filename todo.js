//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let items=["workout","breakfast"];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

//homefunction
app.get("/", function(req, res){
  let today=new Date();
  let options={
    weekday:"long",day:"numeric",month:"long"
  };
  let day=today.toLocaleDateString("en-US",options);
  res.render("list",{details:day, newListItems:items});
});

//pushing the new item to itemslist
app.post("/",function(req,res){
  let item=req.body.newItem;
  items.push(item);
//redirect to homefunction page
  res.redirect("/")
});

//start the server at 3000 port
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
