import React, { useState } from 'react';
import styled from 'styled-components';

export default function TodoForm(props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const date = new Date();
    const newTodo = { title, body, date };
    props.addTodo(newTodo);
    setTitle('');
    setBody('');
  };

  return (
    <StyledTodoForm>
      <h4>Add New Todo</h4>
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
        <input type="submit" value="Add todo" id="submit" />
      </form>
    </StyledTodoForm>
  );
}

const StyledTodoForm = styled.div`
  margin-top: 80px;
  h4 {
    text-align: center;
    opacity: 0.8;
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      border-radius: 4px;
      padding: 10px;
      border: none;
      margin-bottom: 20px;
      outline: none;
    }
    #submit {
      background: #f4511e;
      cursor: pointer;
      color: #fff;
      font-size: 1.3rem;
    }
  }
`;
