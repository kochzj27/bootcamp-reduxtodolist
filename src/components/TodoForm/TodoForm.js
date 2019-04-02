import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: '',
    }
  }

  updateValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.newTask)
    this.setState({
      newTask: '',
    })
  }

  render() {
    return (
      <div className="container">
        <form className="todoForm" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="newTask">New Task</label>
            <input type="text" className="form-control" id="newTask" name='newTask' aria-describedby="taskHelp" placeholder="Enter new task text" onChange={this.updateValue} value={this.state.newTask} />
            <small id="taskHelp" className="form-text text-muted">You can toggle a completed task by clicking once, edit by double clicking and delete tasks by clicking the trash can.</small>
          </div>

          <button type="submit" className="btn btn-dark" disabled={this.state.newTask === ''}><i className="fas fa-plus-circle"></i> Add Task</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
