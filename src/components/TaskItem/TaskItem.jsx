import { useState } from 'react';
import styles from './TaskItem.module.css';
import { CheckIcon } from '@heroicons/react/24/outline';

const TaskItem = ({ task }) => {
    const [isChecked, setIsChecked] = useState(task.completed);

    const handleCheckboxChange = () => {
        setIsChecked(prevValue => !prevValue);
    }

    return (
        <li className={styles.task}>
            <div className={styles['task-group']}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    name={task.title}
                    id={task.id}
                />
                <label
                    htmlFor={task.id}
                    className={styles.label}>
                    {task.title}
                    <p className={styles.checkmark}>
                        <CheckIcon strokeWidth={2} width={24} height={24} />
                    </p>
                </label>
            </div>
        </li>
    );
};

export default TaskItem;