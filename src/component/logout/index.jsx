/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import { logout } from '../../actions/login';

class Logout extends Component {
  state = {};

  logOutUser = () => {
    const { logout: userLogout } = this.props;
    userLogout();
    navigate('/login');
  };

  render() {
    return (
      <span
        className="navbar_item logout"
        onKeyUp={this.logOutUser}
        onClick={this.logOutUser}
        role="button"
      >
        Log out
      </span>
    );
  }
}
const mapStateToProps = (state) => ({
  authLogin: state.authLogin,
});
export default connect(
  mapStateToProps,
  { logout },
)(Logout);
