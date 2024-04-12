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


app.get("/ab*cd",(req,res)=>{
    res.send("<h1> Hello I am the regular expression</h1>");
})

app.get("/user/:id/status/:status_id",(req,res)=>{
    res.send(req.params);
})



//defining a flight route as an example
app.get("/flights/:from-:to",(req,res)=>{
    res.send(req.params);
})

//res.json

// app.get("/info",(req,res)=>{
//     res.json({user: "sachin" ,age: "20",id: "123rl21"});
// });

app.get("/info",(req,res)=>{
    // res.status(200).json({user: "sachin" ,age: "20",id: "123rl21"});
    res.status(500).json({error:"Something went wrong"});
});

app.listen(3000,()=>console.log("Server is running at port 3000..."));