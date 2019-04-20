import React from 'react';

export default function TodoForm() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Body" />
        <input type="submit" value="Add todo" />
      </form>
    </div>
  );
}
