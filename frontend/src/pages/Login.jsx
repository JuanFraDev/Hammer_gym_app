import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated, setRole }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Enviar los datos al backend para verificar las credenciales
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        // Guardar el token en el almacenamiento local o en un estado global
        console.log(data)
        localStorage.setItem('token', data.token);
        setRole(data.role); 
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true'); 
        localStorage.setItem('role', data.role);
        setMessage(`¡Bienvenido!`); // O cualquier otro campo de bienvenida
        setTimeout(() => {
          navigate('/home-login'); // Redirige al Home
        }, 500); // Espera 2 segundos antes de redirigir
      } else {
        setMessage(data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      setMessage('Hubo un error al intentar iniciar sesión');
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="vh-100 d-flex flex-column">

      <main className="flex-grow-1 d-flex align-items-center justify-content-center bg-light">
        <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <h2 className="text-center text-danger fw-bold">Iniciar Sesión</h2>

          {/* Mensaje de respuesta */}
          {message && <div className="alert alert-info text-center">{message}</div>}

          <form onSubmit={handleSubmit} className="mt-4">
            {/* Correo electrónico */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Contraseña */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-bold">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Botón de Iniciar Sesión */}
            <div className="d-grid">
              <button type="submit" className="btn btn-danger fw-bold" disabled={isLoading}>
                {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
              </button>
            </div>

            {/* Enlace a Registro */}
            <div className="mt-3 text-center">
              <p>¿No tienes cuenta? <a href="/register" className="text-danger fw-bold">Regístrate aquí</a></p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};


export default Login;
