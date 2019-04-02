import React, { useState } from 'react';
import './TodoCard.css';

const TodoCard = (props) => {
  const [task, updateTask] = useState(props.text);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.editTask(props.id, task);
    //
  }

  return (
    <div className="card card-margin">
      {/* {console.log(props)} */}
      {props.id !== props.editId ?
        <div className="card-body spaced">
          <i className="fas fa-edit" style={{ fontSize: '18pt' }} onClick={() => props.setEditId(props.id)}></i>
          <div onClick={() => props.updateStatus(props.id)}><span className={`card-text ${props.active ? '' : 'striked'}`}>{props.text}</span></div>
          <i className="fas fa-trash-alt" onClick={() => props.deleteTask(props.id)} style={{ fontSize: '18pt' }} ></i>
        </div>
        :
        <div className="card-body spaced">
          <form className="todoEditForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="editTask">Edit Task</label>
              <input type="text" className="form-control" id="editTask" name='editTask' aria-describedby="taskHelp1" placeholder="Enter new task text" onChange={(e) => updateTask(e.target.value)} value={task} />
              <small id="taskHelp1" className="form-text text-muted">Click the checkmark to submit changes.</small>
            </div>
            <button type="submit" className="btn btn-dark" disabled={task === ''}><i className="fas fa-check" style={{ fontSize: '18pt' }} ></i></button>
          </form>
        </div>
      }
    </div >
  )
}

export default TodoCard;