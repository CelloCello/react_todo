import React from 'react';
import Input from './Input';
import TaskList from './TaskList';


class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.onAddTask = this.onAddTask.bind(this);
    
    this.state = {
      tasks: []
    };
  }

  render() {
    return (
      <div className="todo-list">
        <Input onAddTask={this.onAddTask}/>
        <TaskList tasks={this.state.tasks}/>
      </div>
    );
  }

  onAddTask(taskText) {
    this.state.tasks.push(taskText);
    this.setState({tasks: this.state.tasks});
  }
}

export default ToDoList;