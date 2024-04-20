const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require("body-parser")
const app=express();


// bring all routes

const auth=require("./routes/api/auth")
const profile=require("./routes/api/profile")
const questions=require("./routes/api/questions")

//middleware for bodyparser

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//mongo db configuration

const db = require("./setup/myurl").mongoURL;

//mongo db connection

mongoose
    .connect(db)
    .then(()=>console.log("mongoose connected successfully"))
    .catch(err=>console.log(err));


const port=process.env.PORT || 3000;

//just for testing
app.get('/',(req,res)=>{
    res.send("Hello World !!");
})
//actual routes
app.use('/api/auth',auth);

app.use('/api/profile',profile);

app.use('/api/questions',questions);

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
});
