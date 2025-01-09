import React from 'react';
import { FaLocationArrow, FaPhoneAlt, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import '../Style/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Location and Contact */}
        <div className="footer-section">
          <div className="footer-location">
            <FaLocationArrow className="footer-icon" />
            <p>Location</p>
          </div>
          <div className="footer-contact">
            <FaPhoneAlt className="footer-icon" />
            <p>044 49570322</p>
          </div>
        </div>

        {/* Explore Section */}
        <div className="footer-section explore">
          <h4>Explore</h4>
          <ul>
            <li>Features</li>
            <li>About us</li>
            <li>FAQs</li>
            <li>Contact</li>
            <li>Login</li>
            <li>Cookie Policy/Settings</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="footer-section legal">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Documentations</li>
            <li>Accessibility Statement</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="footer-section subscribe">
          <h4>Subscribe</h4>
          <ul>
            <li>Latest News</li>
            <li>Updates</li>
            <li>Carrier</li>
            <li>From us</li>
          </ul>
        </div>
      </div>

      {/* Social Media and Bottom */}
      <div className="footer-bottom">
        <div className="social-icons">
          <span>Follow Us On</span>
          <div className="icons">
            <FaFacebook className="social-icon" />
            <BsTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaYoutube className="social-icon" />
            <FaLinkedin className="social-icon" />
          </div>
        </div>
        <p>© 2024 All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
