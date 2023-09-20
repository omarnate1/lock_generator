// Footer.js

import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p className='footer'>&copy; {new Date().getFullYear()} Lock. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
