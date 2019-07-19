import React from 'react';

import './Navbar.scss';
import logo from '../assets/images/paw_symbol.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <a className="brand" href="#!">
        <img src={logo} alt="" />
      </a>

      <div className="content">
        <h1>User Manager</h1>
        <p>Create, read, update and delete users.</p>
      </div>
    </div>
  );
}
