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

    let display = this.props.taskList.map((task, idx) => <TodoCard text={task.text} key={idx} id={task.id} deleteTask={this.props.deleteTask} updateStatus={this.props.updateStatus} editTask={this.props.editTask} />)

    return (
      <div className="container todoDisplay">
        {display}
      </div>
    );
  }
}

export default TodoDisplay;
