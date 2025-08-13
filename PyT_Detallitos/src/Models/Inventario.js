// src/models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  
  productoId: { type: Object },
  tipo: { type: String },
  cantidad: { type: Number },
  fecha: { type: Date },
  origen:{ type: String },
  pedidoId: { type: Object },
  nota: { type: String },

  
}, { collection: 'Inventario' }); // Especificar el nombre de la colección

module.exports = mongoose.model('Inventario', ItemSchema);