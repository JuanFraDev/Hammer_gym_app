const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const authRoutes = require('./routes/auth');
const { authMiddleware, adminMiddleware } = require('./middleware/auth');

const app = express();
app.use(express.json());
app.use(cors());

// Rutas de autenticación
app.use('/auth', authRoutes);

// Ruta protegida para clientes autenticados
app.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: `Bienvenido, usuario con ID ${req.user.id}` });
});

// Ruta solo para administradores
app.get('/admin', authMiddleware, adminMiddleware, (req, res) => {
  res.json({ message: 'Bienvenido al panel de administración' });
});

// Iniciar servidor
sequelize.sync({ force: true }).then(() => {
  app.listen(3001, () => console.log('Servidor en http://localhost:3001'));
});
