import React, { useState, useCallback } from 'react';

export default function TodoForm(props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // const handleTitleChange = useCallback(e => setTitle(e.target.value), []);
  // const handleBodyChange = useCallback(e => setBody(e.target.value), []);
  const newTodo = { title, body };

  const handleSubmit = (e, todo) => {
    e.preventDefault();
    props.addTodo(newTodo);
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
          value={title}
          name="Title"
        />
        <input
          type="text"
          placeholder="Body"
          onChange={e => setBody(e.target.value)}
          value={body}
          name="Body"
        />
        <input type="submit" value="Add todo" />
      </form>
    </div>
  );
}
