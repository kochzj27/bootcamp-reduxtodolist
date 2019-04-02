import React, { Component } from 'react';
import './AppContainer.css';
import TodoForm from '../TodoForm/TodoForm';
import TodoDisplay from '../TodoDisplay/TodoDisplay';

class AppContainer extends Component {
  render() {
    return (
      <div className="container appContainer">
        <h1>Todo List Application</h1>
        <hr />
        <TodoForm />
        <hr />
        <TodoDisplay />
        <br />
      </div>
    );
  }
}

export default AppContainer;
