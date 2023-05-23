import React from 'react';
import './NavbarStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://www.xivtech.io./logo.svg" alt="Logo" className="logo" />
        <img src="https://www.xivtech.io./Text.svg" alt='Logo' className='logo'/>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li className="navbar-link">Services
            {/* <ul className="dropdown-menu">
              <li className="dropdown-item">Option 1</li>
              <li className="dropdown-item">Option 2</li>
              <li className="dropdown-item">Option 3</li>
              <li className="dropdown-item">Option 4</li>
            </ul> */}
          </li>
          <li className="navbar-link">Careers</li>
          <li className="navbar-link">About</li>
          <li className="navbar-link">Contact</li>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </ul>
        <div className="navbar-icons">
          <button className="talk-button">Let's Talk</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
