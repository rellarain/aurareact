import React from 'react';

export default function Dashboard() {return (
    <main id="userDash">
        <UserConsole />
    </main>
)}


function UserConsole() {return (
    <div id='userConsole'>
        <div id='userConsoleHead'>
            <div id='userConsoleTitle'>Console</div>
            <div id='userConsoleHelpers'> 666 </div>
            <div id='userConsoleUsers'> 1,200</div>
            <button id='userConsoleHelp'>?</button>
            <button id='userConsoleClose'>X</button>
            <div id='userConsoleProgress'></div>
        </div>
        <div id='userConsoleTabs'></div>
        <div id='userConsoleBody'>

            
        </div>
    </div>
)}