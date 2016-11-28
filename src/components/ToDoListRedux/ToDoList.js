import React from 'react';
import Input from './Input';
import TaskList from './TaskList';


class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.addTaskCB = this.addTaskCB.bind(this);
    this.delTaskCB = this.delTaskCB.bind(this);
    
    this.state = {
      tasks: {}  // idx, string
    };

    this.serial = 0;
  }

  render() {
    return (
      <div className="todo-list">
        <Input addTaskCB={this.addTaskCB} />
        <TaskList tasks={this.state.tasks} delTaskCB={this.delTaskCB} />
      </div>
    );
  }

  addTaskCB(taskText) {
    this.serial++;
    this.state.tasks[this.serial] = taskText;
    this.setState({tasks: this.state.tasks});
  }

  delTaskCB(idx) {
    delete this.state.tasks[idx];
    this.setState({tasks: this.state.tasks});
  }
}

export default ToDoList;