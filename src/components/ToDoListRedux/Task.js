import React from 'react';


class Task extends React.Component {
  constructor(props) {
    super(props);

    this.onBtnDelClick = this.onBtnDelClick.bind(this);
  }

  render() {
    return (
      <li className="task">
        <button className="btn btn-xs btn-danger" onClick={this.onBtnDelClick}>X</button>
        <span className="task-text">{this.props.text}</span>
      </li>
    );
  }

  onBtnDelClick(e) {
    this.props.delTaskCB(this.props.id);
  }
}

export default Task;