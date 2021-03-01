import {fire} from './Fire.js';
//import getCurrentUserUid from './userFire.js'

function logoutFirebase(event) {
  var uid;
  //uid = getCurrentUserUid();
  var user = fire.auth().currentUser;
  uid = user.uid;
  
  if (user) {
    console.log("User is trying to sign out", uid);
    alert("User [" + uid + "] is trying to sign out")
    fire.auth().signOut().then(() => {
      window.location.replace("./");
      // Sign-out successful.
      console.log("Success signing out:", uid);
      alert("User [" + uid + "] is now signed out")
      // window.location.assign("/");
    }).catch((error) => {
      // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Error signing out:", errorCode, errorMessage);
      alert("Error signing out: [" + errorCode + "]\n" + errorMessage);
    });
  }
  else {
    alert("No one is signed in.")
  }
}

// Handle Account Status
// I don't know why this makes it work but is does

// not sure if I should move this out of this file ?
fire.auth().onAuthStateChanged(user => {
    var signup_login = document.getElementById("signup-login");
    var logout = document.getElementById("logout");  
    if(user) {
      signup_login.style.display = "none";
      logout.style.display = "inline-block";
      window.headerComponent.displayUserID(fire.auth().currentUser.email);
    }
    else {
      signup_login.style.display = "inline-block";
      logout.style.display = "none";
      window.headerComponent.setCenterText("Welcome!");
    }
  });

export default logoutFirebase;