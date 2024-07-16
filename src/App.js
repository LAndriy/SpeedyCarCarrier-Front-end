import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './components/pages/LoginForm';
import RegisterForm from './components/pages/RegisterForm';
import Dashboard from './components/pages/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import logowhite from '../src/components/images/logowhite.png';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/"><img src={logowhite} alt="Logo" className="mainlogo" /></Link>
            <Routes>
              <Route path="/" element={
                <>
                  <div className="App-content">
                    <div className="App-description">
                      <h1>SpeedyCarCarrier</h1>
                      <p>
                        Welcome to SpeedyCarCarrier! We are a leading logistics company specializing in the transportation of cars across Poland. 
                        Our mission is to provide fast, reliable, and secure car transport services for our customers.
                      </p>
                    </div>
                    <div className="App-buttons">
                      <Link to="/Login" className="App-button">Login</Link>
                      <Link to="/Registration" className="App-button">Register</Link>
                    </div>
                  </div>
                </>
              } />
              <Route path="/Login" element={<LoginForm />} />
              <Route path="/Registration" element={<RegisterForm />} />
              <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
          </header>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
