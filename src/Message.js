import { useAuth } from "./fire/AuthContext";

const Message = ({ msg }) => {
  const { currentUser } = useAuth();
  const messageStyle =
    currentUser.email === msg.from
      ? "container message wht"
      : "container message grn";

  return (
    <div className={messageStyle}>
      <div className="message-body">
        <h4>From {msg.from}</h4>
        <h4>To {msg.to}</h4>
        <p>{msg.message}</p>
      </div>
    </div>
  );
};

export default Message;
