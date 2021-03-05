import {fire, db} from "./Fire.js";

async function signUpUserFirebase(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  var email = data.get("email");
  var username = data.get("username");
  var password = data.get("password");
  var passwordConf = data.get("passwordConf");
  console.log("Doing sign up auth!");

  if (password === passwordConf) {
    // TODO REMOVE THIS XD
    console.log("email: ", email);
    console.log("password: ", password);
    console.log("passwordConf: ", passwordConf);

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up successfully
        var user = userCredential.user;
        
        // Create a new user in the db as well, it will forward the user when done
        create_user_in_db(user, username)
        console.log("Successfully created user account with uid:", user.uid);

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

function create_user_in_db(user, user_name) {
  console.log("Sending the user into db...")
  db.collection("user_profiles").doc(user.email).set({
    email: fire.auth().currentUser.email,
    last_login: fire.firestore.FieldValue.serverTimestamp(),
    uid: user.uid,
    username: user_name
  })
  .then(() => {
    console.log("Document written.");
    window.location.replace("./messages"); 
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
}

export default signUpUserFirebase;
