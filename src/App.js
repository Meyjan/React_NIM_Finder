// DECORATOR DESIGN PATTERN

import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Title from "./components/Title";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Search from "./components/Search/Search";

class App extends React.Component {
  state = {
    showScreen: "title",
    authToken: ""
  };

  render() {
    // Di atas Fragment buatlah NavBar dahulu untuk pindah laman
    return (
      <React.Fragment>
        {this.state.showScreen === "title" && <Title />}
        {this.state.showScreen === "register" && <Register />}
        {this.state.showScreen === "login" && <Login />}
        {this.state.showScreen === "search" && <Search />}
      </React.Fragment>
    );
  }
}

export default App;
