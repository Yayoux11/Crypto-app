import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import './styles/index.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" width={120} height={100} style={{ cursor: 'pointer' }} />
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
