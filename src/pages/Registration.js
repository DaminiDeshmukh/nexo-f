
import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/v1/register`, formData);
            alert('Registration successful');
        } catch (error) {
            console.error("Registration failed", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded shadow-md max-w-sm mx-auto mt-12">
            <input name="firstName" onChange={handleChange} placeholder="First Name" className="input-style mb-4" />
            <input name="lastName" onChange={handleChange} placeholder="Last Name" className="input-style mb-4" />
            <input name="email" onChange={handleChange} placeholder="Email" className="input-style mb-4" />
            <input name="username" onChange={handleChange} placeholder="Username" className="input-style mb-4" />
            <input name="password" onChange={handleChange} placeholder="Password" type="password" className="input-style mb-4" />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">
                Register
            </button>
        </form>
    );
};

export default Registration;

