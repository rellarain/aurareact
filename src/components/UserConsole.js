import React from 'react';

export default function UserConsole() {
    return (
        <div id='userConsole' className='adminConsoleState userConsoleOpen consoleWithDash'>
            {/* adminConsoleState userConsoleState     userConsoleOpen userConsoleClosed       consoleWithDash consoleWithoutDash*/}
            <div id='userConsoleProgress'></div>
            <div id='userConsoleClose'></div>
            <div id='userConsoleSidebar'>
                <div></div>
                <div>
                    <br/>

                </div>
            </div>
            {/* consoleSidebarOpen consoleSidebarClosed */}
            <div id='userConsoleDesk' className='consoleSidebarClosed'>


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
