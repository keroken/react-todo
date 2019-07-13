import React from 'react';
import './todo-list.css';
import Todo from './todo';

const TodoList = ({todos}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo,i) => {
        return(
          <Todo todo={todo}/>
        );
      })}
    </ul>
  );
};

export default TodoList;