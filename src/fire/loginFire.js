import { fire } from "./Fire.js";

async function logInUserFirebase(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  var email = data.get("email");
  var password = data.get("password");
  console.log("Doing login auth!");

  try {
    fire
    .auth()
    .signInWithEmailAndPassword(email, password);
    window.location.assign("./messages");
  } catch(error) {
    alert(error);
  }
}

export default logInUserFirebase;
