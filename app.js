import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import userRouter from "./router/userRouter" //default 가 아니면 import {}  객체를 받음
import videoRouter from "./router/videoRouter"
import globalRouter from "./router/globalRouter"
import routes from "./routes"
const app = express();

app.set("view engine","pug")

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videoDetail, videoRouter);

export default app; // app객채를 export 한다는 의미



// route 위에 middleware
//app.get("/", handleHome); //url접근 <-> we need to request 
//app.get("/profile", handleProfile);
//const express = require("express");
// middleware - morgan , helmet - nodjs security 
//arrow function - es6 new funciton 
/*
const handleListening = () =>
    console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from my ass");// last function - >return 

const handleProfile = (req, res) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {
    console.log('Between');
    next();
};
*/

//app.use(betweenHome("dev"));