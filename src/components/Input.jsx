import React from 'react';
import './Input.css';

const Input = ({addTodo, handleChange,keyPress,inputText}) => {
  return (
    <div className="input__container">
      <form className="input__form" onSubmit={addTodo}>
      <input type="text" className="input__text"
        onChange={handleChange}
        value={inputText}
      />
      <button type="submit" className="btn input__btn"><i className="ion-ios-plus-outline"></i></button>
      </form>
    </div>
    
  );
};

export default Input;