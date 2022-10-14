const mongoose = require('mongoose');

function DBConnection(){
    mongoose
      .connect("mongodb+srv://Pawan:8055002275@cluster0.dc5gsux.mongodb.net/?retryWrites=true&w=majority")
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch(() => {
        console.log("Failed to connect to MongoDB");
      });
}

module.exports = DBConnection;