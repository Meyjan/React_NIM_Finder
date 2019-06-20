// DECORATOR DESIGN PATTERN

import React, { Component } from "react";
import "./App.css";

import Title from "./components/Title/Title";
import Help from "./components/Help/Help";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Search from "./components/Search/Search";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import NavigationBarBottom from "./components/NavigationBar_Bottom/NavigationBarBottom";

/**
 * Class utama yang menampilkan hasil render dari semua komponen di bawahnya
 */
class App extends Component {
  state = {
    showScreen: "title",
    loggedIn: false,
    authToken: ""
  };

  /**
   * Mengubah layar yang ditampilkan menjadi title
   */
  handlegotoTitle = () => {
    this.setState({ showScreen: "title" });
  };

  /**
   * Mengubah layar yang ditampilkan menjadi login
   */
  handlegotoLogin = () => {
    this.setState({ showScreen: "login" });
  };

  /**
   * Mengubah layar yang ditampilkan menjadi register
   */
  handlegotoRegister = () => {
    this.setState({ showScreen: "register" });
  };

  /**
   * Mengubah layar yang ditampilkan menjadi search
   */
  handlegotoSearch = () => {
    this.setState({ showScreen: "search" });
  };

  /**
   * Mengubah layar yang ditampilkan menjadi help
   */
  handlegotoHelp = () => {
    this.setState({ showScreen: "help" });
  };

  /**
   * Handle jika sudah login. Mengganti laman menjadi search dan set token menjadi authorityToken yang didapatkan
   */
  handleLoggedIn = token => {
    this.setState({ showScreen: "search" });
    this.setState({ loggedIn: true });
    this.setState({ authToken: token });
  };

  /**
   * Handle jika sudah logout. Mengganti laman menjadi title dan set token menjadi unknown (sudah loggedOut)
   */
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
        <div className="bg">
          {this.state.showScreen === "title" && <Title />}
          {this.state.showScreen === "register" && <Register />}
          {this.state.showScreen === "login" && (
            <Login onLoggedIn={this.handleLoggedIn} />
          )}
          {this.state.showScreen === "search" && (
            <Search authToken={this.state.authToken} />
          )}
          {this.state.showScreen === "help" && <Help />}
        </div>
        <NavigationBarBottom />
      </React.Fragment>
    );
  }
}

export default App;
