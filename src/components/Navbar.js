

import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      {/* <h1 className="text-2xl">Nexorand App</h1> */}
      
      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link to="/" className="text-white hover:underline">Home</Link>
        <Link to="/login" className="text-white hover:underline">Login</Link>
        <Link to="/register" className="text-white hover:underline">Register</Link>
        <button onClick={() => setShowUserMenu(!showUserMenu)} className="text-white hover:underline">
          Pop-up
        </button>
      </div>

      {/* User Menu */}
      {user && showUserMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg p-4 text-black">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Points:</strong> {user.points}</p>
          <button onClick={logout} className="bg-red-500 text-white px-4 py-1 rounded mt-2">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
