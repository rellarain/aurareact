import React, { useState } from 'react';

export default function UserConsole() {

    const consoleTitle = "Designer";
    const today = new Date();


    const [consoleClosed, setConsoleClosed] = useState(false);
    const [consoleHelpClosed, setConsoleHelpClosed] = useState(true);
    const [consoleSidebarClosed, setConsoleSidebarClosed] = useState(true);

    function handleConsoleClosed() {
        setConsoleClosed(!consoleClosed);
        // alert("it worked!");
    }





    return (
        <div id='userConsole' className={consoleClosed ? "userConsoleClosed" : "userConsoleOpen"} >
            <div id='userConsoleDesk'  className={consoleSidebarClosed ? "consoleSidebarClosed" : "consoleSidebarOpen"}>
                To-Do List for Console: 
                <br/>- write tabs as components that can be replicated with props
                <br/>- write tabActive toggle that makes corresponding sidebar content appear and disappear
                <br/>- add an activity indicator on the console so the user knows how they are performing in each time interval
                <br/>- make a button/indicator for sidebar open or closed
                <br/>- make an area in the header for updates or schedule reminders
                <br/>- save button on the console
                <br/>- help desk toggle for admin consoles
                <br/>- refresh button that updates console (queue quantities)
            </div>
        </div>
    )
}



