import React from "react";

const NavigationBar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" onClick={() => props.gotoTitle()}>
        NIM Finder - React
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link" onClick={() => props.gotoHelp()}>
              Help
            </a>
          </li>
          <li className="nav-item">
            <a
              className={props.loggedIn ? "nav-link" : "nav-link disabled"}
              onClick={() => props.gotoSearch()}
              tabIndex="-1"
              aria-disabled="true"
            >
              Search!
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link" onClick={() => props.gotoRegister()}>
              Register
            </a>
          </li>
          {!props.loggedIn && (
            <li className="nav-item">
              <a className="nav-link" onClick={() => props.gotoLogin()}>
                Login
              </a>
            </li>
          )}
          {props.loggedIn && (
            <li className="nav-item">
              <a className="nav-link" onClick={() => props.gotoLogout()}>
                Logout
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
