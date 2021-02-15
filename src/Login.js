import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./css/signup.css";
import fire from './Fire.js';

function logInUserFirebase(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  var email = (data.get('email'));
  var password = (data.get('password'));
  console.log("Doing login auth!")

  // TODO REMOVE THIS XD
  console.log("email: ", email);
  console.log("password: ", password);
  //

  fire.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    alert("Successfully signed in user account with uid: " + user.uid);
    // Go to messages now
    // This isn't the right way of forwarding... 
    // leaving it for my more React gifted teammates
    window.location.replace("./MessagePage");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Error logging in:", errorCode, errorMessage);
    alert("Error logging in: [" + errorCode + "]\n" + errorMessage);
  });
}

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
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>

        <Button variant="success" type="submit">
          Log in
        </Button>
      </Form>
    </div>
  );
}

export default Login;
