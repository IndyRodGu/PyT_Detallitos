// src/config/db.js
const mongoose = require('mongoose');
// Cambiar **** por usuario:password
const url = "mongodb+srv://******:*********.@henrygo.ssy6fn5.mongodb.net/DetallitosDB";

const connectDB = async () => {
  try {
    await mongoose.connect(url,{});
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
//run().catch(console.dir);

module.exports = connectDB;