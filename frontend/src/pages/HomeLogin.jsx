// HomeLogin.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomeLogin = () => {
  return (
    <div className="vh-100 d-flex flex-column">
      {/* Franja superior con el logo */}
      <header className="w-100 text-center py-3 bg-light">
        <img src="./img/logo.png" alt="Hammer Gym" className="img-fluid" style={{ maxHeight: '100px' }} />
      </header>

      {/* Barra de navegación para usuarios logueados */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-danger fw-bold" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger fw-bold" to="/profile">Perfil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger fw-bold" to="/mis-cursos">Mis Cursos</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link text-danger fw-bold" onClick={() => { localStorage.removeItem("token");
                                                                                              localStorage.removeItem("user"); 
                                                                                              window.location.href = "/"; }}>Cerrar Sesión</button>
                </li>
              </ul>
          </div>
        </div>
      </nav>

      {/* Contenido del HomeLogin */}
      <main className="flex-grow-1 d-flex align-items-center justify-content-center bg-light">
        <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <h2 className="text-center text-danger fw-bold">Bienvenido al Home de Usuario</h2>
          <p className="text-center">Contenido exclusivo para usuarios logueados.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 w-100">
        <p>&copy; 2025 Hammer Gym. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default HomeLogin;
