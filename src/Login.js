import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./css/signup.css";
import logInUserFirebase from "./fire/loginFire";

function Login() {
  return (
    <div className="signup-component">
      <h2 className="signup-header">Log in to Mustang Messenger</h2>
      <Form onSubmit={logInUserFirebase}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Log in
        </Button>
      </Form>
    </div>
  );
}

export default Login;
