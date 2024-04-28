const express=require("express");
const router=express.Router();
const bcrypt=require("bcrypt");
const jsonwt=require("jsonwebtoken");
const passport=require("passport");
const key=require("../../setup/myurl");
router.get("/",(req,res)=>res.json({test:"Auth is being tested"}));

//@type     POST
//@route    /api/auth/register
//@desc     route for registration of users
//@access   PUBLIC

//IMPORT Schema for Person to Register

const Person=require("../../models/Person");

router.post("/register",(req,res)=>{
    Person.findOne({email:req.body.email})
        .then()
        .catch(err =>console.log(err));
})


module.exports=router;