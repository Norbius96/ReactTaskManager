import React from 'react';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function TaskItem({ task, status, index, changeStatus, deleteTask, data }) {

    return (
        <div
            className={"task " + status}
            id={"task-" + index}
            onClick={changeStatus}
        >
            <p>{data}</p>
            <h1>{task}</h1>
            <div className="icons" onClick={deleteTask}>
                <FontAwesomeIcon icon={faTrashAlt} />
            </div>
        </div>
    );
}

export default TaskItem;
