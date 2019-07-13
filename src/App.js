import React, { Component } from 'react';
import TodoInput from './components/todo-input';
import TodoList from './components/todo-list';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      input: { text:'', key:'', done:false },
    };
  }

  addTodo = () => {
    const {input} = this.state;
    if (input !=='') {
      const todos = [...this.state.todos, input];
      this.setState({
        todos: todos,
        input: { text:'',key:'', done:false }
      });
    }
  }

  handleChange = (e) => {
    const inputText = e.target.value;
    const input = { text: inputText, key: Date.now(), done: false };
    this.setState({input: input});
  }

  keyPress = (e) => {
    if(e.keyCode === 13) {
      this.addTodo();
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Todo</h1>
        </header>
        <TodoInput handleChange={this.handleChange} keyPress={this.keyPress} inputText={this.state.input.text}/>
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
          
      </div>
    );
  }
}

export default App;
