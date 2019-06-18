// DECORATOR DESIGN PATTERN

import React, { Component } from "react";
import "./App.css";

import Title from "./components/Title/Title";
import Help from "./components/Help/Help";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Search from "./components/Search/Search";
import NavigationBar from "./components/NavigationBar/NavigationBar";

class App extends Component {
  state = {
    showScreen: "title",
    loggedIn: false,
    authToken: ""
  };

  handlegotoTitle = () => {
    this.setState({ showScreen: "title" });
  };

  handlegotoLogin = () => {
    this.setState({ showScreen: "login" });
  };

  handlegotoRegister = () => {
    this.setState({ showScreen: "register" });
  };

  handlegotoSearch = () => {
    this.setState({ showScreen: "search" });
  };

  handlegotoHelp = () => {
    this.setState({ showScreen: "help" });
  };

  handleLoggedIn = token => {
    this.setState({ showScreen: "search" });
    this.setState({ loggedIn: true });
    this.setState({ authToken: token });
  };

  handleLoggedOut = () => {
    this.setState({ showScreen: "title" });
    this.setState({ loggedIn: false });
    this.setState({ authToken: undefined });
  };

  render() {
    // Di atas Fragment buatlah NavBar dahulu untuk pindah laman
    return (
      <React.Fragment>
        <NavigationBar
          gotoTitle={this.handlegotoTitle}
          gotoHelp={this.handlegotoHelp}
          gotoSearch={this.handlegotoSearch}
          gotoLogin={this.handlegotoLogin}
          gotoLogout={this.handleLoggedOut}
          gotoRegister={this.handlegotoRegister}
          loggedIn={this.state.loggedIn}
        />
        {this.state.showScreen === "title" && <Title />}
        {this.state.showScreen === "register" && <Register />}
        {this.state.showScreen === "login" && (
          <Login onLoggedIn={this.handleLoggedIn} />
        )}
        {this.state.showScreen === "search" && (
          <Search authToken={this.state.authToken} />
        )}
        {this.state.showScreen === "help" && <Help />}
      </React.Fragment>
    );
  }
}

export default App;
