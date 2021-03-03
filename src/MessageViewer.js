import React from "react";

const MessageViewer = ({ messages }) => {
  return (
    <div class="message-viewer">
      <h1>All Messages</h1>
      <ul>
        {messages.map((msg) => {
          return (
            <li key={msg.id}>
              <h3>{msg.from}</h3>
              <p>{msg.message}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MessageViewer;
