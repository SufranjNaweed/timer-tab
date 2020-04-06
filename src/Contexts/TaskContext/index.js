import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    
    const [tasks, setTask] = useState([
        { id : 1, complete: false, title : 'Save the world again', description : '', priority: 'high', minutes: 2, seconds : 30 },
        { id : 2, complete: false, title : 'Buy Bread', description : '', priority: 'low', minutes: '', seconds : '' },
        { id : 3, complete: false, title : 'do some push ups', description : '', priority: 'medium', minutes: '', seconds : '' },
    ]);

    const [isOpenModal, setIsOpenModal] = useState(false);

    const addTask = (title, description, priority, minutes, seconds) => {  
        setTask([...tasks, 
            {
                id: uuidv4(),
                complete: false,
                title,
                description, 
                priority,
                minutes,
                seconds  
            }
        ]);
        toast.info("🔥 A new task has been added ! 🔥", {autoClose : 3000, position: toast.POSITION.BOTTOM_CENTER});
    }

    const removeTask = (id) => {
        setTask(tasks.filter(task => task.id !== id));
        toast.success("Your task has been removed ! 🚀", {autoClose : 3000, position: toast.POSITION.BOTTOM_CENTER});
    }

    const setComplete = (id) => {
        let TaskToUpdate = tasks.filter(task => task.id === id );
        // because filter return a array
        TaskToUpdate = TaskToUpdate[0];
        // set it to complete
        TaskToUpdate.complete = !TaskToUpdate.complete;
        // get other task
        const filteredTask = tasks.filter(task => task.id !== id);
        // put the updated task
        setTask([...filteredTask, TaskToUpdate]);

        toast.info("✔️ Nice work ! Keep up ! 😊", {autoClose : 3000, position: toast.POSITION.BOTTOM_CENTER});
    }

    const  toggleVisibilityModal = () => {
        setIsOpenModal(!isOpenModal);
    }
    return (
        <TaskContext.Provider value={{tasks, addTask, removeTask, setComplete, isOpenModal, toggleVisibilityModal}} >
            <ToastContainer />
            { props.children }
        </TaskContext.Provider>
    )
}

export default TaskContextProvider;