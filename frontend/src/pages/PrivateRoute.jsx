import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token'); // Cambia esto según tu lógica de autenticación
  
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }     
    />
  );
};

// Agrega la validación de PropTypes
PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired, // Se asegura de que 'component' sea un componente React
};

export default PrivateRoute;
