import {db} from './Fire.js';


function sendMessageFirebase(event) {
  // Proccess incoming data from the form
  event.preventDefault();
  const data = new FormData(event.target);
  var messageTo = (data.get('messageTo'));
  var messageBody = (data.get('messageBody'));
  console.log("Sending a message indo db...")
  console.log("messageTo: ", messageTo);
  console.log("messageBody: ", messageBody);

  // Initialize Cloud Firestore through Firebase
  

  db.collection("messages").add({
    test: "yay!",
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });

}

export default sendMessageFirebase;