import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/contact'
import Register from './pages/Register'
import HomeLogin from './pages/HomeLogin';
import Profile from './pages/Profile';
import AdminPanel from './pages/AdminPanel';
import MisCursos from './pages/MisCursos';




function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home-login" element={<HomeLogin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mis-cursos" element={<MisCursos />} />
        {/* Ruta privada para usuarios loggeados */}
        

      </Routes>
    </Router>
  );
}

export default App;
