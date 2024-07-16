import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';
import API_BASE_URL from '../../config';
import { AuthContext } from '../../contexts/AuthContext';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${API_BASE_URL}/account/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (response.ok) {
            login(data);
            navigate('/dashboard');
        } else {
            console.log(data);
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <input 
                className="login-input"
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username"
            />
            <input 
                className="login-input"
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password"
            />
            <button className="login-button" type="submit">Login</button>
            <p>
                Don't have an account yet? <Link className='reglink' to="/Registration">Registration</Link>
            </p>
        </form>
    );
}

export default LoginForm;
