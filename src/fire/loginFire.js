import fire from './Fire.js';

function logInUserFirebase(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  var email = (data.get('email'));
  var password = (data.get('password'));
  console.log("Doing login auth!")

  // TODO REMOVE THIS (Debug)
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
    // This might be the right way of forwarding...
    window.location.assign("./messaging");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Error logging in:", errorCode, errorMessage);
    alert("Error logging in: [" + errorCode + "]\n" + errorMessage);
  });
}

export default logInUserFirebase;