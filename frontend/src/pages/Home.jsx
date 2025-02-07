import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="vh-100 d-flex flex-column">
      {/* Franja superior con el logo - Color blanquecino */}
      <header className="w-100 text-center py-3 bg-light">
        <img src="./img/logo.png" alt="Hammer Gym" className="img-fluid" style={{ maxHeight: '100px' }} />
      </header>

      {/* Barra de navegación (fondo oscuro) */}
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

      {/* Contenido principal */}
      <main className="flex-grow-1 d-flex flex-column align-items-center text-center text-dark bg-light w-100 py-5">
        <div className="container">
          <h1 className="text-danger fw-bold">Bienvenido a Hammer Gym</h1>
          <p className="lead">Tu gimnasio ideal para alcanzar tus objetivos.</p>

          {/* Historia */}
          <section className="mt-4">
            <h2 className="text-danger fw-bold">Nuestra Historia</h2>
            <p className="text-justify">
              Hammer Gym nació en 2010 con el objetivo de brindar un espacio de entrenamiento de calidad 
              para deportistas y entusiastas del fitness. Desde entonces, hemos crecido y evolucionado para ofrecer 
              equipos de última generación, entrenadores certificados y un ambiente ideal para mejorar tu rendimiento.
            </p>
          </section>

          {/* Misión y Visión */}
          <div className="row mt-4">
            <div className="col-md-6">
              <h2 className="text-danger fw-bold">Misión</h2>
              <p className="text-justify">
                Brindar a nuestros clientes un espacio motivador y equipado con la mejor tecnología para mejorar su 
                condición física, salud y bienestar, con un enfoque en disciplina y constancia.
              </p>
            </div>
            <div className="col-md-6">
              <h2 className="text-danger fw-bold">Visión</h2>
              <p className="text-justify">
                Ser el gimnasio líder en la comunidad, reconocido por su excelencia en entrenamiento físico, 
                innovación y atención personalizada a cada uno de nuestros miembros.
              </p>
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

export default Home;
