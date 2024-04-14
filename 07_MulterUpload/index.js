const express=require("express");
const multer=require("multer");
const path=require("path");
const ejs=require("ejs");

const app=express();

const port=process.env.PORT || 3000;
//multer upload

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/myupload')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
    }
  })
  
 const upload = multer({ 
    storage: storage 
}).single("profilepic")

//set for ejs
app.set("view engine","ejs");

app.use(express.static("./public"));

// app.get("/",(req,res)=>{
//     res.send("Multer is running and it is working fine hurrayyy")
// });

app.get("/",(req,res)=>{
    res.render("demo");
});

//Description
app.post("/upload",(req,res)=>{
    upload(req,res,error=>{
        if(error){
            res.render("demo",{
                message :error
            });
        }else{
            res.render("demo",{
                message: "successfully uploaded",
                filename:`myupload/${req.file.filename}`
            })
        }
    })
})
app.listen(port, ()=>console.log(`server is running at ${port}`));