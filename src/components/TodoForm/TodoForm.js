import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, updateNewTaskValue } from '../../redux';
import './TodoForm.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  // updateValue = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTask()
  }

  render() {
    console.log(this.props.tasks)
    return (
      <div className="container">
        <form className="todoForm" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="newTask">New Task</label>
            <input type="text" className="form-control" id="newTask" name='newTask' aria-describedby="taskHelp" placeholder="Enter new task text" onChange={(e) => this.props.updateNewTaskValue(e.target.value)} value={this.props.newTaskValue} />
            <small id="taskHelp" className="form-text text-muted">You can toggle a completed task by clicking on it, edit by clicking the edit icon and delete tasks by clicking the trash can icon.</small>
          </div>

          <button type="submit" className="btn btn-dark" ><i className="fas fa-plus-circle"></i> Add Task</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  newTaskValue: state.newTaskValue
})

const mapDispatchToProps = (dispatch) => ({
  addTask: (id) => dispatch(addTask(id)),
  updateNewTaskValue: (value) => dispatch(updateNewTaskValue(value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
