// src/models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  
  clienteId : { type: Object},
  items: { type: Array },
  total: { type: Number },
  fechaPedido: { type: Date },
  estado: { type: String },
  subtotal: { type: Number },
  impuesto: { type: Number },
  taxRate: { type: Number },
  
  
}, { collection: 'Pedido' }); // Especificar el nombre de la colección

module.exports = mongoose.model('Pedido', ItemSchema);