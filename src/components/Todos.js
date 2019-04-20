import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import Todo from '../Todo';

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    console.log(todos);
  });
  return (
    <StyledTodos>
      <h1>Things to do</h1>
      <Todo todos={todos} />
      <TodoForm addTodo={addTodo} />
    </StyledTodos>
  );
}

const StyledTodos = styled.div`
  max-width: 700px;
  margin: auto;
  margin-top: 10%;
  h1 {
    text-align: center;
  }
`;
