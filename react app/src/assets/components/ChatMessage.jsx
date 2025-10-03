import userProfile from "../images/user.png";
import robotProfile from "../images/robot.png";

//message component : U CAN USE PROPS HERE
function ChatMessage({ message, sender }) {
  return (
    <div className={sender === "user" ? "chat-user" : "chat-robot"}>
      {sender === "robot" && (
        <img src={robotProfile} alt="" className="chat-image"></img>
      )}
      <div className="chat-message-text">{message}</div>

      {sender === "user" && (
        <img src={userProfile} alt="" className="chat-image"></img>
      )}
    </div>
  );
}

export default ChatMessage;
