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


// Cliente ---------------------------------------------------------------------
router.get('/listaClientes', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Clientes/listaClientes.html'));
});
router.get('/agregarCliente', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Clientes/agregarCliente.html'));
});
router.get('/editarCliente', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Clientes/editarCliente.html'));
});


// Configuración ---------------------------------------------------------------------
router.get('/listaConfig', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Config/listaConfig.html'));
});
router.get('/agregarConfig', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Config/agregarConfig.html'));
});
router.get('/editarConfig', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Config/editarConfig.html'));
});


// Cursos ---------------------------------------------------------------------
router.get('/listarCursos', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Cursos/listarCursos.html'));
});
router.get('/agregarCurso', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Cursos/agregarCurso.html'));
});
router.get('/editarCurso', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Cursos/editarCurso.html'));
});


// Inventario ---------------------------------------------------------------------
router.get('/listaInventario', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Inventario/listaInventario.html'));
});
router.get('/agregarInventario', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Inventario/agregarInventario.html'));
});
router.get('/editarInventario', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Inventario/editarInventario.html'));
});



// Paquetes ---------------------------------------------------------------------
router.get('/listaPaquetes', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Paquetes/listaPaquetes.html'));
});
router.get('/agregarPaquete', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Paquetes/agregarPaquete.html'));
});
router.get('/editarPaquete', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Paquetes/editarPaquete.html'));
});

// Pedidos ---------------------------------------------------------------------
router.get('/listaPedidos', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Pedidos/listaPedidos.html'));
});
router.get('/agregarPedido', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Pedidos/agregarPedido.html'));
});
router.get('/editarPedido', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Pedidos/editarPedido.html'));
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



// Proveedores ---------------------------------------------------------------------
router.get('/listaProveedores', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Proveedores/listaProveedores.html'));
});
router.get('/agregarProveedor', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Proveedores/agregarProveedor.html'));
});
router.get('/editarProveedor', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Proveedores/editarProveedor.html'));
});


// Reserva ---------------------------------------------------------------------
router.get('/listaReservas', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Reservas/listaReservas.html'));
});
router.get('/agregarReserva', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Reservas/agregarReserva.html'));
});
router.get('/editarReserva', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Reservas/editarReserva.html'));
});


// Reviews ---------------------------------------------------------------------
router.get('/listaReviews', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Reviews/listaReviews.html'));
});
router.get('/agregarReview', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Reviews/agregarReviews.html'));
});
router.get('/editarReview', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Reviews/editarReviews.html'));
});


// Usuarios ---------------------------------------------------------------------
router.get('/listaUsuarios', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Usuarios/listaUsuarios.html'));
});
router.get('/agregarUsuario', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Usuarios/agregarUsuario.html'));
});
router.get('/editarUsuarios', (req, res) => {
  res.sendFile(path.join(__dirname, '../Views', '/Usuarios/editarUsuario.html'));
});








module.exports = router;