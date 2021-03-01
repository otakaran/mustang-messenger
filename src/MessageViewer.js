import React from "react";
import { db } from "./fire/Fire";

class MessageViewer extends React.Component {
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
      <div class="message-viewer">
        <h1>All Messages</h1>
        <ul>
          {this.state.messages.map((msg) => {
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
  }
}

export default MessageViewer;
