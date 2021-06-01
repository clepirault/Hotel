import axios from 'axios';
import React, { useState } from 'react';

function MessageForm() {
  const [content, setContent] = useState('');

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8000/messages', {
        // eslint-disable-next-line object-shorthand
        content: content,
      })
      .then((response) => {
        alert(JSON.stringify(response.data));
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="content">
          <span>Contenu:</span>
          <br />
          <textarea id="content" value={content} onChange={handleChange} />
        </label>
        <br />
        <input type="submit" value="Envoyer" />
      </fieldset>
    </form>
  );
}

export default MessageForm;
