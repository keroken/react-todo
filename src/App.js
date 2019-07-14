import React, { Component } from 'react';
import Input from './components/Input';
import List from './components/List';
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
    const {todos, input} = this.state;
    if (input.text !=='') {
      const newTodos = todos.slice();
      newTodos.push(input);
      this.setState({
        todos: newTodos,
        input: { text:'',key:'', done:false }
      });
    }
  }

  handleChange = (e) => {
    const inputText = e.target.value;
    const input = { text: inputText, key: Date.now(), done: false };
    this.setState({input});
  }

  keyPress = (e) => {
    if(e.keyCode === 13) {
      this.addTodo();
    }
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
          <h1>React Todo</h1>
        </header>
        <Input
          handleChange={this.handleChange}
          keyPress={this.keyPress}
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
