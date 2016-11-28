import { connect } from 'react-redux';
import { actAddTask, actDelTask } from '../actions/todo';


const mapDispatchToProps = (dispatch) => ({
  onAddTask: (e) => {
    dispatch(actAddTask(event.target.value))
  },
  onDelTask: (idx) => {
    dispatch(actDelTask(idx))
  }
});

const ToDoListContainer = connect()();