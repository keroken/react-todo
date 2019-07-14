import React from 'react';
import './Input.css';

const Input = ({handleChange,keyPress,inputText}) => {
  return (
    <input type="text"
      onChange={handleChange}
      onKeyDown={keyPress}
      value={inputText}
    />
  );
};

export default Input;