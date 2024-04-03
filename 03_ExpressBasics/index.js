// const e = require('express');
const express=require ('express');
const app= express();

app.get("/",(req,res)=>{
    res.send("Hello World");
});


app.get("/about",(req,res)=>{
    res.send("<h1>I am the about page wass up</h1>");
})

app.get("/contact",(req,res)=>{
    res.send("<h1>Hello this is the contact page </h1>")
})

app.get("/services",(req,res)=>{
    res.send("<h1> Features </h1><ol><li>Web Dev</li> <li>DSA</li></ol>   ")

})

app.post("/login",(req,res)=>{
    res.send("login success");
})

app.listen(3000,()=>console.log("Server is running at port 3000..."));