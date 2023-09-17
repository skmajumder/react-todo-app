import { Toaster } from "react-hot-toast"
import CustomForm from "./components/CustomForm"

function App() {

  function addTask(task) {
    console.log(task);
  }

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm onAddTask={addTask} />
      <Toaster />
    </div>
  )
}

export default App
