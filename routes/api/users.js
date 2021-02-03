// 登录和注册
const express = require("express");
const router = express.Router();

// GET api/users/test
router.get("/test",(req,res)=>{
    res.json({msg:"login works"})
})

//POST api/users/register
router.post("/register",(req,res)=>{
    console.log(req.body);
})

module.exports = router;