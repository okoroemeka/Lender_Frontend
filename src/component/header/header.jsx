/* eslint-disable react/state-in-constructor */
import React from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import Logout from '../logout';
import MenuBar from '../menu/menuBar';
import './header.scss';

/**
 * Nav Item to display when logged in
 */
const navItemsToDisplayWhenLoggedIn = () => (
  <>
    <li>
      <Link className="navbar_item" to="/dashboard">
        dashboard
      </Link>
    </li>
    <li>
      <Logout />
    </li>
  </>
);

/**
 * Nav Item to display when logged out
 */
const navItemsToDisplayWhenLoggedOut = () => (
  <>
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
  </>
);
/**
 * Displays Nav Item based on user login status
 */
const Header = ({ authLogin }) => (
  <ul className="navbar">
    <li>
      <Link className="title" to="/">
        lender
      </Link>
    </li>

    <ul className="navbar_items">
      {authLogin.isLoggedIn
        ? navItemsToDisplayWhenLoggedIn()
        : navItemsToDisplayWhenLoggedOut()}
    </ul>
    <li className="navbar__second__item">
      <MenuBar />
    </li>
  </ul>
);
const mapStateToProps = (state = []) => ({
  authLogin: state.authLogin
});
export default connect(mapStateToProps)(Header);
