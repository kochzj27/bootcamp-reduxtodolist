import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div classNameName="container">
        <form className="todoForm">
          <div className="form-group">
            <label for="newTask">New Task</label>
            <input type="text" className="form-control" id="newTask" aria-describedby="taskHelp" placeholder="Enter new task text" />
            <small id="taskHelp" className="form-text text-muted">You can toggle a completed task by double clicking and delete tasks by clicking the trash can.</small>
          </div>

          <button type="submit" className="btn btn-dark"><i className="fas fa-plus-circle"></i> Add Task</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
