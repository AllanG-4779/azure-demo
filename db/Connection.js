const mongoose =require("mongoose")
const uri =
  "mongodb+srv://allang_node:cnd80751xh@cluster0.dswp9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const dbConnection = async () => {

  await mongoose.connect(uri)

}
module.exports = { dbConnection: dbConnection };
