import { useState, useEffect } from "react";
import { db } from "./fire/Fire.js";
import MessageViewer from "./MessageViewer";
import Messaging from "./Messaging";

const MessagesPage = () => {
  const [messagesList, setMessagesList] = useState([]);

  useEffect(() => {
    db.collection("messages").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setMessagesList(messagesList => [...messagesList, doc.data()]);
      })
    })
  }, []);

  return (
    <div className="messages-page">
      <MessageViewer messages={messagesList} />
      <Messaging />
    </div>
  );
};

export default MessagesPage;
