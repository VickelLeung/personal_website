require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
const router = express.Router();

// const uri = "mongodb+srv://hush:reactgod@cluster0-ocebj.mongodb.net/test?retryWrites=true&w=majority"

// mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

// const connection = mongoose.connection;

// connection.once("open", ()=>{
//     console.log("mongose connection established.");
//     })

app.post("/api/send", (req, res)=>{
    console.log(req.body);

    let mailOptions = {
        from: req.body.email,
        to:"vickelleung@gmail.com",
        subject:"You got a message!",
        text: "From: " +req.body.name + "\nEmail: " +req.body.email + "\nMessage:\n" +req.body.message
    }
    console.log("n: " + req.body.name);
    console.log("e: " + req.body.email);

    console.log("M: " + req.body.message);

    let transporter = nodemailer.createTransport({
        service:"gmail",
         auth: { 
             user:process.env.EMAIL,
             pass:process.env.PASSWORD
         },
         tls:{
            rejectUnauthorized:false
          }
     })
    
    transporter.sendMail(mailOptions, (err)=>{
        if(err){
            console.log("Error mail did not send");
        }
        else{
            console.log("Email sent!")
        }
    })
    

})


app.listen(port, ()=>{
console.log("app running on PORT " + port);
})