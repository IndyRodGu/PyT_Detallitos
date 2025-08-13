// src/models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  
  nombre: { type: String },
  apellido: { type: String },
  edad: { type: String },
  estado: { type: String },
  
}, { collection: 'Usuario' }); // Especificar el nombre de la colección

module.exports = mongoose.model('Usuario', ItemSchema);