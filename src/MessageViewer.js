import { db } from "./fire/Fire";
import { useAuth } from "./fire/AuthContext";
import Message from "./Message";
import "./css/message.css";
import { useCollectionData } from "react-firebase-hooks/firestore";

const MessageViewer = ({ contact }) => {
  const { currentUser } = useAuth();
  const messagesRef = db.collection("messages");
  const query = messagesRef.orderBy("timestamp");

  function filterContact(msg) {
    return (
      (msg.to === currentUser.email && msg.from === contact) ||
      (msg.from === currentUser.email && msg.to === contact)
    );
  }

  let [messages] = useCollectionData(query, { idField: "id" });

  if (messages && contact) {
    messages = messages.filter(filterContact);
  }

  return (
    <div className="message-viewer container">
      <h1 className="messages-header">All Messages</h1>
      {messages &&
        messages.map((msg) => {
          return <Message msg={msg} key={msg.id} />;
        })}
    </div>
  );
};

export default MessageViewer;
