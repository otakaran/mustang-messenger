import React from "react";
import { db } from "./fire/Fire.js"
import MessageViewer from "./MessageViewer";
import Messaging from "./Messaging";

class MessagesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    db.collection("messages").get().then((querySnapshot) => (
      querySnapshot.forEach((doc) => {
        this.setState((prevState) => ({
          messages: [...prevState.messages, doc.data()]
        })
      )})
    ))
  }

  render() {
    return (
      <div class="messages-page">
        <MessageViewer messages={this.state.messages} />
        <Messaging />
      </div>
    )
  }
}

export default MessagesPage;