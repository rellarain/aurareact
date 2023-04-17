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
                    MEMBER<br/><br/>
                    Portfolio: portrait (), basic info (namegit , gender, age), interactions () <br/>
                    Connections: <br/>
                    <br/>
                    <hr></hr>
                    COMMUNITY<br/><br/>
                    Roster: <br/>
                    Forum: <br/>
                    Bulletin: <br/>
                    <br/>
                    <hr></hr>
                    ASSESSMENTS<br/><br/>
                    <br/>
                    <br/>
                    <br/>
                    <hr></hr>
                    SCHOLAR<br/><br/>
                    Library: reading progress<br/>
                    Training: course progress, grades, upcoming assignments<br/>
                    Examination: <br/>
                    <br/>
                    <br/>
                    <br/>
                    <hr></hr>
                    ADMIN<br/><br/>
                    <br/>
                    MANAGEMENT <br/><br/>
                    <br/>
                    <br/>
                    <br/>
                    DESIGNERS <br/><br/>
                    <br/>
                    <br/>
                    <br/>
                    ACADEMICS <br/><br/>
                    <br/>
                    <br/>
                    <br/>
                    DEVELOPERS <br/><br/>
                    <br/>
                    <br/>
                    <br/>
                    CREATOR <br/><br/>
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
                    COMMITTEE <br/><br/>
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
                VISITOR<br/><br/>
                Academy Console: <br/>
                <br/>
                <br/>
                <hr></hr>
                MEMBER<br/><br/>
                Portfolio: profile (), results (), voice ()<br/>
                Connections: <br/>
                <br/>
                <br/>
                <hr></hr>
                COMMUNITY<br/><br/>
                <br/>
                <br/>
                <hr></hr>
                ASSESSMENTS<br/><br/>
                Header: instructions (), step progress bar (), <br/>
                <br/>
                <br/>
                <hr></hr>
                SCHOLAR<br/><br/>
                Library: article content (title, footnotes, definitions, images), insights (information related to the active user) <br/>
                Training: lessons (), observations (), sandbox (prepared cases with expected responses, open response assessment, ), <br/>
                Examination: <br/>
                <br/>
                <br/>
                <br/>
                <hr></hr>
                ADMIN<br/><br/>
                <br/>
                MANAGEMENT <br/><br/>
                <br/>
                <br/>
                DESIGNERS <br/><br/>
                <br/>
                <br/>
                <br/>
                ACADEMICS <br/><br/>
                <br/>
                <br/>
                <br/>
                DEVELOPERS <br/><br/>
                <br/>
                <br/>
                <br/>
                CREATOR <br/><br/>
                <br/>
                <br/>
                <br/>
                COMMITTEE <br/><br/>
                <br/>
                <br/>
                <br/>
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
