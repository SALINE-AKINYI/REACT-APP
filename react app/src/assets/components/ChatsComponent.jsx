import { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

function ChatsComponent({ chatMessages }) {
  //ref to refer the html element
  const chatsComponentRef = useRef(null);

  useEffect(() => {
    const containerElem = chatsComponentRef.current; // contain html element
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    //ref is used to refer the html element
    <div ref={chatsComponentRef} className="chat-messages-container">
      {chatMessages.map((chatmsg) => {
        return (
          <ChatMessage
            key={chatmsg.key}
            message={chatmsg.message}
            sender={chatmsg.sender}
          />
        );
      })}
    </div>
  );
}

export default ChatsComponent;
