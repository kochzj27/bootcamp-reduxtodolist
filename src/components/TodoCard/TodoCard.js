import React from 'react';
import './TodoCard.css';

const TodoCard = (props) => {
  return (

    <div className="card">
      <div className="card-body spaced">
        <div>{props.task}</div>
        <i class="fas fa-trash-alt" style={{ fontSize: '18pt' }}></i>
      </div>
    </div>
  )
}

export default TodoCard;