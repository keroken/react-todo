import React from 'react';
import './Todo.css';

const Todo = ({key, todo, toggleTodo, deleteTodo}) => {
  return (
    <li className="list__todo" key={key}>
      <span
        className={todo.done ? 'done':null}
        onClick={() => toggleTodo(todo)}
      >{todo.text}</span>
      <button onClick={() => deleteTodo(todo)}>X</button>
    </li>
  );
};

export default Todo;