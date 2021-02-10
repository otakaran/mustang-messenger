import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";

function Login() {
  return (
    <Jumbotron>
      <h2>Log in to Mustang Messenger</h2>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formPassword2">
          <Form.Label>Repeat password</Form.Label>
          <Form.Control type="password" placeholder="Repeat password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Jumbotron>
  );
}

export default Login;
