
function addTask(action) {
  return {
    id: action.id,
    done: false,
    content: action.content
  };
}

// 這邊先做成更改旗標而不是刪除
function delTask(task, action) {
  if (task.id != action.id) return task;
  return {
    id: action.id,
    done: true,
    content: action.content
  }
}


const rdcTodo = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        addTask(action)
      ];

    case 'DEL_TASK':
      return state.map((task) =>
        delTask(task, action)
      );

    default:
      return state;
  }
};


export default rdcTodo;