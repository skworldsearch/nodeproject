const express = require('express');
const http = require('http');
var parseUrl = require('body-parser');
const app = express();

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root", // my username
    password: "root123", // my password
    database: "skworldsearch"
});

app.post("/register", (req, res) => {
  var Name = req.body.Name;
  var MailId = req.body.MailId;
  var Phonenumber = req.body.Phonenumber;
  var Password = req.body.Termscheck;
  var Termscheck = req.body.Termscheck;
});

con.connect(function() {
    
           
            // inserting new user data
            var sql = `INSERT INTO Registration (Name, MailId, Phonenumber, Password,Termscheck) VALUES ('${Name}', '${MailId}', '${Phonenumber}', '${Password}', '${Termscheck}')`;
            con.query(sql, function (err, result) {
                if (err){
                    console.log(err);
                }else{
                    // using userPage function for creating user page
                    userPage();
                };
            });

    })

app.listen(4000, ()=>{
console.log("Server running on port 4000");
});
