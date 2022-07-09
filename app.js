const express = require ("express");
const bodyParser = require ("body-parser");
const request = require ("request");
const https = require("https");
const app  = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req,res){
  res.sendFile(__dirname+"/index.html");
});

app.get("/page2", function (req,res){
  res.sendFile(__dirname+"/page2.html");
});
app.get("/page3", function (req,res){
  res.sendFile(__dirname+"/page3.html");
});
app.get("/page4", function (req,res){
  res.sendFile(__dirname+"/page4.html");
});



app.post("/page2", function (req, res) {
  const name = req.body.fName;
  const email = req.body.email;
  const number = req.body.number;
  const date = req.body.date;
  console.log (name);




});

app.listen(3000, function (){
  console.log("server is running ");

});
