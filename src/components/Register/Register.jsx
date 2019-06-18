import React, { Component } from "react";
import RegisterForm from "./RegisterForm";

const registerURL = `https://api.stya.net/nim/register`;

class Register extends Component {
  state = {
    registered: 0,
    status: undefined
  };

  handleRegister = async e => {
    e.preventDefault();

    const registerName = e.target.elements.username.value;
    const registerPassword = e.target.elements.password.value;

    const details = {
      username: registerName,
      password: registerPassword
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

    console.log("Handle register received");
    console.log(data.code);
    console.log(data.status);

    if (data.code == 0) {
      this.setState({ registered: 1 });
    } else {
      this.setState({ registered: -1 });
      this.setState({ status: data.status });
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1>Register Here!</h1>
        <h3>Enter your username and password!</h3>
        <RegisterForm onRegister={this.handleRegister} />
        {this.state.registered === 1 && <p>Registration Success!</p>}
        {this.state.registered === -1 && <p>Registration Failed...</p>}
        {this.state.registered === -1 && <p>{this.state.status}</p>}
      </React.Fragment>
    );
  }
}

export default Register;
