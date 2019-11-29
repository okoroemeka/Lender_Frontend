import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from '@reach/router';
import './landing.scss';

const LandingPage = ({ authLogin }) => {
  if (authLogin.isLoggedIn) return <Redirect noThrow to="/dashboard" />;
  return (
    <div className="landing__page__container">
      <div className="landing__page__overlay">
        <div className="details__area">
          <div className="title__container">
            <h1>Lender</h1>
            <h3>Never go out dry, we are here to help. </h3>
          </div>
          <div className="button__container">
            <Link to="/login" className="login__button">
              Log in
            </Link>
            <Link to="/signup" className="signup__button">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  authLogin: state.authLogin,
});
export default connect(
  mapStateToProps,
  {},
)(LandingPage);
