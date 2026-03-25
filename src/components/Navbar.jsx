import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          Waqar <span>Ahmed</span>
        </NavLink>
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
