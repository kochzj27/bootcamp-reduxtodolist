import React, { Component } from 'react';
import './TodoDisplay.css';
import TodoCard from '../TodoCard/TodoCard';

class TodoDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="container todoDisplay">

        <TodoCard task='test task' />
        <TodoCard task='test task' />
        <TodoCard task='test task' />
        <TodoCard task='test task' />

      </div>
    );
  }
}

export default TodoDisplay;
