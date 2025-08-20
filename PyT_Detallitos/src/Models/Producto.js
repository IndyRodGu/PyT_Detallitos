// src/models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  
  sku: { type: String }, 
  nombre: { type: String }, 
  precioUnitario: { type: Number },
  stock: { type: Number },
  proveedorId : { type: Object},
  categoria: { type: Object },
  categoriaId : { type: String },
  categoriaNombre: { type: String },
  stockSource: { type: String },
  stockUpdateAt: { type: Date },
   
}, { collection: 'Producto' }); // Especificar el nombre de la colección

module.exports = mongoose.model('Producto', ItemSchema);