import { useAuth } from "./fire/AuthContext";
import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router";
import "./css/signup.css";
import { Alert } from "react-bootstrap";

function Signup() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(
        usernameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
      history.push("/");
    } catch(error) {
      setError(error.message);
    }

    setLoading(false);
  }

  return (
    <div className="signup-component">
      <h2 className="signup-header">Sign up for Mustang Messenger</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            name="username"
            ref={usernameRef}
            placeholder="Enter username"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            ref={emailRef}
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            ref={passwordRef}
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword2">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            ref={passwordConfirmRef}
            placeholder="Confirm password"
            required
          />
        </Form.Group>

        <Button disabled={loading} variant="success" type="submit">
          Sign up
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
