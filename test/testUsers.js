import { fire } from "../src/fire/Fire";
import { create_user_in_db, read_user_from_db } from "../src/fire/userProfiles";

// Creates a new user, reads its user profile, then deletes it
function userTest1() {
  let user;
  const username = "testUserUno";
  const email = "test@useruno.com";
  const password = "testuseruno123";

  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      user = userCredential.user;
      create_user_in_db(user, username);
    }).then(() => {
      const profile = read_user_from_db(user);
      console.log("profile: ", profile);
    }).then(() => {
      user.delete();
    }).catch((error) => {
      console.error(error);
    });
}
