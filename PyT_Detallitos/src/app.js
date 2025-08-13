// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Config/db');
const indexView = require("./Views/index.js")

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(bodyParser.json());

// Rutas API
const categRoutes = require('./Routes/CategoriaRoutes');
app.use('/categoria', categRoutes);

const clienteRoutes = require('./Routes/ClienteRoutes');
app.use('/cliente', clienteRoutes);

const configRoutes = require('./Routes/ConfiguracionRoutes');
app.use('/configuracion', configRoutes);

const cursosRoutes = require('./Routes/CursoRoutes.js');
app.use('/curso', cursosRoutes);

const inventRoutes = require('./Routes/InventarioRoutes.js');
app.use('/inventario', inventRoutes);

const paqueteRoutes = require('./Routes/PaqueteRoutes.js');
app.use('/paquete', paqueteRoutes);

const pedidoRoutes = require('./Routes/PedidoRoutes.js');
app.use('/pedido', pedidoRoutes);

const productoRoutes = require('./Routes/ProductoRoutes.js');
app.use('/producto', productoRoutes);

const proveedorRoutes = require('./Routes/ProveedorRoutes.js');
app.use('/proveedor', proveedorRoutes);

const reservaRoutes = require('./Routes/ReservaRoutes.js');
app.use('/reserva', reservaRoutes);

const reviewRoutes = require('./Routes/ReservaRoutes.js');
app.use('/review', reviewRoutes);

const usuarioRoutes = require('./Routes/UsuarioRoutes.js');
app.use('/usuario', usuarioRoutes);



app.get('/', (req, res) => {
  res.send(indexView);
  //res.send("./Views/index.html");
});


// Conexión
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

