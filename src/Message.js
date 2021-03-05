const Message = ({ msg, index }) => {
  const messageStyle =
    (index + 1) % 2 === 0 ? "container message wht" : "container message grn";

  return (
    <div className={messageStyle} id={msg.id}>
      <div className="message-body">
        <h4>{msg.from}</h4>
        <p>{msg.message}</p>
        <p>{msg.timestamp.toDate().toString()}</p>
      </div>
    </div>
  );
};

export default Message;
