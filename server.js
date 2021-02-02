const express = require("express");
const app = express();

app.get("/",(request,response)=>{
    response.send("hello,world!");
});

const port = process.env.PORT || 5555;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})