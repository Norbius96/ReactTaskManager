import React, { useEffect, useContext } from 'react';
import { TaskContext } from './TaskContext';
import Popup from './Popup';

import '../styles/taskList.css';
import '../styles/popup.css';
import TaskItem from './TaskItem';

function TaskList() {
    const [dataTask, setDataTask] = useContext(TaskContext);

    useEffect(() => {
        tasks();
    }, []);

    const tasks = () => {
        let dataValue = JSON.parse(localStorage.getItem('data'));
        if (dataValue === null) {
            dataValue = [{
                task: "Have Fun with my TaskManager ✨",
                status: "success"
            }];
            localStorage.setItem('data', JSON.stringify(dataValue));
        }
        setDataTask(dataValue);
    }

    const changeStatus = (index) => {
        const copyTask = [...dataTask];
        if (copyTask[index].status === 'success') {
            copyTask[index].status = 'primary';
            Popup('To do ✨');
        } else {
            copyTask[index].status = 'success';
            Popup('It\'s done 🔥');
        }
        setDataTask(copyTask);
        localStorage.setItem('data', JSON.stringify(copyTask));
    }

    const deleteTask = (index) => {
        const copyTask = [...dataTask];
        setTimeout(() => {
            copyTask.splice(index, 1);
            setDataTask(copyTask);
            localStorage.setItem('data', JSON.stringify(copyTask));
        }, 300);
    }

    return (

        dataTask.map((task, index) => (
            <TaskItem
                key={task.id}
                task={task.task}
                status={task.status}
                index={index}
                changeStatus={() => changeStatus(index)}
                deleteTask={() => deleteTask(index)}
                data={task.date}
            />
        )).reverse()

    )

}

export default TaskList;
