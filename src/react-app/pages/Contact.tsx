import { MapPin, Phone, Mail, Clock } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page animate-fade-in">
      <section className="page-header">
        <div className="container text-center">
          <h1 className="page-title">Get In <span className="text-orange">Touch</span></h1>
          <p className="page-subtitle">We're here to help with your home building needs.</p>
        </div>
      </section>

      <section className="section reveal">
        <div className="container contact-container">
          <div className="contact-info-section">
            <h2 className="section-title">Contact Information</h2>
            <p className="contact-desc">
              Reach out to us for inquiries, quotes, or to learn more about our premium range of products.
            </p>
            
            <div className="info-cards">
              <div className="info-card glass">
                <div className="info-icon-wrapper text-orange">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="info-title">Our Office</h4>
                  <p className="info-detail">123 Diamond Avenue, Industrial Area, City 400001</p>
                </div>
              </div>

              <div className="info-card glass">
                <div className="info-icon-wrapper text-yellow">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="info-title">Phone</h4>
                  <p className="info-detail">+91 98765 43210</p>
                </div>
              </div>

              <div className="info-card glass">
                <div className="info-icon-wrapper text-lime">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="info-title">Email</h4>
                  <p className="info-detail">info@diamondking.com</p>
                </div>
              </div>

              <div className="info-card glass">
                <div className="info-icon-wrapper text-orange">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="info-title">Business Hours</h4>
                  <p className="info-detail">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section glass">
            <h3 className="form-title">Send us a Message</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Product Inquiry" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="How can we help you?" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
