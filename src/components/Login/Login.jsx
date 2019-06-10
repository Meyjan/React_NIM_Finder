import React, { Component } from "react";

const loginURL = "https://api.stya.net/nim/login";

class Login extends Component {
  state = {
    username: undefined,
    password: undefined
  };
  render() {
    return (
      <React.Fragment>
        <h1>Login Component</h1>
      </React.Fragment>
    );
  }
}

export default Login;
