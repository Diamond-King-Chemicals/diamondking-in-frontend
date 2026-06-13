import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar glass animate-fade-in">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Diamondking" />
          <span className="navbar-brand">Diamondking</span>
        </Link>
        
        <div className="navbar-links desktop-only">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </div>

        <button 
          className="mobile-menu-btn mobile-only" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu glass">
          <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="mobile-link" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" className="mobile-link" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
