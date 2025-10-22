const express = require('express');
const app = express();


app.get("/home" , (req ,res)=>{
    res.status(200).send(`<h1> Hello from home side </h1>`)
})

app.listen(4000 , '0.0.0.0' , ()=>{
    console.log("Listening on port 4000")
})