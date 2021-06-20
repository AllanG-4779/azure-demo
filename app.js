const express = require("express");
const mongoose = require("mongoose")
const { testModel } = require("./Models/test");

const app = express();

const PORT  = process.env.PORT || 4002
const uri =
  "mongodb+srv://allang_node:cnd80751xh@cluster0.dswp9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const url = `mongodb://127.0.0.1:27017/Members`

mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true} ).then(success=>{
  app.listen(PORT, ()=>{
    console.log("Server Connected")
  })
}).catch(error=>{
  console.log("Connection failed")
})

app.get("/",(req,res)=>{
const entry = new testModel({
   Name:"Allan",
   Age:35,
   Marital:"Married",
   Student:true

})
entry.save()
.then(e=>{
  res.send(e)
}).catch(s=>{
  res.send("Error Not inserted")
})
})

