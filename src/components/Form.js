import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';

import Popup from './Popup';

function Form() {

    const [task, setTask] = useState('');
    const [dataTask, setDataTask] = useContext(TaskContext)

    const taskValue = (e) => {
        setTask(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        setTask('');
        addTask(task);
    }

    const addTask = (task) => {
        const getDate = new Date();
        if (task === '') {
            Popup('Fill Data 🖐');
        } else {
            const copy = [...dataTask];
            copy.push({
                task: task,
                status: "primary",
                date: getDate.toDateString(),
                id: Date.now()
            });
            Popup('Added 👆');
            localStorage.setItem('data', JSON.stringify(copy));
            setDataTask(copy);
        };
    }


    return (
        <div className="form">
            <form action="" onSubmit={handleClick}>
                <input type="text"
                    name="task"
                    placeholder="Write Your Task"
                    value={task}
                    autoComplete="off"
                    onChange={(e) => taskValue(e)}
                />
                <button type="submit">Create it!</button>
            </form>
        </div>

    );
}

export default Form;
