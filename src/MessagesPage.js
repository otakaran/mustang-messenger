import { useRouteMatch } from "react-router";
import MessageViewer from "./MessageViewer";
import Messaging from "./Messaging";

const MessagesPage = () => {
  let match = useRouteMatch();
  console.log("match: ", match);
  console.log("contact: ", match.params.contact);

  return (
    <div className="messages-page">
      { match.params.contact ?
        <MessageViewer contact={match.params.contact} /> :
        <MessageViewer />
      }
      <Messaging />
    </div>
  );
};

export default MessagesPage;
