import { ArrowRight, ShieldCheck, Droplets, PaintBucket } from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Protect Your Home With <span className="text-orange">Diamondking</span>
            </h1>
            <p className="hero-subtitle">
              Premium waterproofing solutions, vibrant paints, and high-quality white cements for lasting durability and unmatched aesthetics.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Get a Quote <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="/hero.png" alt="Premium Home Exterior" className="hero-image animate-float" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section reveal">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Core Solutions</h2>
            <p className="section-desc">We deliver excellence across multiple domains to build stronger, beautiful spaces.</p>
          </div>
          
          <div className="grid grid-cols-3 services-grid">
            <div className="service-card glass">
              <div className="service-icon-wrapper text-lime">
                <Droplets size={40} />
              </div>
              <h3 className="service-title">Waterproofing</h3>
              <p className="service-desc">Advanced technology solutions to protect your structures from water damage and dampness.</p>
            </div>

            <div className="service-card glass">
              <div className="service-icon-wrapper text-orange">
                <PaintBucket size={40} />
              </div>
              <h3 className="service-title">Paints & Coatings</h3>
              <p className="service-desc">Vibrant, long-lasting paints that breathe life into your interior and exterior walls.</p>
            </div>

            <div className="service-card glass">
              <div className="service-icon-wrapper text-yellow">
                <ShieldCheck size={40} />
              </div>
              <h3 className="service-title">White Cements</h3>
              <p className="service-desc">High-strength white cements for perfect finishing, putty, and decorative applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Birla Section */}
      <section className="birla-section section reveal">
        <div className="container">
          <div className="birla-card">
            <div className="birla-content">
              <h2 className="birla-title">Discover <span className="text-yellow">Birla</span> Excellence</h2>
              <p className="birla-desc">
                Diamondking is proud to bring you our premium <strong>Birla</strong> range of products. Synonymous with trust, strength, and perfection, the Birla line offers top-tier home building materials designed for modern architecture.
              </p>
              <ul className="birla-features">
                <li>✓ Unmatched Strength and Durability</li>
                <li>✓ Superior Finish and Aesthetics</li>
                <li>✓ Eco-friendly Manufacturing</li>
              </ul>
              <Link to="/contact" className="btn btn-outline-light">
                Inquire About Birla Products
              </Link>
            </div>
            <div className="birla-image-wrapper">
               <img src="/birla.png" alt="Birla Premium Construction Materials" className="birla-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section section reveal">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our <span className="text-orange">Gallery</span></h2>
            <p className="section-desc">Explore the finest finishes, projects, and premium materials powered by Diamondking.</p>
          </div>
          <div className="gallery-grid">
            {Object.keys(import.meta.glob('/public/gallery/*.{png,jpg,jpeg,webp,gif,svg}')).map((path, index) => {
              const imagePath = path.replace('/public', '');
              return (
                <div key={index} className="gallery-item">
                  <img src={imagePath} alt={`Diamondking Gallery Project ${index + 1}`} className="gallery-image" loading="lazy" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
