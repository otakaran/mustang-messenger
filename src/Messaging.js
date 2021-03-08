import { useLocation } from "react-router-dom";
import "./css/messaging.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import sendMessageFirebase from "./fire/sendMessageFire";

const Messaging = ({ contact }) => {
  const location = useLocation();

  const MessageTo = () => {
    let messageToStyle;
    if (location.pathname === "/messages") {
      messageToStyle = {
        display: "inline-block",
      }
    }
    else {
      messageToStyle = {
        display: "none",
      }
    }
    return(
      <div style={messageToStyle}>
        <label htmlFor="messageTo">To:</label>
        <input
          type="text"
          id="messageTo"
          name="messageTo"
          placeholder="Enter email here..."
          value={contact}
        />
      </div>
    );
    };

  return (
    <div className="messaging-component">
      <Form id="messageForm" onSubmit={sendMessageFirebase}>

        <MessageTo />

        <input
          type="text"
          id="messageBody"
          name="messageBody"
          placeholder="Type message..."
        />

        <Button id="sendMessageBtn" type="submit" value="Submit">
          Send
        </Button>
      </Form>
    </div>
  );
}

export default Messaging;
