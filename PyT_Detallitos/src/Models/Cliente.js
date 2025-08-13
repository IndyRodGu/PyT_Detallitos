// src/models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  
  nombre: { type: String },
  email: { type: String },
  tipoCliente: { type: String },
  tipoCliente: { type: Date },
  telefono: {type: String },
  
}, { collection: 'Cliente' }); // Especificar el nombre de la colección

module.exports = mongoose.model('Cliente', ItemSchema);