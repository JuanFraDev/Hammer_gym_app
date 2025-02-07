const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Acceso denegado. Token no proporcionado o formato incorrecto.' });
  }

  const token = authHeader.split(' ')[1]; // Extrae solo el token sin "Bearer"

  try {
    const verified = jwt.verify(token, 'secreto'); // Asegúrate de que esta clave sea la misma en login
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token inválido o expirado.' });
  }
};

// Middleware para verificar el rol de administrador
const adminMiddleware = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Acceso denegado. Se requiere rol de administrador.' });
  }
  next();
};

module.exports = { authMiddleware, adminMiddleware };
