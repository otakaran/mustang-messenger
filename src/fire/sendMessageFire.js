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

  // Check if user exists, if they do add this user to current user contacts,
  // also add to the contacted user's contacts
  var toUserRef = db.collection("user_profiles").doc(messageTo);
  var fromUserRef = db.collection("user_profiles").doc(fire.auth().currentUser.email);

  toUserRef.get().then((doc) => {
      if (doc.exists) {
        console.log("User data:", doc.data());
        // Do some other basic validation
        if (messageBody === "") {
          alert("Message is empty.")
        }
        else if (messageTo === "") {
          alert("Message recipient is empty.")
        }
        else {
          // Clear the fields
          var form = document.getElementById("messageForm");
          form.reset();

          // Update user profiles with the new contact
          toUserRef.update({
            contacts: fire.firestore.FieldValue.arrayUnion(fire.auth().currentUser.email)
          });
          fromUserRef.get()
          fromUserRef.update({
            contacts: fire.firestore.FieldValue.arrayUnion(messageTo)
          })

      
          // Send message into the db
          db.collection("messages").add({
            from: fire.auth().currentUser.email,
            to: messageTo,
            message: messageBody,
            timestamp: fire.firestore.FieldValue.serverTimestamp()
          })
          .then((toUserRef) => {
              console.log("Document written with ID: ", toUserRef.id);
              /* So messages page refreshes */
              window.location.reload();
          })
          .catch((error) => {
              console.error("Error adding document: ", error);
          });
        }
      }
      else {
          // doc.data() will be undefined in this case
          alert("No such user registered with Mustang Messenger!");
      }
  }).catch((error) => {
      console.log("Error getting user info:", error);
  });

}

export default sendMessageFirebase;