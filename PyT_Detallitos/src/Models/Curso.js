// src/models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  
  titulo: { type: String },
  descripcion: { type: String },
  precio: { type: Number },
  cupos: { type: Number },
  horario: {type: Array },
  
}, { collection: 'Curso' }); // Especificar el nombre de la colección

module.exports = mongoose.model('Curso', ItemSchema);