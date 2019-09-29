import React from 'react';
import { Link } from '@reach/router';
import './header.scss';

const Header = () => (
  <ul className="navbar">
    <li>
      <Link className="title" to="/">
        lender
      </Link>
    </li>

    <ul className="navbar_items">
      <li>
        <Link className="navbar_item" to="/login">
          log in
        </Link>
      </li>
      <li>
        <Link className="navbar_item" to="/signup">
          signup
        </Link>
      </li>
      <li>
        <Link className="navbar_item" to="/dashboard">
          dashboard
        </Link>
      </li>
    </ul>
  </ul>
);

export default Header;
