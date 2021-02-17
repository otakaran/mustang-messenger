import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import "./css/signup.css";
import fire from './Fire.js';

function signUpUserFirebase(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  var email = (data.get('email'));
  var password = (data.get('password'));
  var passwordConf = (data.get('passwordConf'));
  console.log("Doing sign up auth!")

  // TODO verify password == passwordConf

  // TODO REMOVE THIS XD
  console.log("email: ", email);
  console.log("password: ", password);
  console.log("passwordConf: ", passwordConf);
  //

  fire.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("Successfully created user account with uid:", user.uid);
    alert("Successfully created user account with uid: " + user.uid);
    // Go to messages now
    // This isn't the right way of forwarding... 
    // leaving it for my more React gifted teammates
    window.location.replace("./MessagePage");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Error creating user:", errorCode, errorMessage);
    alert("Error creating user: [" + errorCode + "]\n" + errorMessage);
    // User can try again
  });
}

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
