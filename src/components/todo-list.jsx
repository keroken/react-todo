import React from 'react';
import './todo-list.css';

const TodoList = ({todos}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <li key={todo.key}>{todo.text}</li>
        );
      })}
    </ul>
  );
};

export default TodoList;