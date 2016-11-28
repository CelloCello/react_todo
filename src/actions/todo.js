let taskID = 0;

const actAddTask = (content) => ({
  type: 'ADD_TASK',
  id: taskID++,
  content   // 等於 content: content
});

const actDelTask = (id) => ({
  type: 'DEL_TASK',
  id    // 等於 id: id
});

export { actAddTask, actDelTask };