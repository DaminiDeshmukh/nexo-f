
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/auth/v1/login`, 
        { username, password }
      );
      localStorage.setItem('token', response.data.token);
      setUser(response.data.data);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/v1/get-users-info-id`, {},
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      ).then(response => setUser(response.data.data))
        .catch(error => console.error('Failed to fetch user info', error));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
