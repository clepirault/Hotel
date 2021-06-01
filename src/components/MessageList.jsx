import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MessageItem from './MessageItem';

function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/messages')
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => console.error(error));
  }, []); // componentDidMount

  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>
          <MessageItem id={message.id} content={message.content} />
        </li>
      ))}
    </ul>
  );
}

export default MessageList;
