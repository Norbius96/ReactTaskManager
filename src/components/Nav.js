import React from 'react';

import DarkModeSwitch from './DarkModeSwitch';
import Form from './Form';
import '../styles/nav.css';

function Nav() {
    return (
        <nav>
            <div className="logo">
                <h1>Your Tasks</h1>
            </div>
            <Form />
            <DarkModeSwitch />
        </nav>
    );
}

export default Nav;
