import "./css/message.css";

const MessageViewer = ({ messages }) => {
  return (
    <div className="message-viewer container">
      <h1>All Messages</h1>
      {messages.map((msg) => {
        return (
          <div className="message" id={msg.id}>
            <h3>{msg.from}</h3>
            <p>{msg.message}</p>
          </div>
        )
      })}
    </div>
  );
};

export default MessageViewer;
