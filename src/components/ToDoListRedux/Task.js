import React from 'react';


// const Task = ({
//   task,
//   id,
//   onDelTask
// }) => (
//   <li className="task" style={{textDecoration: task.done ? 'line-through' : 'none'}}>
//     <button className="btn btn-xs btn-danger" onClick={onDelTask}>X</button>
//     <span className="task-text">{task.content}</span>
//   </li>
// );

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.onBtnDelClick = this.onBtnDelClick.bind(this);
  }

  render() {
    return (
      <li className="task" style={{textDecoration: this.props.task.done ? 'line-through' : 'none'}}>
        <button className="btn btn-xs btn-danger" onClick={this.onBtnDelClick}>X</button>
        <span className="task-text">{this.props.task.content}</span>
      </li>
    );
  }

  onBtnDelClick(e) {
    this.props.onDelTask(this.props.id);
  }
}

export default Task;