import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h5>© Clepi - 2021</h5>
      <div className="footerNav">
        <a href="https://foter.com/" target="_blank" rel="noreferrer">
          Images
        </a>
        <Link to="/admin">Admin</Link>
      </div>
    </footer>
  );
}

export default Footer;
