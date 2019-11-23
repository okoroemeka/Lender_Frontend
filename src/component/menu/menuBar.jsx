/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './menu.scss';

const MenuBar = ({ handleClick }) => (
  <div className="box" onClick={handleClick} onKeyDown={handleClick}>
    <div className="box__stroke" />
    <div className="box__stroke" />
    <div className="box__stroke" />
  </div>
);

export default MenuBar;
