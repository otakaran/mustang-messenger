import React from "react";
import "./css/form.css";

const MessagePage = () => {
  return (
    <div class="main">
      <div class="main-title">There be messages here</div>
      <div class="main-body">
        Lorem ipsum
      </div>
    </div>
  );
};

/* TODO implement sign out
firebase.auth().signOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
*/

export default MessagePage;
