/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/state-in-constructor */
import React, { useState } from 'react';
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
    <li className="navbar_item_container">
      <Link className="navbar_item" to="/dashboard">
        dashboard
      </Link>
    </li>
    <li className="navbar_item_container">
      <Logout />
    </li>
  </>
);

/**
 * Nav Item to display when logged out
 */
const navItemsToDisplayWhenLoggedOut = () => (
  <>
    <li className="navbar_item_container">
      <Link className="navbar_item" to="/login">
        log in
      </Link>
    </li>
    <li className="navbar_item_container">
      <Link className="navbar_item" to="/signup">
        signup
      </Link>
    </li>
  </>
);
/**
 *
 * cancel button
 */
const cancelButton = clickHandler => (
  <span
    className="cancel__hanbuger"
    onClick={clickHandler}
    onKeyDown={clickHandler}
  >
    &times;
  </span>
);
/**
 * Displays Nav Item based on user login status
 */
const Header = ({ authLogin }) => {
  const [displayHanburger, setDisplay] = useState(true);

  const handleClick = async () => {
    await setDisplay(!displayHanburger);
  };
  return (
    <ul className="navbar">
      <li className="title__container">
        <Link className="title" to="/">
          lender
        </Link>
      </li>
      <li
        className={`items__container ${
          displayHanburger ? 'remove__menubar' : ''
        }`}
      >
        <ul className="navbar_items">
          {authLogin.isLoggedIn
            ? navItemsToDisplayWhenLoggedIn()
            : navItemsToDisplayWhenLoggedOut()}
        </ul>
      </li>

      <li className="navbar__second__item">
        {displayHanburger ? (
          <MenuBar handleClick={handleClick} />
        ) : (
          cancelButton(handleClick)
        )}
      </li>
    </ul>
  );
};
const mapStateToProps = (state = []) => ({
  authLogin: state.authLogin
});
export default connect(mapStateToProps)(Header);
