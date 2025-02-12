// HomeLogin.jsx
import React from 'react';

const HomeLogin = () => {
  return (
    <div className="vh-150 d-flex flex-column mt-2">

      {/* Contenido del HomeLogin */}
      <main className="flex-grow-1 d-flex flex-column align-items-center justify-content-center bg-light">
        <div className="card shadow p-4 mb-4" style={{ maxWidth: '800px', width: '100%' }}>
          <h2 className="text-center text-danger fw-bold">Bienvenido/a</h2>
          <p className="text-center">Explora nuestros videos de entrenamiento y encuentra el mejor plan para ti.</p>
        </div>

        <div className="container">
          <div className="row">
            {/* Primera fila */}
            <div className="col-md-6 mb-4">
              {/* Video 1: Bailoterapia */}
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Bailoterapia</h5>
                  <p className="card-text">Disfruta de nuestras clases de bailoterapia para ponerte en forma de una manera divertida.</p>
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/wpkmDzfxKUA?si=YnBl-cEtwFFBYEIc" 
                    title="Bailoterapia"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              {/* Video 2: Aeróbicos */}
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Aeróbicos</h5>
                  <p className="card-text">Sigue nuestra rutina aeróbica para mejorar tu resistencia y salud cardiovascular.</p>
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/wpkmDzfxKUA?si=YnBl-cEtwFFBYEIc"
                    title="Aeróbicos"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Segunda fila */}
            <div className="col-md-6 mb-4">
              {/* Video 3: Plan Mensual de Gimnasio */}
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Plan Mensual de Gimnasio</h5>
                  <p className="card-text">Conoce nuestro plan mensual para que logres tus objetivos fitness.</p>
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/RHCnQO_iGk8?si=NbjbeTiaupOl1k_R"
                    title="Plan Mensual de Gimnasio"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              {/* Video 4: Crossfit */}
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Crossfit</h5>
                  <p className="card-text">Entrenamientos intensos para mejorar tu fuerza y resistencia con crossfit.</p>
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/MZX3vu_mA34?si=UCEvIkM9CtcpvdHm"
                    title="Crossfit"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default HomeLogin;
