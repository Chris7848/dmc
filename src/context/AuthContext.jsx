import React, { createContext, useContext, useState, useEffect } from 'react';
import { DEMO_USERS } from '../lib/mockData';

const AuthContext = createContext(null);

const STORAGE_AUTH_KEY = 'ecobond_auth_user';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_AUTH_KEY);
      return saved ? JSON.parse(saved) : DEMO_USERS.developer;
    } catch {
      return DEMO_USERS.developer;
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(STORAGE_AUTH_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_AUTH_KEY);
      }
    } catch (err) {
      console.warn('Auth state save failed:', err);
    }
  }, [user]);

  const switchRole = (roleKey) => {
    const targetUser = DEMO_USERS[roleKey] || DEMO_USERS.developer;
    setUser(targetUser);
  };

  const login = (roleKey = 'developer') => {
    const targetUser = DEMO_USERS[roleKey] || DEMO_USERS.developer;
    setUser(targetUser);
    return targetUser;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role: user?.role || 'guest',
        isAuthenticated: !!user,
        switchRole,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
