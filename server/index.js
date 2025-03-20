/*const http = require("http");


const server = http.createServer((req,res)=>{
    if(req.method ==='GET'&&req.url === '/'){
        res.end("hello");
    }
    else if(req.method === 'GET' && req.url === '/path'){
        res.end("hi");
    }
    else if(req.method === 'GET' && req.url === '/skct'){
        res.end("hiiii");
    }
});
server.listen(3000);*/
import express from "express";
import mongoose from "mongoose";
import router from "./Router/Routes.js";
import cors from "cors";
import router1 from "./Router/Route1.js";
import router2 from "./Router/Route2.js";
import route3 from "./Router/Route3.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use('/test',router1)
app.use('/bom', route3);
app.listen(3000);
mongoose.connect("mongodb+srv://project:mongo123@cluster0.3h2tc7p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then(() => console.log("DB Connected"))
.catch((err) => console.log("error"));


/*const express = require("express");
const server = express();
server.get('/',(req,res)=>{
    res.send("hi");
});
server.get('/sam',(req,res)=>{
    res.send("samsung");
});
server.get('/viv',(req,res)=>{
    res.send("vivo");
});
server.get('/app',(req,res)=>{
    res.send("apple");
});
server.listen(3000);*/