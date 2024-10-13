import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a href="#">
        <FaTelegramPlane />
      </a>
      <a href="#">
        <FaWhatsapp />
      </a>
      <a href="#">
        <FaLinkedin />
      </a>
      <a href="#">
        <FaInstagram />
      </a>
    </footer>
  );
};

export default Footer;
