import { fire, db } from "./Fire";

// Create a user
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

/* Reads a user from the user_profiles collection.
 *
 * user: The User object to read data from.
 *
 * Returns: The document from the user_profiles collection corresponding to
 * that user as a JavaScript Object, or undefined if the entry is not found.
 */
export async function read_user_from_db(user) {
  const docRef = db.collection("user_profiles").doc(user.email);

  const doc = await docRef.get();

  if (doc.exists) {
    return doc.data();
  } else {
    console.log("No such document");
  }
}

/* Deletes a user from the user_profiles collection.
 *
 * user: The user object to delete from the collection.
 *
 * Returns: true upon a successful deletion; false otherwise.
 */
export function delete_user_from_db(user) {
  const docRef = db.collection("user_profiles").doc(user.email);

  docRef.delete().then(() => {
    console.log("Document successfully deleted!");
    return true;
  }).catch((error) => {
    console.error("Error removing document: ", error);
    return false;
  });
}
