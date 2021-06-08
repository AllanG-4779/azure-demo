const express  = require("express")



const app = express()

app.set("view engine", "pug")
app.use(express.static("public"))
//routes

app.get("/", (req,res)=>{
    res.render("body",{title:"Pug trial", message:"Hallo Welcome to nodejs"})
})
app.get("/home",(req,res)=>{
    res.render("hommie")
})

const PORT  = process.env.PORT || 5000


app.listen(PORT, () =>{
    console.log("app runningrs on ", PORT)
})