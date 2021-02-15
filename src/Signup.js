import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./css/signup.css";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Configuration from Firebase admin console
const firebaseConfig = {
  apiKey: "AIzaSyAxFXU07_Qkb8z6NbgOUwwD6ImNtURjX1c",
  authDomain: "mustang-messenger-41f23.firebaseapp.com",
  projectId: "mustang-messenger-41f23",
  storageBucket: "mustang-messenger-41f23.appspot.com",
  messagingSenderId: "195537124874",
  appId: "1:195537124874:web:3f3a8cb5da2e739390e9f3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Signup() {
  return (
    <div className="signup-component">
      <h2 className="signup-header">Sign up for Mustang Messenger</h2>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formPassword2">
          <Form.Label>Repeat password</Form.Label>
          <Form.Control type="password" placeholder="Repeat password" />
        </Form.Group>

        <Button variant="success" type="submit">
          Sign up
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
