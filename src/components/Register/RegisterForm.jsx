import React from "react";

const RegisterForm = props => (
  <form onSubmit={props.onRegister}>
    <input type="text" name="username" placeholder="Username..." />
    <input type="password" name="password" placeholder="Password..." />
    <button>Register Now!</button>
  </form>
);

export default RegisterForm;
