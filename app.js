const express  = require("express")



const app = express()

app.set("view engine", "pug")
app.use(express.static("public"))
//routes



const PORT  = process.env.PORT || 5000


app.listen(PORT, () =>{
    console.log("app runningrs on ", PORT)
})