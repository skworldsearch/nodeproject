const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const http = require('http');
var parseUrl = require('body-parser');
const app = express();

var mysql = require('mysql');

let encodeUrl = parseUrl.urlencoded({ extended: false });

//session middleware
app.use(sessions({
    secret: "thisismysecrctekey",
    saveUninitialized:true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24 hours
    resave: false
}));

app.use(cookieParser());

var con = mysql.createConnection({
    host: "localhost",
    user: "root", // my username
    password: "root", // my password
    database: "nodeproject"
});

app.post("/register", encodeUrl, (req, res) => {
  var Name = req.body.Name;
  var MailId = req.body.MailId;
  var Phonenumber = req.body.Phonenumber;
  var Password = req.body.Termscheck;
  var Termscheck = req.body.Termscheck;
});

con.connect(function(err) {
    if (err){
        console.log(err);
    };
           
            // inserting new user data
            var sql = `INSERT INTO users (Name, MailId, Phonenumber, Password,Termscheck) VALUES ('${Name}', '${MailId}', '${Phonenumber}', '${Password}', '${Termscheck}')`;
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
