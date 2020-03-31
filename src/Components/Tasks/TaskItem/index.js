import React, { useContext } from 'react';
import { TaskContext } from '../../../Contexts/TaskContext';

const TaskItem = ({task}) => {
    const {id, title, description, priority, minutes, seconds} = task;
    const { removeTask, setComplete } = useContext(TaskContext);
    
    return (
        <li className={"task-item " + priority} key={id} >
            <div className="content">
                <p>{title}</p>
                {
                    minutes && seconds ? 
                        <span className="estimation">estimate time : {minutes} mins {seconds} s</span>
                    :
                        <span className="estimation-empty"></span>
                }
            </div>
            <div className="action">
                <button onClick={() => setComplete(id)}>done</button>
                <button onClick={() => removeTask(id)}>delete</button>
            </div>
        </li>
    );
}
 
export default TaskItem;