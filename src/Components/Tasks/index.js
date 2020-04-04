import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskContextProvider from '../../Contexts/TaskContext';

const TaskContainer = () => {
    return ( 
        <section id="task-container">
            <TaskContextProvider>
                <TaskList></TaskList>
                <TaskForm></TaskForm>
            </TaskContextProvider>
        </section>
    );
}
 
export default TaskContainer;