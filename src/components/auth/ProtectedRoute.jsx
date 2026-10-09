import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function ProtectedRoute({ children, allowedRoles }) {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    // Redirect to the default route for the user's active role
    if (role === 'developer') return <Navigate to="/app/developer" replace />;
    if (role === 'capital_provider') return <Navigate to="/app/capital" replace />;
    if (role === 'internal_analyst') return <Navigate to="/app/internal/pipeline" replace />;
    return <Navigate to="/app" replace />;
  }

  return children;
}
