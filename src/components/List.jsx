import React from 'react';
import Todo from './Todo';
import './List.css';

const List = ({todos, toggleTodo, deleteTodo}) => {
  const todoList = todos.map((todo, index) => {
    return (
      <Todo 
        key={index}
        todo={todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    );
  });

  return (
    <ul className="todo-list">
      {todoList}
    </ul>
  );
};

export default List;