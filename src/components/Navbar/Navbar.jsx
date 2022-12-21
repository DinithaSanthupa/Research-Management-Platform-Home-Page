import { useState } from 'react';
import React from 'react';

import logo from '../Navbar/ideas.png';

import '../Navbar/Navbar.css';

const Navbar = () => {
  const [navlinkopen, navlinktogle] = useState(false);

  const handleToggle = () => {
    navlinktogle(!navlinkopen);
  };

  const renderClass = () => {
    let classes = 'navlinks';
    if (navlinkopen) {
      classes += ' active';
    }
    return classes;
  };
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className={renderClass()}>
          <li className="link">
            <a href="#">About</a>
          </li>
          <li className="link">
            <a href="#">Accounts</a>
          </li>
          <li className="link login-btn">
            <a href="#">Login</a>
          </li>
          <li className="link register-btn">
            <a href="#">Register</a>
          </li>
        </ul>
        <div onClick={handleToggle} className="hamburger-toggle">
          <i class="fa-solid fa-bars"></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
