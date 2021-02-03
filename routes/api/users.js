// 登录和注册
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");

// GET api/users/test
router.get("/test",(req,res)=>{
    res.json({msg:"login works"}) 
})

//POST api/users/register
router.post("/register",(req,res)=>{
    // console.log(req.body);
    // 查询数据库中是否有邮箱，并且注册
    User.findOne({email:req.body.email})
        .then((user)=>{
            //如果返回一个user说明已经注册过了
            if(user){
                return res.status(400).json({email:"邮箱已经注册"})
            }else{
                //如果没有就创建一个新用户
                const newUser = new User({
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password,
                })
                //加密密码
                bcrypt.genSalt(10, (err, salt)=> {
                    bcrypt.hash(newUser.password, salt, (err, hash)=> {
                        if(err) throw err;
                        newUser.password = hash;

                        newUser.save()
                            .then(user=>res.json(user))
                            .catch(err=>console.log(err));
                    });
                });


            }
        })

})

module.exports = router;