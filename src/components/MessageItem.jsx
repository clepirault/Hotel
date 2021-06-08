/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useState } from 'react';

function MessageItem({ id, content }) {
  const [newContent, setNewContent] = useState(content);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/messages/${id}`)
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        alert('Deleted');
      })
      .catch((error) => console.error(error.message));
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8000/messages/${id}`, {
        content: newContent,
      })
      .then((response) => alert(`Updated ${JSON.stringify(response)}`))
      .catch((error) => console.error(error.message));
  };

  return (
    <div>
      <span>Identifiant: {id}</span>
      <br />
      <span>Texte: {content}</span>
      <br />
      <button type="button" onClick={handleDelete}>
        Delete {id}
      </button>
      <br />
      <br />
      <form onSubmit={handleUpdate}>
        <textarea
          type="text"
          value={newContent}
          onChange={(event) => setNewContent(event.target.value)}
        />
        <br />
        <input type="submit" value="Update" />
      </form>
      <br />
      <br />
    </div>
  );
}

export default MessageItem;
