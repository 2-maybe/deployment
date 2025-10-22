const express = require('express');
const app = express();

app.get("/hello" , (req , res)=>{
    res.status(200).send(`<h1> Hello form the back-end server </h1> `);
})

app.listen(4000 , (err)=>{
   if(err){
       console.log("Something went wrong " + err)
       process.exit(1)
   }else{
    console.log("Successfully running at port " , 4000)
   }

})