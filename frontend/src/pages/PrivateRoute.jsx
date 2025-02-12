import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ isAuthenticated, children, requiredRole, userRole }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (userRole !== requiredRole) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PrivateRoute;

