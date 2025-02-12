import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div className="vh-150 d-flex flex-column">

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
                  <p className="card-text">Juan Camacaro, Quito 170131</p>
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7801455629924!2d-78.54118199999999!3d-0.25063959999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59913ce78da9b%3A0xd2504ce3f88f6bab!2sHammer%20Gym!5e0!3m2!1ses!2sec!4v1739225214303!5m2!1ses!2sec" 
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
                  <p className="card-text">Hammergym01@gmail.com</p>
                  <a href="mailto:Hammergym01@gmail.com" className="btn btn-danger fw-bold">Enviar Correo</a>
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
            <div className="w-300"></div>
          </div>
        </div>
        
      </main>


    </div>
  );
};

export default Contact;
