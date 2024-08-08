import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Set true if token exists
  }, []);

  if (isAuthenticated === null) {
    // Optionally handle loading state here
    return null; // or a loader component
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/signin-1" />;
  }

  return children;
};

export default AuthGuard;
