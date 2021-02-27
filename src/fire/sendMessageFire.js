import fire from './Fire.js';


function sendMessageFirebase(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  var messageTo = (data.get('messageTo'));
  var messageBody = (data.get('messageBody'));
  console.log("Sending a message indo db...")
  console.log("messageTo: ", messageTo);
  console.log("messageBody: ", messageBody);



}

export default sendMessageFirebase;