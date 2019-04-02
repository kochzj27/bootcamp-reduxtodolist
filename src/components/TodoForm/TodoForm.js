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
      <div className="todoForm">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">New Task</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter new task text" />
            <small id="emailHelp" class="form-text text-muted">You can always delete a task later by clicking the trashcan.</small>
          </div>

          <button type="submit" class="btn btn-primary"><i class="fas fa-plus-circle"></i> Add Task</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
