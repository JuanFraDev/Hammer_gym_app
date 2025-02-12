import React, { useState } from 'react';

const Clientes = () => {
  const [cursos, setCursos] = useState([
    { id: 1, nombre: 'Brenda Montenegro', mail: 'brenda@gmail.com' },
    { id: 2, nombre: 'Mateo Cañizares', mail: 'mateo@gmail.com' },
    { id: 3, nombre: 'Cristian Gatia', mail: 'cristian@gmail.com' },
    { id: 4, nombre: 'Lily Pérez', mail: 'lily@gmail.com' },
  ]);

  const eliminarCurso = (id) => {
    const confirmacion = window.confirm("¿Estás seguro que quieres eliminar este curso?");
    if (confirmacion) {
      setCursos(cursos.filter(curso => curso.id !== id));
    }
  };

  return (
    <div className="container mt-5">
      <h1>Listado de Usuarios</h1>
      <p>Lista de usuarios inscritos:</p>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre del Usuario</th>
            <th>Mail</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.id}>
              <td>{curso.nombre}</td>
              <td>{curso.mail}</td>
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

export default Clientes;
