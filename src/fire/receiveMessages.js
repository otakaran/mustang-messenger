import { db } from "./Fire.js";

function getMessagesToUser(user) {
  let messages = [];

  db.collection("messages")
    .where("to", "==", user)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        messages.push(doc.data());
      });
    });

  return messages;
}

function receiveAllMessages() {
  let messages = [];

  db.collection("messages")
    .get()
    .then((querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push(doc.data());
      });
    });

  return messages;
}

export { getMessagesToUser, receiveAllMessages };
