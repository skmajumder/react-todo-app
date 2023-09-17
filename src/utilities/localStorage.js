const getStoredTasks = () => {
  let savedTasks = [];
  const storedTasks = localStorage.getItem("react-todo.tasks");
  storedTasks && (savedTasks = JSON.parse(storedTasks));
  return savedTasks;
};

const addToLocal = (task) => {
  const savedTasks = getStoredTasks();

  if (savedTasks) {
    if (savedTasks.includes(task) !== true) {
      savedTasks.push(task);
    } else {
      return;
    }
  } else {
    savedTasks = [task];
  }

  localStorage.setItem("react-todo.tasks", JSON.stringify(savedTasks));
};
export { getStoredTasks, addToLocal };
