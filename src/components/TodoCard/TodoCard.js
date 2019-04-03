import React, { Component } from 'react';
import './TodoCard.css';

class TodoCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editFlag: false,
      task: this.props.text,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.task !== nextProps.text && prevState.editFlag === false) {
      return {
        task: nextProps.text
      };
    }

    // Return null to indicate no change to state.
    return null;
  }

  handleSubmit = (event) => {
    console.log('handle submit', this.state.task)
    event.preventDefault();
    this.props.editTask(this.props.id, this.state.task);
    this.setState({
      editFlag: false
    });
  }

  editClick = () => {
    this.setState({
      editFlag: true,
    })
  }

  updateTask = (event) => {
    console.log(event.target.value);
    this.setState({
      task: event.target.value,
    });
  }

  render() {
    // console.log('TC TL:', this.props);
    return (
      <div className="card card-margin">
        {/* {console.log('state', this.state)} */}
        {/* {console.log('id', this.props.id)} */}
        {!this.state.editFlag ?
          <div className="card-body spaced">
            <i className="fas fa-edit" style={{ fontSize: '18pt' }} onClick={this.editClick}></i>
            <div onClick={() => this.props.updateStatus(this.props.id)}><span className={`card-text ${this.props.active ? '' : 'striked'}`}>{this.props.text}</span></div>
            <i className="fas fa-trash-alt" onClick={() => this.props.deleteTask(this.props.id)} style={{ fontSize: '18pt' }} ></i>
          </div>
          :
          <div className="card-body spaced">
            <form className="todoEditForm" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="editTask">Edit Task</label>
                <input type="text" className="form-control" id="editTask" name='editTask' aria-describedby="taskHelp1" placeholder="Enter new task text" onChange={this.updateTask} defaultValue={this.state.task} />
                <small id="taskHelp1" className="form-text text-muted">Click the checkmark to submit changes.</small>
              </div>
              <button type="submit" className="btn btn-dark" disabled={this.state.task === ''}><i className="fas fa-check" style={{ fontSize: '18pt' }} ></i></button>
            </form>
          </div>
        }
      </div >
    )
  }
}

export default TodoCard;