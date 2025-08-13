// src/models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  
  nombre: { type: String },
  descripcion: { type: String },
  fechaCreacion: { type: Date },
  precioCRC: { type: Number },
  moneda: {type: String },
  
}, { collection: 'Paquete' }); // Especificar el nombre de la colección

module.exports = mongoose.model('Paquete', ItemSchema);