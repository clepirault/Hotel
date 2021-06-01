/* eslint-disable react/prop-types */
import React from 'react';

function MessageItem({ id, content }) {
  return (
    <div>
      <span>Identifiant: {id}</span>
      <br />
      <span>Texte: {content}</span>
    </div>
  );
}

export default MessageItem;
