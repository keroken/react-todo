import React from 'react';
import './todo.css';

const Todo = ({todo,i}) => {
  return (
    <li key={i}>{todo}</li>
  );
};

export default Todo;