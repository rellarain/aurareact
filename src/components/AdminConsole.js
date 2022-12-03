import React from 'react';

export default function AdminConsole() {return (
    <div id='adminConsole'>
        <div id='adminConsoleMeta'>
            <TeamSchedule/>
            <TeamBdays/>

            
            <br/>
            Department title <br/>
            <br/>
            News: birthdays, updates, reminders <br/>
            Online: employees, supervisors, team <br/>
            Teams: rosters <br/>
            Schedule: team hours, supervisor hours<br/>
            Projects: tasks<br/>
            Feedback: pending, processing, processed<br/>
            Bulletin: discussions, polls<br/>
            Calendar: week, month, quarter, year<br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        <div id='adminConsoleDesk'>
            <ConsoleTitle/>
            Training: <br/>
            Management: <br/>
            Break Time: <br/>
            Designer: <br/>
            Instructor: <br/>            
            Studios: <br/>
            Committee: <br/>
            <br/>
            <br/>
            <br/>
        </div>

            
    </div>
)}


function ConsoleTitle() {return(
    <div className='adminConsoleTitle'>
        <img src='' alt=''/>
        <span>Console</span>
    </div>
)}

function TeamSchedule() {return(
    <div className=''>
        <img src='' alt=''/>
        <span>Dave</span>
    </div>
)}


function TeamBdays() {return(
    <div className=''>
        <img src='' alt=''/>
        <span>Dave</span>
    </div>
)}