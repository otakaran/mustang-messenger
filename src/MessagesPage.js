import React from "react";
import { receiveAllMessages } from "./fire/receiveMessages";
import MessageViewer from "./MessageViewer";
import Messaging from "./Messaging";

class MessagesPage extends React.Component {
  render() {
    let messages = receiveAllMessages();

    return (
      <div class="messages-page">
        <MessageViewer messages={messages} />
        <Messaging />
      </div>
    )
  }
}

export default MessagesPage;