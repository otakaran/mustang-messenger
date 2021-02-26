import { Link } from "react-router-dom";
import "./css/header.css";
import banner from "./images/mustang-messenger-banner.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logoutFirebase from "./fire/logoutFire";
import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "",
    };
    window.headerComponent = this;
  }

  setCenterText = (text) => {
    this.setState({
      page: text,
    });
  };

  render() {
    return (
      <div class="header">
        <div class="header-left">
          <Link to="/" onClick={() => this.setCenterText("Welcome!")}>
            <img src={banner} id="banner" alt="Mustang Messenger banner" />
          </Link>
        </div>
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
          <Form onSubmit={logoutFirebase}>
            <Button variant="success" type="submit" value="Submit">
              Sign out
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Header;
