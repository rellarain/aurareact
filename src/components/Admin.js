import React, { useState } from 'react';


export default function Admin() {return (
    <div>
        <Sidebar />
        <BreakTimeFooter />
    </div>
)}



function BreakTimeFooter() {
    
   
    const [BTConsoleClosed, setBTConsoleClosed] = useState(true);

    function handleBTConsoleClosed() {
        setBTConsoleClosed(!BTConsoleClosed);
        // alert("it worked!");
    }
    

    
    return (
    <div id= "breakTimeFooter" className={BTConsoleClosed ? "breakTimeClosed" : "breakTimeOpen"}>
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

            <div id="breakTimeConsoleLog">need to add a header that closes the breaktime console and displays the time, used breaktime, earned breaktime, and unearned breaktime</div>
            <div id="breakTimeConsoleDesk">
                <section>
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
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </section>
                <section>Breaktime</section>
                <section>
                    <BreakConsoleTab breakConsoleTitle="Pastime" />
                    <BreakConsoleTab breakConsoleTitle="Hobby" />
                    <BreakConsoleTab breakConsoleTitle="Project" />
                    <BreakConsoleTab breakConsoleTitle="Practice" />
                    <BreakConsoleTab breakConsoleTitle="Self-Care" />
                </section>
                <section>need to add a messenger component that displays active users on team and in connections, task lists for ongoing projects outside of work, </section>
                <button onClick={handleBTConsoleClosed}></button>
            </div>

        </div>

    </div>
)}






function Sidebar() {return (
    <div id="sidebar">
        <HelpConsole />
    </div>
)}


function HelpConsole() {return (
    <main id='helpDeskConsole'>
        Help Desk To-Do:
        <br/> - full screen mode: widens sidebar, creates individual components for oldest chats
        <br/> - mini screen mode: narrows sidebar, removes individual chats and creates chat heads on header
        <br/> - individual component: only shows one user information, removed when closed 
        <br/> - multi-component: on mini screen or final component for full screen; shows a header of all minimized/newest chats along the top, only shows one user's info
        <br/> - 
        <br/> - 
        <br/> - 
        <br/> - 
        <br/> - 
        <br/> - 
        <br/> - 
        <br/> - 
        <br/> - 
        <br/> - 


        
    </main>
)}

function BreakConsoleTab({breakConsoleTitle}) {
    
    // const breakConsoleTitle = "Designer";

    const [breakConsoleTabActive, setBreakConsoleTabActive] = useState(true);
    function handleBreakConsoleTabClick() {
        setBreakConsoleTabActive(!breakConsoleTabActive);
    }

    
    return (
        <button className={breakConsoleTabActive ? "userBreakConsoleTabInactive" : "userBreakConsoleTabActive"} onClick={handleBreakConsoleTabClick}>
            {breakConsoleTitle}
        </button>
    )
}

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
