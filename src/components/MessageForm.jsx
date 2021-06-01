import React, { useState } from 'react';

function MessageForm() {
  const [content, setContent] = useState('');

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(content);
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
