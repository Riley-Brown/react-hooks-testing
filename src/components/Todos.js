import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';

export default function Todo() {
  const [state, setState] = useState({
    todos: [],
    working: 'testing 123'
  });
  useEffect(() => {
    console.log(state);
  });
  return (
    <div>
      <h1>Things to do</h1>
      <TodoForm />
    </div>
  );
}
