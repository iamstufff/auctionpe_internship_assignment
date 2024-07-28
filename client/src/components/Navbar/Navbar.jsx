import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setActive }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    }
    return (
        <div className='navbar'>
            <h3 onClick={() => setActive('home')}>Home</h3>
            <h3 onClick={() => setActive('dashboard')}>Dashboard</h3>
            <h3 onClick={handleLogout}>Logout</h3>
        </div>
    )
}

export default Navbar