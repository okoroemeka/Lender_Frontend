/* eslint-disable react/state-in-constructor */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from '@reach/router';
import login from '../../actions/login';

class Login extends Component {
  state = {
    email: '',
    password: '',
    message: '',
  };

  handleInputChange = async (event) => {
    const { name, value } = event.target;
    await this.setState(() => ({ [name]: value }));
  };

  handleSubmit = async () => {
    const { login: loginUser } = this.props;
    const { email, password } = this.state;
    const userData = {
      email,
      password,
    };
    await loginUser(userData);
  };

  render() {
    const { email, password, message } = this.state;
    const { authLogin } = this.props;
    if (authLogin.isLoggedIn) return <Redirect noThrow to="/dashboard" />;

    return (
      <div className="login">
        <div className="login_container">
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.handleSubmit();
              }}
            >
              <h3>Login</h3>
              <div className="error">{message}</div>
              <label htmlFor="email">
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Somebody@mail.com"
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

              <button> Login</button>
              <p>
                Don&#39;t have an account?
                <Link to="/signup">Signup</Link>
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
  authLogin: state.authLogin,
});
export default connect(
  mapStateToProps,
  { login },
)(Login);
