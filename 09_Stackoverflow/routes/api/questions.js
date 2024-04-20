const express=require('express');
const router=express.Router();
// router.get("/",(req,res)=>res.json({test:"Auth is success"}));

// module.exports=router;

router.get("/",(req,res)=>res.json({questions:"question is successful"}));
module.exports=router;