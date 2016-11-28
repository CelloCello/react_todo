import React from 'react';


const Input = ({
  onAddTask
}) => (
  <div className="form-group add-task">
    <input type="text" className="form-control" onKeyPress={onAddTask} 
    placeholder="input your to-do task"/>
  </div>
);

export default Input;