import fire from "./Fire.js";

function signUpUserFirebase(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  var email = data.get("email");
  var password = data.get("password");
  var passwordConf = data.get("passwordConf");
  console.log("Doing sign up auth!");

  if (password === passwordConf) {
    // TODO REMOVE THIS XD
    console.log("email: ", email);
    console.log("password: ", password);
    console.log("passwordConf: ", passwordConf);
    //

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("Successfully created user account with uid:", user.uid);
        alert("Successfully created user account with uid: " + user.uid);
        // Go to messages now
        // This might be the right way of forwarding...
        window.location.replace("./messaging");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error creating user:", errorCode, errorMessage);
        alert("Error creating user: [" + errorCode + "]\n" + errorMessage);
        // User can try again
      });
    }
    else {
      alert("Error creating user: [-1]\nPasswords do not match.");
    }


}

export default signUpUserFirebase;
