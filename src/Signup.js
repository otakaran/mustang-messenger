import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import "./css/signup.css";
import signUpUserFirebase from "./signupFire";

function Signup() {
  return (
    <div className="signup-component">
      <h2 className="signup-header">Sign up for Mustang Messenger</h2>
      <Form onSubmit={signUpUserFirebase}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formEmail" id="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formPassword" id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formPassword2">
          <Form.Label>Repeat password</Form.Label>
          <Form.Control type="password" name="passwordConf" placeholder="Repeat password" />
        </Form.Group>

        <Button variant="success" type="submit" value="Submit">
          Sign up
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
