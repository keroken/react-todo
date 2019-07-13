import React from 'react';
import './todo-input.css';

const TodoInput = ({handleChange,keyPress,inputText}) => {
  return (
    <input type="text"
      onChange={handleChange}
      onKeyDown={keyPress}
      value={inputText}
    />
  );
};

export default TodoInput;