import React from 'react';
import './TodoCard.css';

const TodoCard = (props) => {
  return (

    <div className="card card-margin">
      <div className="card-body spaced">
        <i className="fas fa-edit" style={{ fontSize: '18pt' }} onClick={() => props.editTask(props.id)}></i>
        <div onClick={() => props.updateStatus(props.id)}><span className={`card-text ${props.active ? '' : 'striked'}`}>{props.text}</span></div>
        <i className="fas fa-trash-alt" onClick={() => props.deleteTask(props.id)} style={{ fontSize: '18pt' }} ></i>
      </div>
    </div >
  )
}

export default TodoCard;