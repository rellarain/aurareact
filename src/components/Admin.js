import React, { useState } from 'react';


export default function Admin() {return (
    <div>
        <Sidebar />
        <AdminFooter />
    </div>
)}



function AdminFooter() {
    
   
    const [BTConsoleClosed, setBTConsoleClosed] = useState(true);

    function handleBTConsoleClosed() {
        setBTConsoleClosed(!BTConsoleClosed);
        // alert("it worked!");
    }
    

    
    return (
    <div id= "adminFooter" className={BTConsoleClosed ? "breakTimeClosed" : "breakTimeOpen"}>
        {/* inOffice outOffice  */} {/* breakTimeOpen breakTimeClosed */}
        <div id="workWeekTimer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div id='breakTimeHeader' onClick={handleBTConsoleClosed}>
            BREAKTIME
        </div>
        <div id='breakTimeConsole'>
            
            <div id="breakTimeConsoleMenu">need to add a header that closes the breaktime console and displays the time, used breaktime, earned breaktime, and unearned breaktime</div>
            <div id="breakTimeConsoleDesk">need to add a messenger component that displays active users on team and in connections, task lists for ongoing projects outside of work, </div>

        </div>

    </div>
)}






function Sidebar() {return (
    <div id="sidebar">
        <Toolkit />
    </div>
)}


function Toolkit() {return (
    <div id="toolkit">
        <div id='toolkitHead'>
            <span alt='Agenda' className='openTab'></span>
            <span alt='X'></span>
            <span alt='Library'></span>
            <span alt='Training'></span>
            <span alt='Team'></span>
            <span alt='X'></span>
            <span alt='Office Settings'></span>
            <span alt='Help Desk Lite'></span>
        </div>
        <div id='toolkitTitle'>
            <input type='text'></input>
        </div>
        <div id='toolkitProgress'><span id='toolkitProgressBar'></span></div>
        <div id='toolkitBody'>
            this is going to be turned into help desk so it can run alongside any other academy tasks; moving all training/resources to a scholar console




        </div>
    </div>
)}


// Toolkit Navigation
// 
// Tabbing: after closing all open tabs, the clicked tab will switch the toolkit content and title; clicking the current open tab closes the toolbar
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
// Functionality: 
// - Breaktime Toggle: change class from breakTimeOpen -> breakTimeClosed or breakTimeClosed -> breakTimeOpen 
// - Toolkit Toggle: change class from userDashMini -> userDashMax or userDashMax -> userDashMini
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
