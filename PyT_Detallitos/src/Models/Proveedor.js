// src/models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
   
  nombre: { type: String },
  contacto: { type: String },
  teléfono: { type: String },
  dirección: { type: String },
  categorías: { type: Array },
  
}, { collection: 'Proveedor' }); // Especificar el nombre de la colección

module.exports = mongoose.model('Proveedor', ItemSchema);