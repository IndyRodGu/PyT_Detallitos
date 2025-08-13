// src/models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  
  clienteId : { type: Object},
  productoId : { type: Object},
  calificacion: { type: Number },
  comentario: { type: String },
  fechaReview: { type: Date },
  
}, { collection: 'Review' }); // Especificar el nombre de la colección

module.exports = mongoose.model('Review', ItemSchema);