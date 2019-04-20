import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

export default function Todo(props) {
  console.log(props);
  const todo = props.todos.map(
    (todo, index) => (
      console.log(todo),
      (
        <StyledTodo key={index}>
          <h2>{todo.title}</h2>
          <p>{todo.body}</p>
          <span>
            Added <Moment format={'MMMM DD YYYY'}>{todo.date}</Moment>
          </span>
        </StyledTodo>
      )
    )
  );
  return todo;
}

const StyledTodo = styled.div`
  max-width: 400px;
  margin: auto;
  text-align: center;
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
`;
