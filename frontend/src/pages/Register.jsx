import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/auth/register', {
        name,
        email,
        password,
      });
      alert('Usuario registrado correctamente');
      navigate('/login'); // Redirige a login después del registro exitoso
    } catch (error) {
      setErrorMessage('Hubo un error, por favor intenta nuevamente.');
      console.error('Error en el registro:', error);
    }
  };

  return (
    <div className="vh-100 d-flex flex-column">

      {/* Contenido Principal - Formulario de Registro */}
      <main className="flex-grow-1 d-flex align-items-center justify-content-center bg-light">
        <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <h2 className="text-center text-danger fw-bold">Registro de Usuario</h2>

          {/* Mensaje de error */}
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

          <form onSubmit={handleSubmit}>
            {/* Nombre */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Correo Electrónico */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Confirmación de Contraseña */}
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label fw-bold">Confirmar Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {/* Botón de Registro */}
            <div className="d-grid">
              <button type="submit" className="btn btn-danger fw-bold">Registrar</button>
            </div>

            {/* Enlace a Login */}
            <div className="mt-3 text-center">
              <p>¿Ya tienes cuenta? <a href="/login" className="text-danger fw-bold">Inicia sesión aquí</a></p>
            </div>
          </form>
        </div>
      </main>

    </div>
  );
};

export default Register;
