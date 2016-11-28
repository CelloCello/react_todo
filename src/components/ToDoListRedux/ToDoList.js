import React from 'react';
import Input from './Input';
import TaskList from './TaskList';


const ToDoList = ({
  onAddTask,
  onDelTask,
  tasks
}) => (
  <div>
    <Input onAddTask={onAddTask} />
    <TaskList tasks={tasks} onDelTask={onDelTask} />
  </div>
);


export default ToDoList;