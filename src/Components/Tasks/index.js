import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskContextProvider from '../../Contexts/TaskContext';

const TaskContainer = () => {
    return ( 
        <section id="taskContainer">
            <TaskContextProvider>
                <TaskForm></TaskForm>
                <TaskList></TaskList>
            </TaskContextProvider>
        </section>
    );
}
 
export default TaskContainer;