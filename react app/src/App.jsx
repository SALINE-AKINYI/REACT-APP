import { useState, useEffect, useRef } from "react";
import "./App.css";
import ChatInput from "./assets/components/ChatInput";
import ChatsComponent from "./assets/components/ChatsComponent";

//MAIN function
function App() {
  //the array have been converted to state: to re-render the component
  const array = useState([
    { key: 1, message: "Hello Chatbot", sender: "user" },
    { key: 2, message: "How are you? What can you do?", sender: "robot" },
    { key: 3, message: "Can u get me today's date", sender: "user" },
    { key: 4, message: "Today is 3rd October", sender: "robot" },
  ]);
  const chatMessages = array[0]; //state variable
  const setChatMessages = array[1]; //function to update the state
  //array destructuring can also be used here
  //const [chatMessages, setChatMessages] = useState([...]);

  return (
    <div className="app-container">
      <ChatsComponent
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
