const express = require ("express");
const bodyParser = require ("body-parser");
const request = require ("request");
const https = require ("https");

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


app.post ("/page2", function (req, res){
const name = req.body.name;
const email = req.body.email;
const phone  = req.body.number;
const date_of_birth = req.body.date;

const data = {
  name,
  email,
  phone,
  date_of_birth
}

const jsonData = JSON.stringify(data);
const url = "https://chess-tournament-api.devtest.ge/api/register";
const options = {
  method:"POST"
}
const request  = https.request (url, options, function (response){
  response.on ("data", function (data){
  })

})
request.write(jsonData);
request.end();

res.redirect("/page3");
});

app.post("/page3", function (req,res){

  res.redirect("/page4");
});


app.listen(3000);
