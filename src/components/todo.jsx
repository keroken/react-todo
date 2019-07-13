import React from 'react';
import './todo.css';

const Todo = ({todo,removeTodo,i}) => {
  return (
    <li key={i} onClick={e => removeTodo(i)}>{todo}</li>
  );
};

export default Todo;