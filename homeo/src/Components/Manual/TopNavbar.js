import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdOutlinePerson } from "react-icons/md";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import "../Style/Navbar.css";

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="top-navbar-left">
        <div>
          <FaWhatsapp className="top-navbar-icon" />
          <FaFacebook className="top-navbar-icon" />
          <FaInstagram className="top-navbar-icon" />
        </div>
        <div>
          <FiPhoneCall className="top-navbar-icon" />
          <span className="top-navbar-contact">+91 9918686874</span>
        </div>
        <div>
          <MdEmail className="top-navbar-icon" />
          <span className="top-navbar-contact">www.abc@gmail.com</span>
        </div>
      </div>
      <div className="top-navbar-right">
        <div className="top-navbar-location">
          <FaMapMarkerAlt className="top-navbar-icon" />
          <span>Jaunpur</span>
        </div>
        <div className="top-navbar-btn">
          <button className="top-navbar-login-button">
            <MdOutlinePerson className="top-navbar-icon" /> Login
          </button>
          <button className="top-navbar-signup-button">
            < MdOutlinePersonAddAlt className="top-navbar-icon" /> Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
