import React from 'react';
import Todo from './Todo';
import './List.css';

const List = ({todos, toggleTodo, deleteTodo}) => {
  const todoList = todos.map((todo) => {
    return (
      <Todo 
        key={todo.id}
        todo={todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    );
  });

  return (
    <ul className="list__container">
      {todoList}
    </ul>
  );
};

export default List;