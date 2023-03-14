import React from 'react';

export default function UserConsole() {return (
    // userConsoleWOHD userConsoleWHD
    <div id='userConsole' className='userConsoleWOHD'>
        <div id='userConsoleProgress'></div>
        <ConsoleTitle/>
        <div id='userConsoleClose'></div>
        <div id='userConsoleSidebar'>
            <TeamSchedule/>
            <TeamBdays/>
        </div>
        {/* consoleSidebarOpen consoleSidebarClosed */}
        <div id='userConsoleDesk' className='consoleSidebarOpen'>
            <br/>
            Applications<br/>
            <br/>
            <br/>
            To-Do:<br/>
            - add window actions: pause, close<br/>
            - add tabs for steps in a process<br/>
            - <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        <ConsoleHelp/>
        
        
    </div>
)}


function ConsoleTitle() {return(
    <div id='userConsoleTitle'>
        <span>Console</span>
    </div>
)}

function TeamSchedule() {return(
    <div className=''>
        <img src='' alt=''/>
        <span></span>
    </div>
)}


function TeamBdays() {return(
    <div className=''>
        <img src='' alt=''/>
        <span></span>
    </div>
)}

function ConsoleHelp() {return(
    //  consoleHelpOpen consoleHelpClosed
    <div id='userConsoleHelp' className='consoleHelpClosed'>
        <div id='userConsoleHelpButton'>
            <span>?</span>
            <span>Help</span>
        </div>
        <div id='userConsoleHelpContent'>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    </div>
)}