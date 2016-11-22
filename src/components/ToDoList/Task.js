import React from 'react';


class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="task">
        <a href="#" className="task-checkbox">BOX</a>
        <span className="task-text">{this.props.text}</span>
      </li>
    );
  }
}

export default Task;