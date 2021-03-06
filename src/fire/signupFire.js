import {fire, db} from "./Fire.js";

export function create_user_in_db(user, user_name) {
  console.log("Sending the user into db...")
  db.collection("user_profiles").doc(user.email).set({
    email: fire.auth().currentUser.email,
    last_login: fire.firestore.FieldValue.serverTimestamp(),
    uid: user.uid,
    username: user_name,
    contacts: [],
  })
  .then(() => {
    console.log("Document written.");
    window.location.replace("./messages");
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
}
