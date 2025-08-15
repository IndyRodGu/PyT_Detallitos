// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Config/db.js');
//const path = require('path');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(bodyParser.json());

// Rutas API
const categRoutes = require('./Routes/CategoriaRoutes.js');
app.use('/api/categoria', categRoutes);

const clienteRoutes = require('./Routes/ClienteRoutes.js');
app.use('/api/cliente', clienteRoutes);

const configRoutes = require('./Routes/ConfiguracionRoutes.js');
app.use('/api/configuracion', configRoutes);

const cursosRoutes = require('./Routes/CursoRoutes.js');
app.use('/api/curso', cursosRoutes);

const inventRoutes = require('./Routes/InventarioRoutes.js');
app.use('/api/inventario', inventRoutes);

const paqueteRoutes = require('./Routes/PaqueteRoutes.js');
app.use('/api/paquete', paqueteRoutes);

const pedidoRoutes = require('./Routes/PedidoRoutes.js');
app.use('/api/pedido', pedidoRoutes);

const productoRoutes = require('./Routes/ProductoRoutes.js');
app.use('/api/producto', productoRoutes);

const proveedorRoutes = require('./Routes/ProveedorRoutes.js');
app.use('/api/proveedor', proveedorRoutes);

const reservaRoutes = require('./Routes/ReservaRoutes.js');
app.use('/api/reserva', reservaRoutes);

const reviewRoutes = require('./Routes/ReservaRoutes.js');
app.use('/api/review', reviewRoutes);

const usuarioRoutes = require('./Routes/UsuarioRoutes.js');
app.use('/api/usuario', usuarioRoutes);



// Para las vistas, más ordenado
const viewsRoutes = require('./Routes/ViewsRoutes.js');
app.use('/', viewsRoutes);


// Conexión
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

