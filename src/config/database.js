require("dotenv").config();
const mongoose = require("mongoose");

mongoose
.connect("mongodb+srv://maleesha619:a123@cluster0.gkfcfag.mongodb.net/weatherAPI?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("Conected")
)
.catch((err) => console.error("Error connecting to MongoDB:", err));

module.exports = mongoose;