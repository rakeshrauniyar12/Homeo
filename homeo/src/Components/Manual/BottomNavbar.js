import React from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css"; // Import the CSS file
import logo from "../Assets/logo.png";

const BottomNavbar = () => {
  return (
    <div className="bottom-bar">
      <div className="logo-section">
        <div className="logo"><img src={logo}/></div>
        <div className="logo-text">
          <strong>HOMOEOPATHIC HEALTH CARE &</strong>
          <br />
          RESEARCH CENTER
        </div>
      </div>

      <nav className="nav">
        <Link to="/" className="nav-link">
          <p>Home</p>
        </Link>
        <Link to="/book-appointment" className="nav-link">
          <p>Book Appointment</p>
        </Link>
        <Link to="/our-treatments" className="nav-link">
          <p>Our Treatments</p>
        </Link>
        <Link to="/gallery" className="nav-link">
          <p>Gallery</p>
        </Link>
        <Link to="/testimonials" className="nav-link">
          <p>Testimonials</p>
        </Link>
        <Link to="/about-us" className="nav-link">
          <p>About Us</p>
        </Link>
        <Link to="/contact-us" className="nav-link">
          <p>Contact Us</p>
        </Link>
      </nav>
    </div>
  );
};

export default BottomNavbar;
