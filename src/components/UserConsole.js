import React from 'react';

export default function UserConsole() {return (
    <div id='userConsole'>
        <div id='userConsoleProgress'></div>
        <ConsoleTitle/>
        <div id='userConsoleClose'></div>
        <div id='userConsoleMeta'>
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
            Steps: in assessments or submissions, there is a component detailing the steps of the process, and what step you're on<br/>
            <br/>
            To-Do:<br/>
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
        <div id='userConsoleDesk'>
            Training: <br/>
            Management: <br/>
            Break Time: <br/>
            Designer: <br/>
            Instructor: <br/>            
            Studios: <br/>
            Committee: <br/>
            <br/>
            Appplications<br/>
            Assessments<br/>
            <br/>
            <br/>
            To-Do:<br/>
            - add window actions: pause, close<br/>
            - add tabs for steps in a process<br/>
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
        <ConsoleHelp/>
            
    </div>
)}


function ConsoleTitle() {return(
    <div id='userConsoleTitle'>
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

function ConsoleHelp() {return(
    <div id='userConsoleHelp'>
        <div id='userConsoleHelpContent'>
            FAQ: common questions, policy,<br/>
            Tutorials: guided steps<br/>
            Feedback: <br/>
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
            Chat: contacting an employee trained on this topic<br/>
        </div>
        <div id='userConsoleHelpButton'>
            <span>?</span>
            <span>Help</span>
        </div>
    </div>
)}