import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
      <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="input-style" />
      <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" className="input-style" />
      <button type="submit" className="btn-primary bg-blue-500 text-white py-2 px-4 rounded w-full">Login</button>
    </form>
  );
};

export default Login;
