import React, { Component } from 'react';
import TodoInput from './components/todo-input';
import TodoList from './components/todo-list';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todos: [],
      time: new Date(),
    };
  }

  addTodo = () => {
    let {todos, input} = this.state;
    todos = todos.concat(input);
    this.setState({
      todos: todos,
      input: ""
    });
  }

  removeTodo = (i) => {
    let {todos} = this.state;
    todos = todos.slice(0,i).concat(todos.slice(i+1));
    this.setState({
      todos: todos,
      input: ""
    });
  }

  handleChange = (e) => {
    this.setState({input: e.target.value});
  }

  keyPress = (e) => {
    if(e.keyCode === 13) {
      this.setState({input: e.target.value});
      this.addTodo();
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Todo</h1>
        </header>
        <TodoInput handleChange={this.handleChange} keyPress={this.keyPress} inputText={this.state.input}/>
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
          
      </div>
    );
  }
}

export default App;
