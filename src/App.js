import React, { Component } from 'react';
import Input from './components/Input';
import List from './components/List';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      input: { text:'', id:'', done:false },
    };
  }

  addTodo = (e) => {
    e.preventDefault();
    const {todos, input} = this.state;
    if (input.text !=='') {
      const newTodos = todos.slice();
      newTodos.push(input);
      this.setState({
        todos: newTodos,
        input: { text:'',id:'', done:false }
      });
    }
  }

  handleChange = (e) => {
    const {value} = e.target;
    const input = { text: value, id: Date.now(), done: false };
    this.setState({input});
  }

  deleteTodo = (todo) => {
    const {todos} = this.state;
    const index = todos.indexOf(todo);
    if (index > -1) {
      let newTodos = todos.slice();
      newTodos.splice(index,1);
      this.setState({todos: newTodos});
    }
  }

  toggleTodo = (todo) => {
    const {todos} = this.state;
    const index = todos.indexOf(todo);
    if (index > -1) {
      let newTodos = todos.slice();
      todo.done = !todo.done;
      newTodos.splice(index,1,todo);
      this.setState({todos: newTodos});
    }
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="app-title">React Todo</h1>
        </header>
        <Input
          addTodo={this.addTodo}
          handleChange={this.handleChange}
          inputText={this.state.input.text}
        />
        <List
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
        />
          
      </div>
    );
  }
}

export default App;
