const express = require("express")
require("dotenv").config();
const User = require("./src/models/userModel")
const mongoose = require("./src/config/database")
const app = express()
const port = process.env.PORT;
app.use(express.json());
const cors = require('cors');
app.use(cors());

const userRoutes = require("./src/routes/user.routes")

mongoose.connection.on("connected",function(){
  app.listen(port,()=>{
    console.log("App on port",port);
  })
})

mongoose.connection.on("error",function(err){
  console.error("Mongoose connection error:", err);
  process.exit(1);
})


app.use("/user",userRoutes)

module.exports = User;