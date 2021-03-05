import React from "react";
import { Link } from "react-router-dom";
import "./css/form.css";

const Landing = () => {
  return (
    <div className="main">
      <div className="email-form">
        <div className="main-title">
          What is Mustang Messenger?
        </div>
        <br />
        <div className="main-body">
          Mustang Messenger is a platform where you can connect and message with other users in private 1-on-1.
          This application features unique user accounts and the ability to message other users.
          All you need is an email and password, and you, too can send and receive messages with other users of the platform!
          <br/><br/>
          Sign up with an email to get started today!
          <br/><br/><br/>
          ~~~
        </div>
        <div className="main-body-bottom">
          <br />
          Need an account? Sign up <Link to="/signup">here.</Link>
          <br />
          Already have an account? Log in <Link to="/login">here.</Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
