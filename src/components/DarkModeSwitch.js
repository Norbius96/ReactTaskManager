import React from 'react';

import '../styles/darkModeSwitch.css';
import { useState, useEffect } from 'react';

function DarkModeSwitch() {

    const [dark, setDark] = useState('');

    useEffect(() => {
        const darkMode = JSON.parse(localStorage.getItem('dark'));
        if (darkMode === null) {
            localStorage.setItem('dark', false);
        } else {
            setDark(darkMode);
        }
        setTheme(darkMode);
    }, [])


    const setTheme = (theme) => {
        if (theme === true) {

            document.documentElement.setAttribute('data-theme', 'dark');
            document.documentElement.classList.add('theme-transition')
            document.documentElement.setAttribute('data-theme', 'dark')
            window.setTimeout(function () {
                document.documentElement.classList.remove('theme-transition');
            }, 800);

        } else {

            document.documentElement.setAttribute('data-theme', 'light');
            document.documentElement.classList.add('theme-transition')
            document.documentElement.setAttribute('data-theme', 'light')
            window.setTimeout(function () {
                document.documentElement.classList.remove('theme-transition');
            }, 800);

        }

    }

    const changeTheme = () => {
        localStorage.setItem('dark', !dark);
        setTheme(!dark);
        setDark(!dark);
    }

    return (
        <div className="toggle-container">
            <input
                type="checkbox"
                id="switch"
                name="theme"
                onChange={changeTheme}
                checked={dark}
            />
            <label htmlFor="switch">Toggle</label>
        </div>
    )

}

export default DarkModeSwitch;
