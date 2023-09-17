import toast, { Toaster } from "react-hot-toast"
import CustomForm from "./components/CustomForm/CustomForm"
import { useEffect, useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import EditForm from "./components/EditForm/EditForm";

const taskAddNotify = () => toast.success('New Task Successfully Added');
const taskDeleteNotify = () => toast('Task Delete Successfully', { icon: '🗑️', });

function App() {
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

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
    setTasks(prevTasks => [...prevTasks, newTask]);
    taskAddNotify();

    /**
     * !Important: resource will not be really updated on the server but it will be faked as if.
     */
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({ ...newTask }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

  }

  /** 
   * * Delete tasks from the list of tasks
   * */
  function deleteTask(id) {
    setTasks(prevTasks => prevTasks.filter(t => t.id !== id));

    /*
      !Important: resource will not be really updated on the server but it will be faked as if. 
     */
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    });

    taskDeleteNotify();
  }

  /** 
   * * Toggle task status
   * */
  function toggleTaskStatus(id, currentStatus) {

    setTasks(
      prevTasks => prevTasks.map(
        task => task.id === id ?
          { ...task, completed: !task.completed }
          : task
      )
    )

    /*
      !Important: resource will not be really updated on the server but it will be faked as if. 
     */
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        completed: currentStatus
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => json)
  }

  const updateTask = (task) => {
    setTasks(prevTasks => prevTasks.map(t => (
      t.id === task.id
        ? { ...t, title: task.title }
        : t
    )))
  }

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {
        isEditing && <EditForm />
      }
      <CustomForm onAddTask={addTask} tasks={tasks} />
      {tasks && <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleTaskStatus={toggleTaskStatus} />}
      <Toaster />
    </div>
  )
}

export default App
