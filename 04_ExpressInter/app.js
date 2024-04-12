// const e = require('express');
const express=require ('express');
const app= express();

var myconsolelog=function(req,res,next){
    console.log("I am a MIDDLEWARE");
    next();
}

var serverTime=function(req,res,next){
    req.requestTime=new Date().toString();
    next();
}
app.use(serverTime);
app.get("/",(req,res)=>{
    res.send("Hello World"+" the time is :" + req.requestTime);

    //console.log("Ky Baat Hai !! /");
});


app.listen(3000,()=>console.log("Server is running at port 3000..."));