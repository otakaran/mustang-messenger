import fire from './Fire.js';
import getCurrentUserUid from './userFire.js'

function logoutFirebase(event) {
  var uid;
  uid = getCurrentUserUid();
  
  if (uid) {
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
  alert("No one is signed in.")
}

export default logoutFirebase;