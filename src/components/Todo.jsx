import React from 'react';
import './Todo.css';

const Todo = ({key, todo, toggleTodo, deleteTodo}) => {
  return (
    <li className="list__todo" key={key}>
      <span
        //style={{textDecoration: todo.done ? 'line-through':'none'}}
        className={todo.done ? 'done':null}
        onClick={() => toggleTodo(todo)}
      >{todo.text}</span>
      <button
        className="list__todo--delete-btn"
        onClick={() => deleteTodo(todo)}
      ><i className="btn ion-ios-close-outline"></i></button>
    </li>
  );
};

export default Todo;