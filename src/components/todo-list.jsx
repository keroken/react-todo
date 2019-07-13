import React from 'react';
import './todo-list.css';
import Todo from './todo';

const TodoList = ({todos, removeTodo}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo,i) => {
        return(
          <Todo todo={todo} removeTodo={removeTodo} />
        );
      })}
    </ul>
  );
};

export default TodoList;