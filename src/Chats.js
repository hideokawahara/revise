import React from 'react'
import './Chats.css';
import Chat from './Chat'

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="emi"
        message="hello"
        timestamp="40 sec ago"
        profilePic="https://www.pakutaso.com/shared/img/thumb/HW20160702154815_TP_V.jpg"
      />
      <Chat
        name="emi"
        message="hello"
        timestamp="40 sec ago"
        profilePic="https://www.pakutaso.com/shared/img/thumb/0I9A356715032124yuuki2_TP_V.jpg"
      />
      <Chat
        name="emi"
        message="hello"
        timestamp="40 sec ago"
        profilePic="https://www.pakutaso.com/shared/img/thumb/0I9A446615032135gussuri2_TP_V.jpg"
      />
      <Chat
        name="emi"
        message="hello"
        timestamp="40 sec ago"
        profilePic="https://www.pakutaso.com/shared/img/thumb/GREEN_MA20140125_TP_V.jpg"
      />
    </div>
  );
}

export default Chats
