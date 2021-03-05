import Message from "./Message";
import "./css/message.css";

const MessageViewer = ({ messages }) => {
  return (
    <div className="message-viewer container">
      <h1 className="messages-header">All Messages</h1>
      {messages.map((msg, index) => {
        return (
          <Message msg={msg} index={index} />
        );
      })}
    </div>
  );
};

export default MessageViewer;
