import "./css/messaging.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import sendMessageFirebase from "./fire/sendMessageFire";
import logoutFirebase from "./fire/logoutFire";

class Messaging extends Component {

    render() {
        return (
          <div class="messaging-component">
            <Form onSubmit={sendMessageFirebase}>
              <label for="messageTo">To:</label>
              <input type="text" id="messageTo" name="messageTo" placeholder="Enter username here..." />

              <input type="text" id="messageBody" name="messageBody" placeholder="Type message..." />

              <Button id="sendMessageBtn" type="submit" value="Submit">
                Send
              </Button>
            </Form>
          </div>
        )
    }
}

export default Messaging;