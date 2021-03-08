import { useRouteMatch } from "react-router";
import MessageViewer from "./MessageViewer";
import Messaging from "./Messaging";

const MessagesPage = () => {
  let match = useRouteMatch();

  return (
    <div className="messages-page">
      { match.params.contact ?
        <MessageViewer contact={match.params.contact} /> :
        <MessageViewer />
      }
      <Messaging contact={match.params.contact}/>
    </div>
  );
};

export default MessagesPage;
