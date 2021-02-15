import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./css/signup.css";


function Login() {
  return (
    <div className="signup-component">
      <h2 className="signup-header">Log in to Mustang Messenger</h2>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="success" type="submit">
          Log in
        </Button>
      </Form>
    </div>
  );
}

export default Login;
