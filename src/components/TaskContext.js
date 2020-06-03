import React, { useState, createContext } from 'react';

export const TaskContext = createContext();

export const TaskProvider = (props) => {
    const [dataTask, setDataTask] = useState([]);

    return (
        <TaskContext.Provider value={[dataTask, setDataTask]} >
            {props.children}
        </TaskContext.Provider >
    );
}
