import { useAuth } from "./fire/AuthContext";
import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router";
import "./css/signup.css";
import { Alert } from "react-bootstrap";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/messages");
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }

  return (
    <div className="signup-component">
      <h2 className="signup-header">Log in to Mustang Messenger</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            ref={emailRef}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            ref={passwordRef}
            placeholder="Password"
          />
        </Form.Group>

        <Button disabled={loading} variant="success" type="submit">
          Log in
        </Button>
      </Form>
    </div>
  );
}

export default Login;
