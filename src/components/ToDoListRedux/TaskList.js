import React from 'react';
import Task from './Task';


const TaskList = ({
  onDelTask,
  tasks
}) => (
  <div className="task-list">
    <ul>
      {
        tasks.map(
          (task, idx) => {if (!task.done) {
            return <Task task={task} key={idx} id={idx} onDelTask={onDelTask} />
          }}
        )
      }
    </ul>        
  </div>
);

export default TaskList;