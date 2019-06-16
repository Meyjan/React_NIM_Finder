import React, { Component } from "react";

const NavigationBar = props => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" onClick={() => props.gotoTitle()}>
        NIM Finder - React
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" onClick={() => props.gotoHelp()}>
              Help
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              onClick={() => props.gotoSearch()}
              tabindex="-1"
              aria-disabled="true"
            >
              Search!
            </a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" onClick={() => props.gotoRegister()}>
              Register
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => props.gotoLogin()}>
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
