import { useState } from "react"

export default function NewTask({onAdd}){
    const [enteredTask,setEnteredTask] = useState();

    function handleChange(event){
        setEnteredTask(event.target.value);
    }

    function handleClick(){
        if(enteredTask.trim() === ""){
            return;
        }
        onAdd(enteredTask);
        setEnteredTask("");
    }

    return <div className="d-flex align-items-center">
        <input type="text" onChange={handleChange} value={enteredTask} className="w-50 py-1 rounded me-2" />
        <button onClick={handleClick} className="btn btn-dark">Add Task</button>
    </div>
}