const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

//引入users
const users = require("./routes/api/users");


//引入mongodb的配置
const db = require('./config/keys').mongoURI;

// 引入中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//链接数据库
mongoose.connect(db,{ useNewUrlParser: true ,useUnifiedTopology: true })
    .then(()=>{console.log("链接成功"); })
    .catch(err=>{console.log(err);})

app.get("/",(request,response)=>{
    response.send("hello,world!");
});


//使用routes
app.use("/api/users",users);


const port = process.env.PORT || 5555;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})