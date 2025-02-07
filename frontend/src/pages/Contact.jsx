import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div className="vh-100 d-flex flex-column">
      {/* Franja superior con el logo */}
      <header className="w-100 text-center py-3 bg-light">
        <img src="./img/logo.png" alt="Hammer Gym" className="img-fluid" style={{ maxHeight: '100px' }} />
      </header>

      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-danger fw-bold" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-danger fw-bold" href="/contact">Contáctanos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-danger fw-bold" href="/login">Acceder</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className="flex-grow-1 d-flex align-items-center justify-content-center bg-light">
        <div className="container">
          <h2 className="text-center text-danger fw-bold my-4">Contáctanos</h2>
          
          <div className="row g-4">
            {/* Ubicación */}
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title text-danger fw-bold">📍 Ubicación</h5>
                  <p className="card-text">Av. Principal 123, Sector Centro, Ciudad</p>
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508494!2d144.95373531531696!3d-37.81720997975162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778c3d7fa2b6f3!2sGym!5e0!3m2!1sen!2s!4v1614874293890!5m2!1sen!2s"
                      title="Google Maps"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Teléfono y WhatsApp */}
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title text-danger fw-bold">📞 Teléfono y WhatsApp</h5>
                  <p className="card-text">
                    Teléfono: <strong>(+593) 2 345 6789</strong><br />
                    WhatsApp: <strong>(+593) 98 765 4321</strong>
                  </p>
                  <a href="https://wa.me/593995668656" target='_blank' className="btn btn-success fw-bold">Enviar Mensaje</a>
                </div>
              </div>
            </div>

            {/* Correo Electrónico */}
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title text-danger fw-bold">📧 Correo Electrónico</h5>
                  <p className="card-text">info@hammergym.com</p>
                  <a href="mailto:info@hammergym.com" className="btn btn-danger fw-bold">Enviar Correo</a>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title text-danger fw-bold">📱 Redes Sociales</h5>
                  <p className="card-text">
                    Síguenos en nuestras redes para más información:
                  </p>
                  <a href="https://www.facebook.com/hammergim" target='_blank' className="btn btn-primary fw-bold me-2">Facebook</a>
                  <a href="https://www.instagram.com/_hammergym_/" target='_blank' className="btn btn-danger fw-bold">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 w-100">
        <p>&copy; 2025 Hammer Gym. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Contact;
