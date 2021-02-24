import fire from './Fire.js';

function getCurrentUserDetails() {
  var user = fire.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

  if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;
  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  }
}

function getCurrentUserUid() {
  var user = fire.auth().currentUser;
  var uid;

  if (user) {
    // User is signed in.
    uid = user.uid;
  }
  else {
    // No user is signed in.
  }

  return uid
}

export default getCurrentUserUid;

