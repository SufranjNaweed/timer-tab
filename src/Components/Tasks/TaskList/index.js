import React, { useContext } from 'react';
import { TaskContext } from '../../../Contexts/TaskContext';
import TaskItem from  '../TaskItem';

const TaskList = () => {
    const { tasks } = useContext(TaskContext);

    return ( 
        tasks.length > 0 ? (
            <ul>
                {
                    tasks.map(task => {
                        return (<TaskItem task={task} key={task.id} />)
                    })
                }
            </ul>
        ) : (
            <div className="empty-tasks"> 
                No Tasks Left,  yheaaah free time 🐬 <br />
                Clic down ⬇️ bellow to add new Task ✅
            </div>
        )
    );
}
 
export default TaskList;