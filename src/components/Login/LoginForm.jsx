import React from "react";

const LoginForm = props => (
  <form onSubmit={props.onLogin}>
    <input type="text" name="username" placeholder="Username..." />
    <input type="password" name="password" placeholder="Password..." />
    <button>Login!</button>
  </form>
);

export default LoginForm;
