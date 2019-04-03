import React, { Component } from 'react';

import TodoForm from '../TodoForm/TodoForm';
import TodoDisplay from '../TodoDisplay/TodoDisplay';


import './AppContainer.css';

/*
create 1, delete 1, view and edit and update 1, view all

*/
class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // nextId: 2,
      //editId: null,
      // tasks: [
      //   { id: 0, text: "Task 1", active: true },
      //   { id: 1, text: "Task 2", active: false },
      // ]
    }

  }


  // deleteTask = (id) => {
  //   // console.log('delete id:', id);
  //   let idx = this.state.tasks.findIndex((element) => { return element.id === id });
  //   if (this.state.tasks.length === 1) {
  //     this.setState({
  //       tasks: [],
  //     });
  //   } else {
  //     this.setState({
  //       tasks: [...this.state.tasks.slice(0, idx), ...this.state.tasks.slice(idx + 1)]
  //     });
  //   }
  // }

  // addTask = (task) => {
  //   let newTask = Object.assign({ id: this.state.nextId, text: task, active: true });
  //   this.setState({
  //     tasks: [...this.state.tasks, newTask],
  //     nextId: this.state.nextId + 1,
  //   });
  // }

  // editTask = (id, text) => {
  //   // console.log('edit', id, text);
  //   let idx = this.state.tasks.findIndex((element) => { return element.id === id });
  //   // console.log(idx);
  //   if (idx === 0) {
  //     this.setState({
  //       tasks: [Object.assign({}, this.state.tasks[idx], { text }), ...this.state.tasks.slice(idx + 1)],
  //       editId: null
  //     })
  //   } else {
  //     this.setState({
  //       tasks: [...this.state.tasks.slice(0, idx),
  //       Object.assign({}, this.state.tasks[idx], { text })
  //         , ...this.state.tasks.slice(idx + 1)],
  //       editId: null
  //     });
  //   }
  // }

  // updateStatus = (id) => {
  //   // for 1 task
  //   // console.log('update', id);
  //   let idx = this.state.tasks.findIndex((element) => { return element.id === id });
  //   // console.log(idx);
  //   let newStatus = !this.state.tasks[idx].active;
  //   if (idx === 0) {
  //     this.setState({
  //       tasks: [Object.assign({}, this.state.tasks[idx], { active: newStatus }), ...this.state.tasks.slice(idx + 1)]
  //     })
  //   } else {
  //     this.setState({
  //       tasks: [...this.state.tasks.slice(0, idx),
  //       Object.assign({}, this.state.tasks[idx], { active: newStatus })
  //         , ...this.state.tasks.slice(idx + 1)]
  //     });
  //   }
  // }


  // setEditId = (id) => {
  //   this.setState({
  //     editId: id,
  //   })
  // }

  render() {
    //console.log('state', this.state)
    //console.log('props', this.props);
    return (
      <div className="container appContainer">
        <br />
        <h1>Todo List Application</h1>
        <hr />
        <TodoForm addTask={this.addTask} />
        <hr />
        <TodoDisplay taskList={this.state.tasks} deleteTask={this.deleteTask} editTask={this.editTask} updateStatus={this.updateStatus} />
        <br />
      </div>
    );
  }
}

export default AppContainer;
