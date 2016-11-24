import React from 'react';
import Task from './Task';


class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task-list">
        <ul>
          {
            // this.props.tasks.map((task, index) =>
            //   <Task text={task} key={index}/>
            // )

            Object.keys(this.props.tasks).map((idx) => 
              <Task text={this.props.tasks[idx]} key={idx} id={idx} delTaskCB={this.props.delTaskCB} />
            )
          }
        </ul>        
      </div>
    );
  }
}

export default TaskList;