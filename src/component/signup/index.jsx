/* eslint-disable react/state-in-constructor */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, navigate } from '@reach/router';
import signup from '../../actions/signup';
import './signup.scss';

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    message: '',
  };

  handleInputChange = async (event) => {
    const { name, value } = event.target;
    await this.setState(() => ({ [name]: value }));
  };

  handleSubmit = async () => {
    const { signup: createUser } = this.props;
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = this.state;
    if (password !== confirmPassword) {
      return this.setState(() => ({ message: 'The password do not match' }));
    }
    const userData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    await createUser(userData);
    return navigate('/Dash');
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      message,
    } = this.state;
    return (
      <div className="signup">
        <div className="signup_container">
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.handleSubmit();
              }}
            >
              <h3>Signup</h3>
              <div className="error">{message}</div>
              <label htmlFor="first_name">
                <input
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => this.handleInputChange(e)}
                  required
                />
              </label>
              <label htmlFor="last_name">
                <input
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => this.handleInputChange(e)}
                  required
                />
              </label>
              <label htmlFor="email">
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={(e) => this.handleInputChange(e)}
                  required
                />
              </label>
              <label htmlFor="password">
                <input
                  autoComplete="off"
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  onChange={(e) => this.handleInputChange(e)}
                  required
                />
              </label>
              <label htmlFor="confirm_password">
                <input
                  className={
                    password !== confirmPassword ? 'misMatchPassword' : ''
                  }
                  type="password"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => this.handleInputChange(e)}
                  required
                />
              </label>
              <button> Sign up</button>
              <p>
                already have an account?
                <Link to="/login">login</Link>
                {''}
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { signup },
)(Signup);
