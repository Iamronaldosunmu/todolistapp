import { useState } from "react";

function Task({ text, onDeleteTask, id, onEditButtonClick, isBeingEdited, onEdit }) {
    const [editValue, setEditValue] = useState(text)

    return (
        <div>

        {!isBeingEdited && <div className="taskContainer">
            <div>
                <p>{text}</p>
            </div>
            <div className="buttonContainer">
                <button onClick={() => onEditButtonClick(id)}>Edit</button>
                <button onClick={() => onDeleteTask(id)}>Delete</button>
            </div>
            </div>}
            {
                isBeingEdited &&         <div className="inputGroup">
                <input onChange={(e) => setEditValue(e.target.value)} value={editValue} placeholder='What is the task today?' />
                <button onClick={() => onEdit(id, editValue)} className='taskButton'>Edit Task</button>
              </div>
            }
        </div>
    )
}

export default Task;