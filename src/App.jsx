import toast, { Toaster } from "react-hot-toast"
import CustomForm from "./components/CustomForm/CustomForm"
import { useEffect, useState } from "react";
import TaskList from "./components/TaskList/TaskList";

const taskAddNotify = () => toast.success('New Task Successfully Added');
const taskDeleteNotify = () => toast.success('Task Delete Successfully');

function App() {
  const [tasks, setTasks] = useState([]);

  /** 
   * *Fetch Todos data from jsonplaceholder 
   * */

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  /** 
   * * Add new task to tasks state 
   * */

  function addTask(newTask) {
    /**
     * TODO: Add a task: POST https://jsonplaceholder.typicode.com/todos
     */

    setTasks(prevTasks => [...prevTasks, newTask]);
    taskAddNotify();
  }

  /** 
   * * Delete tasks from the list of tasks
   * */
  function deleteTask(id) {
    setTasks(prevTasks => prevTasks.filter(t => t.id !== id))
    taskDeleteNotify();
  }

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm onAddTask={addTask} tasks={tasks} />
      {tasks && <TaskList tasks={tasks} onDeleteTask={deleteTask} />}
      <Toaster />
    </div>
  )
}

export default App
