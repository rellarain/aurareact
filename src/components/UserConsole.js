import React from 'react';

export default function UserConsole() {return (
    <div id='userConsole' className='userConsoleState userConsoleOpen'>
        {/* adminConsoleState userConsoleState     userConsoleOpen userConsoleClosed */}
        <div id='userConsoleProgress'></div>
        <div id='userConsoleClose'></div>
        <div id='userConsoleSidebar'>
            <div></div>
            <div></div>
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

// To-Do List: 
// - Create separate JS files for each level of user (visitorConsoles, memberConsoles, scholarConsoles, adminConsoles)
// - Create styling framework that works for all consoles
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
