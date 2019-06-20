import React from "react";

/**
 * Merupakan laman form login
 */
const LoginForm = props => (
  <form onSubmit={props.onLogin}>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Username
        </span>
      </div>
      <input
        type="text"
        name="username"
        className="form-control"
        placeholder="Username..."
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>

    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Password
        </span>
      </div>
      <input
        type="password"
        name="password"
        className="form-control"
        placeholder="Password..."
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
    <button className="btn btn-outline-secondary btn-lg">Login!</button>
  </form>
);

export default LoginForm;
