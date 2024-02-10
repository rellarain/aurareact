import React, { useState } from 'react';

export default function UserConsole() {

    const consoleTitle = "Console Title";

    const [consoleClosed, setConsoleClosed] = useState(true);
    const [consoleSidebarClosed, setConsoleSidebarClosed] = useState(true);
    const [consoleTabActive, setConsoleTabActive] = useState(true);

    function handleConsoleClosed() {
        setConsoleClosed(!consoleClosed);
        // alert("it worked!");
    }

    function handleConsoleTabClick() {
        setConsoleTabActive(!consoleTabActive)
    }

    function handleConsoleSidebarClosed() {
        setConsoleSidebarClosed(!consoleSidebarClosed);
        // alert("it worked!");
    }


    return (
        <div id='userConsole' className={consoleClosed ? "userConsoleClosed" : "userConsoleOpen"} >
            {/* userConsoleOpen userConsoleClosed*/}
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
                <div onClick={handleConsoleClosed}></div>
                <div> <span></span> </div>
            </div>
            <div id='userConsoleSidebar'>
                <ul>
                    <li>Community Console</li>
                    <li>
                        <span>Community Info Tab</span>
                        <span>Sidebar: wide cards of cluster summaries</span>
                        <span>Desk: management team, </span>
                        <span></span>
                    </li>
                    <li>
                        <span>Roster Tab</span>
                        <span>Sidebar: statistics, </span>
                        <span>Desk: profile cards, </span>
                        <span></span>
                    </li>
                    <li>
                        <span>Forum Tab</span>
                        <span>Sidebar: </span>
                        <span>Desk: </span>
                        <span></span>
                    </li>
                    <li>
                        <span>Bulletin Tab</span>
                        <span>Sidebar: </span>
                        <span>Desk: </span>
                        <span></span>
                    </li>
                </ul>
                <ul>
                    <li>District Console</li>
                    <li>
                        <span>District Info Tab</span>
                        <span>Sidebar: wide cards of community summaries</span>
                        <span>Desk: management team, </span>
                    </li>
                    <li>
                        <span>Roster Tab</span>
                        <span>Sidebar: statistics, </span>
                        <span>Desk: profile cards, </span>
                        <span></span>
                    </li>
                    <li>
                        <span>Forum Tab</span>
                        <span>Sidebar: </span>
                        <span>Desk: </span>
                        <span></span>
                    </li>
                    <li>
                        <span>Bulletin Tab</span>
                        <span>Sidebar: </span>
                        <span>Desk: </span>
                        <span></span>
                    </li>
                </ul>
                <ul>
                    <li>Region Console</li>
                    <li>
                        <span>Region Info Tab</span>
                        <span>Sidebar: wide cards of district summaries</span>
                        <span>Desk: management team, </span>
                    </li>
                    <li>
                        <span>Roster Tab</span>
                        <span>Sidebar: statistics, </span>
                        <span>Desk: profile cards, </span>
                    </li>
                    <li>
                        <span>Forum Tab</span>
                        <span>Sidebar: </span>
                        <span>Desk: </span>
                    </li>
                    <li>
                        <span>Bulletin Tab</span>
                        <span>Sidebar: </span>
                        <span>Desk: </span>
                    </li>
                </ul>
                <ul>
                    <li>Academy Console</li>
                    <li>
                        <span>Academy Info Tab</span>
                        <span>Sidebar: wide cards of region summaries</span>
                        <span>Desk: management team, </span>
                        <span></span>
                    </li>
                    <li>
                        <span>Roster Tab</span>
                        <span>Sidebar: statistics, </span>
                        <span>Desk: profile cards, </span>
                        <span></span>
                    </li>
                    <li>
                        <span>Forum Tab</span>
                        <span>Sidebar: </span>
                        <span>Desk: </span>
                        <span></span>
                    </li>
                    <li>
                        <span>Bulletin Tab</span>
                        <span>Sidebar: </span>
                        <span>Desk: </span>
                        <span></span>
                    </li>
                </ul>
                <ul>
                    <li>Assessment Console</li>
                    <li>Header Tabs: </li>
                    <li>Sidebar: </li>
                    <li>Desk: </li>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                    </li>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                    </li>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                    </li>
                </ul>
                <ul>
                    <li>Scholar Console</li>
                    <li>
                        <span>Header Tool</span>
                        <span>Cohort Performance: course progress, lesson progress</span>
                        <span>Department Performance: </span>
                        <span></span>
                    </li>
                    <li>Sidebar: </li>
                    <li>Desk: </li>
                </ul>
                <ul>
                    <li>Management Console</li>
                    <li>
                        <span>Header Tool</span>
                        <span>Team Performance: </span>
                        <span>Department Performance: </span>
                        <span></span>
                    </li>
                    <li>
                        <span>Collective Management</span>
                        <span>Sidebar: </span>
                        <span>Desk: </span>
                        <span></span>
                    </li>
                    <li>
                        <span>Collective Management</span>
                        <span>Sidebar: </span>
                        <span>Desk: </span>
                        <span></span>
                    </li>
                    <li>
                        <span>Feedback Processing</span>
                        <span>Sidebar: work log of completed work (complete = saturated, incomplete = desaturated)</span>
                        <span>Desk: feedback processing form</span>
                        <span></span>
                    </li>
                    <li>
                        <span>Forum Management</span>
                        <span>Sidebar: </span>
                        <span>Desk: </span>
                        <span></span>
                    </li>
                    <li>
                        <span>Bulletin Management</span>
                        <span>Sidebar: </span>
                        <span>Desk: </span>
                        <span></span>
                    </li>
                    <li>
                        <span>Member Management</span>
                        <span>Sidebar: </span>
                        <span>Desk: </span>
                        <span></span>
                    </li>
                </ul>
                <ul>
                    <li>Designer Console</li>
                    <li>
                        <span>Header Tool</span>
                        <span>Team Performance: </span>
                        <span>Department Performance: </span>
                        <span></span>
                    </li>
                    <li>Sidebar: </li>
                    <li>Desk: </li>
                </ul>
                <ul>
                    <li>Educator Console</li>
                    <li>
                        <span>Header Tool</span>
                        <span>Team Performance: </span>
                        <span>Department Performance: </span>
                        <span></span>
                    </li>
                    <li>Sidebar: </li>
                    <li>Desk: </li>
                </ul>
                <ul>
                    <li>Creator Console</li>
                    <li>
                        <span>Header Tool</span>
                        <span>Team Performance: </span>
                        <span>Department Performance: </span>
                        <span></span>
                    </li>
                    <li>Sidebar: </li>
                    <li>Desk: </li>
                </ul>
                <ul>
                    <li>Developer Console</li>
                    <li>
                        <span>Header Tool</span>
                        <span>Team Performance: </span>
                        <span>Department Performance: </span>
                        <span></span>
                    </li>
                    <li>Sidebar: </li>
                    <li>Desk: </li>
                </ul>
                <ul>
                    <li>Committee Console</li>
                    <li>
                        <span>Header Tool</span>
                        <span>Team Performance: </span>
                        <span>Department Performance: </span>
                        <span></span>
                    </li>
                    <li>Sidebar: </li>
                    <li>Desk: </li>
                </ul>
            </div>
            {/* consoleSidebarOpen consoleSidebarClosed */}
            <div id='userConsoleDesk' onClick={handleConsoleSidebarClosed} className={consoleSidebarClosed ? "consoleSidebarClosed" : "consoleSidebarOpen"}>

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
