import { Link } from "react-router-dom";
import "./css/header.css";
import banner from "./images/mustang-messenger-banner.png";
import Button from "react-bootstrap/Button";
import logoutFirebase from "./fire/logoutFire";
import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "",
      userID: "",
      loggedIn: false,
    };
    window.headerComponent = this;
  }

  setUserStatus = (status) => {
    this.setState({
      loggedIn: status,
    })
  };

  setCenterText = (text) => {
    this.setState({
      page: text,
    });
  };

  displayUserID = (id) => {
    this.setState({
      userID: id,
    })
  }

  render() {
    let bannerStatus;
    if(this.state.loggedIn) {
      bannerStatus =
      <div class="header-left">
          <img src={banner} id="banner" alt="Mustang Messenger banner" />
      </div>;
    }
    else {
      bannerStatus = 
      <div class="header-left">
        <Link to="/" onClick={() => this.setCenterText("Welcome!")}>
          <img src={banner} id="banner" alt="Mustang Messenger banner" />
        </Link>
      </div>;
    }
    return (
      <div class="header">
        {bannerStatus}
        <div class="header-middle">{this.state.page}</div>
        <div class="header-right" id="signup-login">
          <Link to="/signup" onClick={() => this.setCenterText("Sign Up")}>
            Sign up
          </Link>{" "}
          or{" "}
          <Link to="/login" onClick={() => this.setCenterText("Log In")}>
            Log in
          </Link>
        </div>
        <div class="header-right" id="logout">
          <div class="userID">
            {this.state.userID}
          </div>
            <Button variant="success" type="submit" value="Submit" onClick={logoutFirebase}>
              Sign out
            </Button>
        </div>
      </div>
    );
  }
}

export default Header;
