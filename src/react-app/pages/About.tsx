import "./About.css";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="about-page animate-fade-in">
      {/* Header */}
      <section className="page-header">
        <div className="container text-center">
          <h1 className="page-title">About <span className="text-orange">Diamondking</span></h1>
          <p className="page-subtitle">Building Trust. Delivering Excellence.</p>
        </div>
      </section>

      <section className="section reveal">
        <div className="container about-container">
          <div className="about-image-wrapper">
             <img src="/about.png" alt="Diamondking Manufacturing Facility" className="about-image" />
          </div>
          <div className="about-content">
            <h2 className="section-title">Our Story</h2>
            <p className="about-desc">
              Diamondking Chemicals began with a simple mission: to provide the highest quality home building and waterproofing solutions that stand the test of time. Over the years, we have grown into a trusted brand, known for our uncompromising standards and commitment to innovation.
            </p>
            <p className="about-desc">
              From advanced waterproofing tech to vibrant, long-lasting paints, we ensure every product that leaves our facility is crafted to perfection.
            </p>
            
            <h3 className="sub-title mt-4">Why Choose Us?</h3>
            <ul className="benefits-list">
              <li><CheckCircle2 className="text-lime" size={20} /> Premium Quality Materials</li>
              <li><CheckCircle2 className="text-lime" size={20} /> Advanced Waterproofing Technology</li>
              <li><CheckCircle2 className="text-lime" size={20} /> Sustainable & Eco-friendly Practices</li>
              <li><CheckCircle2 className="text-lime" size={20} /> Trusted by Thousands of Homeowners</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
