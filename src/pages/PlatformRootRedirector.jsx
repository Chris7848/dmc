import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PlatformRootRedirector() {
  const { role } = useAuth();

  if (role === 'capital_provider') {
    return <Navigate to="/app/capital" replace />;
  }
  if (role === 'internal_analyst') {
    return <Navigate to="/app/internal/pipeline" replace />;
  }
  return <Navigate to="/app/developer" replace />;
}
