const express = require('express');
//const app = express();
const router = express.Router();
const path = require('path');

// Serve static files (like HTML, CSS, JS)
router.use(express.static(path.join(__dirname, '../Views')));

// Página de bienvenida ----------------------------------------------------------
router.get('', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', 'home.html'));
});


// Categorias ---------------------------------------------------------------------
router.get('/listaCategorias', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Categorias/listaCategorias.html'));
});
router.get('/agregarCategoria', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Categorias/agregarCategorias.html'));
});
router.get('/editarCategoria', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Categorias/editarCategorias.html'));
});


// Productos ---------------------------------------------------------------------
router.get('/listaProductos', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Productos/listaProductos.html'));
});
router.get('/agregarProducto', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Productos/agregarProductos.html'));
});
router.get('/editarProducto', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Productos/editarProductos.html'));
});


module.exports = router;