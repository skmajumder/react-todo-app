import { useState } from "react";
import toast from "react-hot-toast";
const notify = () => toast.success('New Task Successfully Added');

const CustomForm = ({ onAddTask, tasks }) => {
    const [newTask, setNewTask] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();
        onAddTask({
            userId: 1,
            id: tasks.length + 1,
            title: newTask,
            completed: false
        });
        notify();
        setNewTask('');
    }

    return (
        <form className="todo" onSubmit={handleFormSubmit}>
            <div className="wrapper">
                <input type="text" id="task" className="input" value={newTask} onInput={e => setNewTask(e.target.value)} required autoFocus maxLength={60} placeholder="Enter Task" />
                <label htmlFor="task" className="label">Add Task</label>
            </div>
            <button className="btn" aria-label="Add Task" type="submit"> Add </button>
        </form>
    );
};

export default CustomForm;