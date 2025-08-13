// src/models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  
  clienteId : { type: Object },
  paqueteId : { type: Object },
  montoPagado: { type: Number },
  fechaReserva: { type: Date },
  
}, { collection: 'Reserva' }); // Especificar el nombre de la colección

module.exports = mongoose.model('Reserva', ItemSchema);