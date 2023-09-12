// Header.js

import React from 'react';
import './Header.css';
import logo from './logoW.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" /> {/* Use the imported logo image */}
      <nav>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
