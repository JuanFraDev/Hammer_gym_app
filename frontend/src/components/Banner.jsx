import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  return (
    <header className="w-100 text-center py-4 bg-dark text-white position-relative">
      <div className="container d-flex align-items-center justify-content-between">
        <img src="./img/logo.png" alt="Hammer Gym" className="img-fluid" style={{ maxHeight: '80px' }} />
        <h1 className="display-4 fw-bold m-0">Hammer Gym</h1>
      </div>
      <div className="position-absolute w-100" style={{ bottom: 0, height: '5px', background: 'linear-gradient(to right, #ff8c00, #ff0000)' }}></div>
    </header>
  );
};

export default Banner;
