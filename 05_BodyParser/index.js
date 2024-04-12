const express=require('express');
const bodyParser=require('body-parser');

let app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use("/login",express.static(__dirname +"/public"));

app.get("/",(req,res)=>{
    res.send("Hello, my application!")
})

app.post("/login",(req,res)=>{
    console.log(req.body);
    res.redirect("/");
});

app.listen(3000,()=>{
    console.log("Server is  running at port 3000");
})