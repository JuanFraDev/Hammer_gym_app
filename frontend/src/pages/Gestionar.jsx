import React, { useState } from 'react';

const Gestionar = () => {
  const [cursos, setCursos] = useState([
    { id: 1, nombre: 'Bailoterapia', link: 'https://www.youtube.com/embed/wpkmDzfxKUA?si=YnBl-cEtwFFBYEIc' },
    { id: 2, nombre: 'Aeróbicos', link: 'https://www.youtube.com/embed/wpkmDzfxKUA?si=YnBl-cEtwFFBYEIc' },
    { id: 3, nombre: 'Plan Mensual de Gimnasio', link: 'https://www.youtube.com/embed/RHCnQO_iGk8?si=NbjbeTiaupOl1k_R' },
    { id: 4, nombre: 'Crossfit', link: 'https://www.youtube.com/embed/MZX3vu_mA34?si=UCEvIkM9CtcpvdHm' },
  ]);

  const eliminarCurso = (id) => {
    const confirmacion = window.confirm("¿Estás seguro que quieres eliminar este curso?");
    if (confirmacion) {
      setCursos(cursos.filter(curso => curso.id !== id));
    }
  };

  return (
    <div className="container mt-5">
      <h1>Recursos Disponibles</h1>
      <p>Lista de recursos disponibles:</p>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre del Recurso</th>
            <th>Link</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.id}>
              <td>{curso.nombre}</td>
              <td>{curso.link}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarCurso(curso.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Gestionar;
