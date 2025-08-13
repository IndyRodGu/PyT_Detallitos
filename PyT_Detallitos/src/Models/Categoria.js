// src/models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  
  nombre: { type: String },
  descripcion: { type: String },
  nombreNorm: { type: String },
  
}, { collection: 'Categoria' }); // Especificar el nombre de la colección

module.exports = mongoose.model('Categoria', ItemSchema);