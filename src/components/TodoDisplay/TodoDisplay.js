import React, { Component } from 'react';
import { deleteTask, updateStatus, editTask } from '../../redux';
import { connect } from 'react-redux';
import TodoCard from '../TodoCard/TodoCard';

import './TodoDisplay.css';

class TodoDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    // console.log(this.props)
    // console.log('TD TL:', this.props.taskList)
    let display;
    if (this.props.taskList && this.props.taskList.length > 0) {
      display = this.props.taskList.map((task, idx) => <TodoCard active={task.active} text={task.text} key={idx} id={task.id} deleteTask={this.props.deleteTask} updateStatus={this.props.updateStatus} editTask={this.props.editTask} />)
    }
    return (
      <div className="container todoDisplay">
        {display}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  taskList: state.tasks,
})

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (id) => dispatch(deleteTask(id)),
  updateStatus: (id) => dispatch(updateStatus(id)),
  editTask: (id, value) => dispatch(editTask(id, value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDisplay);
