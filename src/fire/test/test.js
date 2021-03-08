import { db, fire } from "../Fire";

const test = require("firebase-functions-test")({
  apiKey: "AIzaSyAxFXU07_Qkb8z6NbgOUwwD6ImNtURjX1c",
  authDomain: "mustang-messenger-41f23.firebaseapp.com",
  projectId: "mustang-messenger-41f23",
  storageBucket: "mustang-messenger-41f23.appspot.com",
  messagingSenderId: "195537124874",
  appId: "1:195537124874:web:3f3a8cb5da2e739390e9f3"
}, "../../mustang-messenger-41f23-09c4e98c9076.json");
const userProfiles = require("../userProfiles.js");

const wrapped = test.wrap(userProfiles.create_user_in_db);
const snap = test.firestore.exampleDocumentSnapshot();

function bigChungus() {
  return wrapped(snap).then(() => {
    return fire.database().ref("user_profiles/big@chungus.com").once("email").then((createdSnap) => {
      console.log(createdSnap.val());
    })
  });
}

bigChungus();

test.cleanup();
