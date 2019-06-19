import React, { Component } from "react";
import LoginForm from "./LoginForm";

const registerURL = `https://api.stya.net/nim/login`;

class Login extends Component {
  state = {
    loginFail: false,
    status: undefined
  };

  handleLogin = async e => {
    e.preventDefault();

    const loginName = e.target.elements.username.value;
    const loginPassword = e.target.elements.password.value;

    const details = {
      username: loginName,
      password: loginPassword
    };

    let formBody = [];
    for (const property in details) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    const register_call = await fetch(registerURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: formBody
    });
    const data = await register_call.json();

    if (data.code === 0) {
      this.props.onLoggedIn(data.token);
    } else {
      this.setState({ loginFail: true });
      this.setState({ status: data.status });
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1>Log into your account Here!</h1>
        <h3>Enter your username and password!</h3>
        <LoginForm onLogin={this.handleLogin} />
        {this.state.loginFail && <p>Login Failed...</p>}
        {this.state.loginFail && <p>{this.state.status}</p>}
      </React.Fragment>
    );
  }
}

export default Login;
