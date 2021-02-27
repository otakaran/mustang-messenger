import {fire, db} from './Fire.js';


function sendMessageFirebase(event) {
  // Proccess incoming data from the form
  event.preventDefault();
  const data = new FormData(event.target);
  var messageTo = (data.get('messageTo'));
  var messageBody = (data.get('messageBody'));
  console.log("Sending a message into db...")
  console.log("messageTo: ", messageTo);
  console.log("messageBody: ", messageBody);

  // Do some basic validation
  // TODO: Verify the userTo exists
  if (messageBody === "") {
    alert("Message is empty.")
  }
  if (messageTo === "") {
    alert("Message recipient is empty.")
  }

  else {
    // Clear the fields
    var form = document.getElementById("messageForm");
    form.reset();

    // Send message into the db
    db.collection("messages").add({
      from: fire.auth().currentUser.email,
      to: messageTo,
      message: messageBody,
      timestamp: fire.firestore.FieldValue.serverTimestamp()
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  }

}

export default sendMessageFirebase;