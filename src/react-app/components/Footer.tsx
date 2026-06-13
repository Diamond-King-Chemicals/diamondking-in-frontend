import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe, Hash, Video, Link as LinkIcon } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer animate-fade-in">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              <img src="/logo.png" alt="Diamondking Logo" />
              <span className="footer-brand">Diamondking</span>
            </Link>
            <p className="footer-desc">
              Leading provider of premium waterproofing solutions, paints, white cements, and home building materials.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Globe size={20} /></a>
              <a href="#" className="social-link"><Hash size={20} /></a>
              <a href="#" className="social-link"><Video size={20} /></a>
              <a href="#" className="social-link"><LinkIcon size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/">Products</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-title">Our Brands</h3>
            <ul className="footer-links">
              <li><a href="#birla">Birla Options</a></li>
              <li><a href="#">Diamondking Premium</a></li>
              <li><a href="#">Waterproof Solutions</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>123 Diamond Avenue, Industrial Area</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>info@diamondking.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Diamondking Chemicals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
