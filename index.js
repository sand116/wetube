import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"

//const express = require("express");
// middleware - morgan , helmet - nodjs security 
const app = express();
const PORT = 4000;

//arrow function - es6 new funciton 

const handleListening = () => ``
    console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from my ass");// last function - >return 

const handleProfile = (req, res) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {
    console.log('Between');
    next();
};

app.use(helmet());
app.use(betweenHome("dev"));

// route 웨에 middleware
app.get("/", handleHome); //url접근 <-> we need to request 

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);