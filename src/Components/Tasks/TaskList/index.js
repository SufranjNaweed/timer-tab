import React, { useContext } from 'react';
import { TaskContext } from '../../../Contexts/TaskContext';
import TaskItem from  '../TaskItem';

const TaskList = () => {
    const { tasks } = useContext(TaskContext);

    return ( 
        tasks ? (
            <ul>
                {
                    tasks.map(task => {
                        return (<TaskItem task={task} key={task.id} />)
                    })
                }
            </ul>
        ) : (
            <div> No Todo Left,  yheaaah free time '\o/'</div>
        )
    );
}
 
export default TaskList;