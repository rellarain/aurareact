import React from 'react';

export default function UserConsole() {
    return (
        <div id='userConsole' className='adminConsoleState userConsoleOpen'>
            {/* adminConsoleState userConsoleState     userConsoleOpen userConsoleClosed */}
            <div id='userConsoleProgress'></div>
            <div id='userConsoleClose'></div>
            <div id='userConsoleSidebar'>
                <div>image, title, announcements</div>
                <div>
                    <br/>
                    Console Sidebar Requirements
                    <br/>
                    <hr></hr>
                    USER - MEMBER<br/><br/>
                    Portfolio: portrait (), basic info (name, gender, age), interactions () <br/>
                    Connections: groups (), access ()<br/>
                    Account: subscription (payment method, status, plan), reports (engagement, coverage, recency, consistency)<br/>
                    <br/>
                    <br/>
                    <br/>
                    <hr></hr>
                    <br/>
                    USER - COMMUNITY<br/><br/>
                    Roster: community (), district (), region (), academy () <br/>
                    Forum: discussions (), <br/>
                    Bulletin: community (), district (), region (), academy ()<br/>
                    Aggreports: community (), district (), region (), academy () <br/>
                    <br/>
                    <br/>
                    ADMIN - MANAGEMENT <br/><br/>
                    Members: manage (), applications (), reports ()<br/>
                    Volunteers: manage (), applications (), reports ()<br/>
                    Forum: <br/>
                    Bulletin: <br/>
                    Feedback: <br/>
                    <br/>
                    <hr></hr>
                    USER - ASSESSMENTS<br/><br/>
                    <br/>
                    <br/>
                    <br/>
                    ADMIN - DESIGNERS <br/><br/>
                    <br/>
                    <br/>
                    <br/>
                    <hr></hr>
                    USER - SCHOLAR<br/><br/>
                    Library: reading progress<br/>
                    Training: course progress, grades, upcoming assignments, ongoing assignments<br/>
                    Examination: <br/>
                    <br/>
                    <br/>
                    <br/>
                    ADMIN - ACADEMICS <br/><br/>
                    <br/>
                    <br/>
                    <br/>
                    <hr></hr>
                    ADMIN<br/><br/>
                    <br/>
                    ADMIN - DEVELOPERS <br/><br/>
                    <br/>
                    <br/>
                    <br/>
                    ADMIN - CREATOR <br/><br/>
                    Translators: <br/>
                    Translators: <br/>
                    Translators: <br/>
                    <br/>
                    Lead Editors: <br/>
                    <br/>
                    Lead Media Specialists: <br/>
                    Media Specialists: <br/>
                    Artist Support: <br/>
                    Media Creators: <br/>
                    <br/>
                    ADMIN - COMMITTEE <br/><br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
            {/* consoleSidebarOpen consoleSidebarClosed */}
            <div id='userConsoleDesk' className='consoleSidebarOpen'>
                <br/>
                Console Desk Requirements
                <br/>
                <hr></hr>
                USER - ASSESSMENTS<br/><br/>
                Header: instructions (), step progress bar (), <br/>
                <br/>
                <br/>
                ADMIN - DESIGNERS <br/><br/>
                <br/>
                <br/>
                <br/>
                <hr></hr>
                USER - SCHOLAR<br/><br/>
                Library: article content (title, footnotes, definitions, images), insights (information related to the active user) <br/>
                Training: lessons (), observations (), sandbox (prepared cases with expected responses, open response assessment, ), <br/>
                Examination: <br/>
                <br/>
                <br/>
                <br/>
                ADMIN - ACADEMICS <br/><br/>
                Rubrics: <br/>
                Sandbox: <br/>
                Feedback: <br/>
                Lessons: <br/>
                Grading: <br/>
                <br/>
                <br/>
                <hr></hr>
            </div>
            <ConsoleHelp />


        </div>
    )
}


function ConsoleHelp() {
    return (
        //  consoleHelpOpen consoleHelpClosed
        <div id='userConsoleHelp' className='consoleHelpClosed'>
            <div id='userConsoleHelpButton'>
                <span>?</span>
                <span>Help</span>
            </div>
            <div id='userConsoleHelpContent'>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
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
