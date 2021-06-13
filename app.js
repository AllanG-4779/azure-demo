const express = require("express");
const { dbConnection } = require("./db/Connection");

const app = express();
let timer = 0
const time = setInterval(()=>{
  timer++
},1000)
dbConnection()
  .then((success) => {
    clearInterval(time)
    console.log("Server Connection established in ",timer, "seconds");
  })
  .catch((e) => {
    console.log("Connection failed ");
  });
app.set("view engine", "pug");
app.use(express.static("public"));
//routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("app runningrs on ", PORT);
});
