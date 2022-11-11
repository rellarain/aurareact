import React from 'react';

export default function Dashboard() {return (
    <main id="userDash">
        <UserConsole />
    </main>
)}


function UserConsole() {return (
    <div id='userConsole'>
        <div id='userConsoleMeta'>
            <br/>
            Department title <br/>
            <br/>
            News: birthdays, updates, reminders <br/>
            Online: employees, supervisors, team <br/>
            Teams: rosters <br/>
            Schedule: <br/>
            Projects: tasks<br/>
            Feedback: pending, processing, processed<br/>
            Bulletin: discussions, polls<br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        <div id='userConsoleDesk'></div>

            
    </div>
)}



