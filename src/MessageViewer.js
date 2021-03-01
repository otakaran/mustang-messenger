import React from "react";

const MessageViewer = (props) => {
  return (
    <div class="message-viewer">
      <h1>All Messages</h1>
      <ul>
        {props.messages.map((msg) => {
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
