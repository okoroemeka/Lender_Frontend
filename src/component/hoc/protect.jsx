import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';
import Dashboard from '../dashboard';

const Private = ({ authLogin, path }) => (
  <>
    {authLogin.isLoggedIn ? (
      <Dashboard path={path} />
    ) : (
      <Redirect to="/login" />
    )}
  </>
);
const mapStateToProps = (state) => ({
  authLogin: state.authLogin,
});
export default connect(
  mapStateToProps,
  {},
)(Private);
