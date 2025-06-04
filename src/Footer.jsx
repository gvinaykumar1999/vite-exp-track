import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Company</h4>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Products</h4>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Updates</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Support</h4>
        <ul>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Legal</h4>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Cookie Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Connect</h4>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
