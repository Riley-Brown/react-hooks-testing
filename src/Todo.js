import React from 'react';

export default function Todo(props) {
  console.log(props);
  const todo = props.todos.map(
    todo => (
      console.log(todo),
      (
        <div className="todo">
          <h2>{todo.title}</h2>
          <p>{todo.body}</p>
        </div>
      )
    )
  );
  return todo;
}
