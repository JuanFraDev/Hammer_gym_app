import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/contact'
import Register from './pages/Register'
import HomeLogin from './pages/HomeLogin';
import Profile from './pages/Profile';
import AdminPanel from './pages/AdminPanel';
import MisCursos from './pages/MisCursos';
import Banner from './components/Banner';
import PrivateRoute from './pages/PrivateRoute';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Clientes from './pages/Clientes';
import Gestionar from './pages/Gestionar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const [rol, setRole] = useState(localStorage.getItem('role') || '');

  useEffect(() => {
    // Sincronizar el estado con localStorage
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);
  return (
    <Router>
      <Banner />

      
        {/* Ruta privada para usuarios loggeados */}
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setRole={setRole} rol={rol} />
      <div className="content">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setRole={setRole}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        {/* Ruta específica para rol cliente */}
        <Route
          path="/profile"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredRole={"cliente"}
              userRole={rol}
            >
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/home-login"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredRole={"cliente"}
              userRole={rol}
            >
              <HomeLogin />
            </PrivateRoute>
          }
        />
        <Route
          path="/mis-cursos"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredRole={"cliente"}
              userRole={rol}
            >
              <MisCursos />
            </PrivateRoute>
          }
        />

        {/* Ruta específica para rol admin */}
        <Route
          path="/clientes"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredRole={"admin"}
              userRole={rol}
            >
              <Clientes />
            </PrivateRoute>
          }
        />
        <Route
          path="/gestionar"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredRole={"admin"}
              userRole={rol}
            >
              <Gestionar />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
