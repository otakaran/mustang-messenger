import fire from './Fire.js';
import getCurrentUserUid from './userFire.js'

function logoutFirebase(event) {
  var uid;
  uid = getCurrentUserUid();
  var user = fire.auth().currentUser;
  
  if (user) {
    console.log("User is trying to sign out", uid);
    alert("User [" + uid + "] is trying to sign out")
    fire.auth().signOut().then(() => {
      // Sign-out successful.
      console.log("Success signing out:", uid);
      alert("User [" + uid + "] is now signed out")
      window.location.replace("./");
    
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
fire.auth().onAuthStateChanged(user => {
    if(user) {
    }
  });

export default logoutFirebase;