import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-container row">
        <h1 className="header-title">Math Magicians</h1>
        <nav className="nav">
          <ul className="list">
            <li className="list-item">
              <NavLink
                className={(link) => (link.isActive ? 'link active' : 'link')}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink
                className={(link) => (link.isActive ? 'link active' : 'link')}
                to="/calculator"
              >
                Calculator
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink
                className={(link) => (link.isActive ? 'link active' : 'link')}
                to="/quote"
              >
                Quote
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
