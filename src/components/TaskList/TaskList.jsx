import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, onDeleteTask, onToggleTaskStatus, enterEditMode }) => {
    return (
        <ul className={styles.tasks}>
            {
                tasks.sort((a, b) => b.id - a.id).map((task) => <TaskItem key={task.id} task={task} onDeleteTask={onDeleteTask} onToggleTaskStatus={onToggleTaskStatus} enterEditMode={enterEditMode} />)
            }
        </ul>
    );
};

export default TaskList;