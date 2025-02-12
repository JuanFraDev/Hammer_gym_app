import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="vh-150 d-flex flex-column">

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
            {/* Instalaciones */}
            <section className="mt-4 text-center">
              <h2 className="text-danger fw-bold">Instalaciones</h2>
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 mb-4">
                  <img 
                    style={{ width: '100%' }} 
                    src="../img/hammer.jpg" 
                    alt="Instalaciones Hammer Gym" 
                    className="img-fluid rounded"
                  />
                  <p className="mt-2">Conoce nuestras modernas instalaciones, diseñadas para ofrecerte el mejor ambiente de entrenamiento.</p>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <img 
                    style={{ width: '100%' }} 
                    src="../img/instalaciones.jpg" 
                    alt="Instalaciones Hammer Gym" 
                    className="img-fluid rounded"
                  />
                  <p className="mt-2">Disfruta de un ambiente exclusivo para lograr tus objetivos físicos.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
