import { useState, useEffect, useRef } from "react";
import { Chatbot } from "supersimpledev";

//input component
function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    //user input message
    if (inputText.trim() === "") return; //ignore empty messages
    const newUserMessage = {
      key: crypto.randomUUID(),
      message: inputText,
      sender: "user",
    };

    //get response from chatbot
    const response = Chatbot.getResponse(inputText);
    const botMessage = {
      key: crypto.randomUUID(),
      message: response,
      sender: "robot",
    };

    //updating the state variable for both user input and chatbot
    setChatMessages([...chatMessages, newUserMessage, botMessage]);

    setInputText(""); //clear the input box
  }

  return (
    <div className="input-container">
      <input
        placeholder="Send text to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="input-box"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}

export default ChatInput;
