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
    <div>
      <h1>Things to do</h1>
      <Todo todos={todos} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}
