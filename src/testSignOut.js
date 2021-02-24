import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import "./css/signup.css";
import logoutFirebase from "./fire/logoutFire";

// Testing object, please integrate into frontend components
function SignOut() {
  return (
    <div className="signup-component">
      <h2 className="signup-header">Sign out from Mustang Messenger</h2>
      <Form onSubmit={logoutFirebase}>
        <Button variant="success" type="submit" value="Submit">
          Sign out
        </Button>
      </Form>
    </div>
  );
}

export default SignOut;
