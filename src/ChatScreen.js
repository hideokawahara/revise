import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setInput] = useState([])
  const [messages, setmessages] = useState([
    {
      name: "hanako",
      image:
        "https://www.pakutaso.com/shared/img/thumb/GREEN_RA20140125_TP_V.jpg",
      message: "hehehe",
    },
    {
      name: "hanako",
      image:
        "https://www.pakutaso.com/shared/img/thumb/GREEN_RA20140125_TP_V.jpg",
      message: "heheheuuuuuuuu",
    },
    {
      message: "????",
    },
  ]);

  const handleSend = e => {
    e.preventDefault();
    setmessages([...messages, { message: input }]);
    setInput("");
  }

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">マッチしました</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message" key={message.message}>
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message" key={message.message}>
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="type something"
        />
        <button onClick={handleSend} type="submit" className="chatScreen__inputButton">送信</button>
      </form>
    </div>
  );
}

export default ChatScreen
