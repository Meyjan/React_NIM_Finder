import React from "react";

/**
 * Merupakan laman NavigationBar yang merupakan interface untuk perpindahan antar laman
 */
const NavigationBar = props => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <button className="btn btn-default" onClick={() => props.gotoTitle()}>
        <h4>
          <font color="white">React NIM Finder</font>
        </h4>
      </button>
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
            <button
              className="btn btn-default"
              onClick={() => props.gotoHelp()}
            >
              <font color="white">Help</font>
            </button>
          </li>
          <li className="nav-item">
            <button
              className={
                props.loggedIn ? "btn btn-default" : "btn btn-default disabled"
              }
              disabled={props.loggedIn ? false : true}
              onClick={() => props.gotoSearch()}
              tabIndex="-1"
              aria-disabled="true"
            >
              <font color="white">Search!</font>
            </button>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right mt-2 mt-lg-0">
          <li className="nav-item">
            <button
              className="btn btn-default"
              onClick={() => props.gotoRegister()}
            >
              <font color="white">Register</font>
            </button>
          </li>
          {!props.loggedIn && (
            <li className="nav-item">
              <button
                className="btn btn-default"
                onClick={() => props.gotoLogin()}
              >
                <font color="white">Login</font>
              </button>
            </li>
          )}
          {props.loggedIn && (
            <li className="nav-item">
              <button
                className="btn btn-default"
                onClick={() => props.gotoLogout()}
              >
                <font color="white">Logout</font>
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
