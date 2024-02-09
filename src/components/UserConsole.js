import React from 'react';

export default function UserConsole() {

    const consoleTitle = "Console Title";



    return (
        <div id='userConsole' className='adminConsoleState userConsoleOpen consoleWithDash'>
            {/* adminConsoleState userConsoleState     userConsoleOpen userConsoleClosed       consoleWithDash consoleWithoutDash*/}
            <div id="userConsoleHead">
                <div id='userConsoleTitle'>{consoleTitle}</div>
                <div>
                    <span className='userConsoleTabObject userConsoleTabActive'>
                        <span>Queue Title</span>
                        <span>1235</span>

                    </span>
                    <span className='userConsoleTabObject'>
                        <span>Queue Title</span>
                        <span>112225</span>
                    </span>
                    <span className='userConsoleTabObject'>
                        <span>Queue Title</span>
                        <span>12045</span>
                    </span>
                    <span className='userConsoleTabObject'>
                        <span>Queue Title</span>
                        <span>45</span>
                    </span>
                    <span className='userConsoleTabObject'>
                        <span>Queue Title</span>
                        <span>62</span>
                    </span>
                    <span className='userConsoleTabObject'>
                        <span>Queue Title </span>
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
                <div></div>
                <div> <span></span> </div>
            </div>
            <div id='userConsoleSidebar'>
                <div>For collective consoles, the sidebar shows the wideprofilecards of the management team for that collective<br/></div>
                <div>For assessment console, <br/></div>
                <div>For scholar console, <br/></div>
                <div>For management console, the sidebar is the logbook of all submitted work in that workday<br/></div>
                <div>For blank console, <br/></div>
                <div>For blank console, <br/></div>
                <div>For blank console, <br/></div>
                <div>For blank console, <br/></div>
                <div>For blank console, <br/></div>
                <div>For blank console, <br/></div>
                <div>For blank console, <br/></div>
                <div>For blank console, <br/></div>
                <div>For blank console, <br/></div>
                <div><br/></div>
                <div><br/></div>
                <div><br/></div>
                <div><br/></div>
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
