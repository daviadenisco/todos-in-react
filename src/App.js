import React, { Component } from 'react';
import lady from './closeup.JPG';
import './App.css';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // stores what we are passing as a value to our input
      todoList: [],
      // stores every value being passed to our todo list
    }
    this.addTodo = this.addTodo.bind(this);
  }
  // addToDo: changes the state depending on current input value
  // use the this.setState() to change state, it's a method that triggers UI updates
  // clears input field after a submit action is triggered by resetting todo to the initial empty string value
  // Pushes each todo to our array of items after submit
  addTodo( todo ) {
      this.setState( prevState => {
        return { todoList: [...prevState.todoList, todo] }
      });
  }

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={lady} className="App-logo" alt="logo" />
            <h1 className="App-title">Pack for Denver</h1>
          </header>
          <React.Fragment>
            <Form addTodo={this.addTodo} />
            <List data={this.state.todoList} />
          </React.Fragment>
        </div>
      );
    }
  }

export default App;
