import React, { Component } from "react";
import LoginForm from "./LoginForm";
import "./Login.css";

const registerURL = `https://api.stya.net/nim/login`;

/**
 * Merupakan laman yang menangani proses login
 */
class Login extends Component {
  state = {
    loginFail: false,
    status: undefined
  };

  /**
   * Melakukan HTTP POST ke API yang disediakan untuk menentukan
   * apakah nama dan password tersebut sudah terdaftar dan user
   * layak login. Jika ya, berikan user token, jika tidak, berikan pesan error
   */
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
      <div className="row">
        <div className="login-title-wrapper">
          <div className="login-title-text-wrapper">
            <h1>
              <font color="white">Log into your account Here!</font>
            </h1>
            <h3>
              <font color="white">Enter your username and password!</font>
            </h3>
          </div>
        </div>
        <div className="login-form-wrapper">
          <div className="login-form-text-wrapper">
            <LoginForm onLogin={this.handleLogin} />
            {this.state.loginFail && <p>---------------</p>}
            {this.state.loginFail && <p>Login Failed...</p>}
            {this.state.loginFail && <p>{this.state.status}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
