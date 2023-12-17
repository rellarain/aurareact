import React from 'react';

export default function UserConsole() {
    return (
        <div id='userConsole' className='adminConsoleState userConsoleOpen consoleWithDash'>
            {/* adminConsoleState userConsoleState     userConsoleOpen userConsoleClosed       consoleWithDash consoleWithoutDash*/}
            <div id="userConsoleHead">
                <div></div>
                <div>DESIGNER CONSOLE</div>
                <div></div>
                <div></div>
            </div>
            <div id='userConsoleSidebar'>
                <div></div>
                <div>
                    <br/>

                </div>
            </div>
            {/* consoleSidebarOpen consoleSidebarClosed */}
            <div id='userConsoleDesk' className='consoleSidebarOpen'>

                </div>


        </div>
    )
}




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
