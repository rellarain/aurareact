import React from 'react';

export default function UserConsole() {
    return (
        <div id='userConsole' className='adminConsoleState userConsoleOpen consoleWithDash'>
            {/* adminConsoleState userConsoleState     userConsoleOpen userConsoleClosed       consoleWithDash consoleWithoutDash*/}
            <div id="userConsoleHead">
                <div>
                    <span className='userConsoleTabObject'>
                        <span>Period</span>
                        <span>1235</span>

                    </span>
                    <span className='userConsoleTabObject'>
                        <span>Pooky</span>
                        <span>112225</span>
                    </span>
                    <span className='userConsoleTabObject'>
                        <span></span>
                        <span>12045</span>
                    </span>
                    <span className='userConsoleTabObject'>
                        <span></span>
                        <span>45</span>
                    </span>
                    <span className='userConsoleTabObject'>
                        <span></span>
                        <span>62</span>
                    </span>
                    <span className='userConsoleTabObject'>
                        <span></span>
                        <span></span>
                    </span>
                    <span className='userConsoleTabObject'>
                        <span></span>
                        <span></span>
                    </span>
                    <span className='userConsoleTabObject'>
                        <span></span>
                        <span></span>
                    </span>
                </div>
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
