import React from 'react';
import Task from './Task'


class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task-list">
        <ul>
          {
            this.props.tasks.map((task, index) =>
              <Task text={task} key={index}/>
            )
          }
        </ul>        
      </div>
    );
  }
}

export default TaskList;