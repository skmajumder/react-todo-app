import { useState } from 'react';
import styles from './TaskItem.module.css';

import { CheckIcon } from '@heroicons/react/24/outline';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

const TaskItem = ({ task }) => {
    const [isChecked, setIsChecked] = useState(task.completed);

    function handleCheckboxChange() {
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
                    id={task.id} />
                <label
                    htmlFor={task.id}
                    className={styles.label}>
                    {task.title}
                    <p className={styles.checkmark}>
                        <CheckIcon strokeWidth={2} width={24} height={24} />
                    </p>
                </label>
            </div>
            <div className={styles["task-group"]}>
                <button className='btn' aria-label={`Update ${task.title} Task`}>
                    <PencilSquareIcon width={24} height={24} />
                </button>
                <button className={`btn ${styles.delete}`} aria-label={`Delete ${task.title} Task`}>
                    <TrashIcon width={24} height={24} />
                </button>
            </div>
        </li>
    );
};

export default TaskItem;