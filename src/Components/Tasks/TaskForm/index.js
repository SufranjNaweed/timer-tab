import React, {useState ,useContext} from "react";
import { TaskContext } from "../../../Contexts/TaskContext";

const TaskForm = () => {
    const { addTask } = useContext(TaskContext)
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('high');
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    
    const submitTask = (event) => {
        event.preventDefault();
        addTask(title, description, priority, minutes, seconds)
    }

    const changePriority = (e) => {
        setPriority(e.target.value);
    }

    return (
        <form onSubmit={submitTask}>
            <input placeholder="title" onChange={(e) => setTitle(e.target.value)} />
            <input placeholder="description" onChange={(e) => setDescription(e.target.value)} />
            <div className="priority-check">
                <label>
                    <input 
                        type='radio'
                        name='high'
                        value='high'
                        checked={priority === 'high'}
                        className=""
                        onChange={changePriority}
                    />
                    High
                </label>
            </div>
            <div className="priority-check">
                <label>
                    <input 
                        type='radio'
                        name='medium'
                        value='medium'
                        checked={priority === 'medium'}
                        className="" 
                        onChange={changePriority}
                    />
                    Medium
                </label>
            </div>
            <div className="priority-check">
                <label>
                    <input 
                        type='radio'
                        name='low'
                        value='low'
                        checked={priority === 'low'}
                        className="" 
                        onChange={changePriority}
                    />
                    Low
                </label>
            </div>
            <input placeholder="minutes" onChange={(e) => setMinutes(e.target.value)} /> 
            <input placeholder="seconds" onChange={(e) => setSeconds(e.target.value)} /> 
            <input type="submit"  value="submit" />
        </form>
    );
}
 
export default TaskForm;