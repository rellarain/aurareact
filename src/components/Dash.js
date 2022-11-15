import React from 'react';
import AdminConsole from './AdminConsole';

export default function Dashboard() {return (
    <main id="userDash">
        <UserConsole />
        <AdminConsole />

    </main>
)}

function UserConsole() {return (
    <main id="userConsole">
        <div id='userConsoleHead'>
            <div id='userConsoleProgress'></div>
            <div id='userConsoleTitle'>Title</div>
            <div id='userConsolePause'></div>
            <div id='userConsoleHelp'>?</div>
            <div id='userConsoleClose'></div>
        </div>
        <div id='userConsoleTabs'></div>
        <div id='userConsoleInfo'></div>
        <div id="userConsoleDesk">
            Training: <br/>
            Application: <br/>
            Assessment: <br/>
            <br/>
            <br/>
            <br/>            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    </main>
)}




