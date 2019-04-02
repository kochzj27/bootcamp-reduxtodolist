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
    // console.log('TD TL:', this.props.taskList)
    let display = this.props.taskList.map((task, idx) => <TodoCard active={task.active} text={task.text} key={idx} id={task.id} deleteTask={this.props.deleteTask} updateStatus={this.props.updateStatus} editTask={this.props.editTask} setEditId={this.props.setEditId} editId={this.props.editId} />)

    return (
      <div className="container todoDisplay">
        {display}
      </div>
    );
  }
}

export default TodoDisplay;
