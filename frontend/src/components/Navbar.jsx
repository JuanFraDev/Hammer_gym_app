import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ isAuthenticated, setIsAuthenticated, rol }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('rol');
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#c3c3c3' }}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: 'white' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" style={{ color: 'white' }}>Contacto</Link>
            </li>
            {!isAuthenticated ? (
              <li className="nav-item">
                <Link to="/login" className="nav-link" style={{ color: 'white' }}>Login</Link>
              </li>
            ) : (
              <>
                {rol === "cliente" && (
                  <>
                    <li className="nav-item">
                      <Link to="/mis-cursos" className="nav-link" style={{ color: 'white' }}>Mis Cursos</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/home-login" className="nav-link" style={{ color: 'white' }}>Explorar</Link>
                    </li>
                  </>
                )}
                {rol === "admin" && (
                  <>
                    <li className="nav-item">
                      <Link to="/clientes" className="nav-link" style={{ color: 'white' }}>Clientes</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/gestionar" className="nav-link" style={{ color: 'white' }}>Gestionar</Link>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  <button onClick={handleLogout} className="nav-link btn btn-link" style={{ color: 'white' }}>Cerrar sesión</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
