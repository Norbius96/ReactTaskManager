import React from 'react';
import { TaskProvider } from './components/TaskContext'

import Nav from './components/Nav';
import TaskList from './components/TaskList';
import Weather from './components/Weather';
import News from './components/News';
import Photo from './components/Photo'

function App() {
    return (
        <TaskProvider>
            <Nav />
            <div className="App">
                <div id="left">
                    <TaskList />
                </div>
                <div id="right">
                    <Weather />
                    <News />
                    <Photo />
                </div>
            </div>
        </TaskProvider>
    );
}

export default App;
