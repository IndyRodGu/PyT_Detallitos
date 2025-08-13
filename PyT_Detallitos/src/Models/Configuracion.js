// src/models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  
  clave: { type: String },
  valor: { type: String },
  descripcion: { type: String },
  activo: { type: Boolean },
  fechaCreacion: { type: Date }
  
}, { collection: 'Configuracion' }); // Especificar el nombre de la colección

module.exports = mongoose.model('Configuracion', ItemSchema);