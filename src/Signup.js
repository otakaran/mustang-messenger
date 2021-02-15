import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./css/signup.css";

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
