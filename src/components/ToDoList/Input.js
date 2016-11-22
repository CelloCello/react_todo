import React from 'react';


class Input extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.onAddTask = this.onAddTask.bind(this);
  }

  render() {
    return (
      <div className="form-group add-task">
        <input type="text" className="form-control" onKeyPress={this.onAddTask} ref="taskInput" 
        placeholder="input your to-do task"/>
      </div>
    );
  }

  onAddTask(e) {
    if (e.key === 'Enter') {
      // alert(e.target.value);
      // alert(this.refs.taskInput.value);
      this.props.onAddTask(e.target.value);
      e.target.value = '';
    }
  }
}

export default Input;