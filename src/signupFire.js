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

export default signUpUserFirebase;