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

    function handleConsoleSidebarClosed() {
        setConsoleSidebarClosed(!consoleSidebarClosed);
        // alert("it worked!");
    }

    function handleConsoleHelpClosed() {
        setConsoleHelpClosed(!consoleHelpClosed);
        // alert("it worked!");
    }

    function formatDate(date) {
        return new Intl.DateTimeFormat('en-us', {weekday: 'long', month: 'long', day: '2-digit', year:'numeric'}).format(date);
    }


    return (
        <div id='userConsole' className={consoleClosed ? "userConsoleClosed" : "userConsoleOpen"} >
            <div id="userConsoleHead">
                <section>
                    <ConsoleTab consoleTitle="Attendant"/>
                    <ConsoleTab consoleTitle="Manager"/>
                    <ConsoleTab consoleTitle="Director"/>
                    <ConsoleTab consoleTitle="Artist"/>
                    <ConsoleTab consoleTitle="Translator"/>
                    <ConsoleTab consoleTitle="Writer"/>
                    <ConsoleTab consoleTitle="Editor"/>
                    <ConsoleTab consoleTitle="Designer"/>
                    <ConsoleTab consoleTitle="Architect"/>
                    <ConsoleTab consoleTitle="Instructors"/>
                    <ConsoleTab consoleTitle="Educators"/>
                    <ConsoleTab consoleTitle="QA"/>
                    <ConsoleTab consoleTitle="Developer"/>
                    <ConsoleTab consoleTitle="Engineer"/>
                    <ConsoleTab consoleTitle="Support"/>
                    {/* Community, District, Region, Content, 
                    Creator, Assessment, Designer, Scholar, 
                    Instructor, Educator,  */}

                </section>
                <section onClick={handleConsoleClosed}></section>
                <section> <span></span> </section>
                <section>
                    <ConsoleSubpage />
                    <ConsoleSubpage />
                    <ConsoleSubpage />
                    <ConsoleSubpage />
                    <ConsoleSubpage />
                    <ConsoleSubpage />
                    <ConsoleSubpage />
                    <ConsoleSubpage />
                    <ConsoleSubpage />
                    <ConsoleSubpage />
                </section>
                <section>{formatDate(today)}</section>
            </div>
            
            <div id='userConsoleSidebar' className={consoleHelpClosed ? "consoleHelpToolClosed" : "consoleHelpToolOpen"}>
                <ConsoleSidebarContent />
                {/* consoleHelpToolClosed consoleHelpToolOpen */}
                <section id='userConsoleHelp' >
                    <section>
                        <button onClick={handleConsoleHelpClosed}>?</button>
                        <div>{consoleTitle} Help</div>
                        <div></div>
                        <ConsoleHelpDesk/>
                        {/* 
                            CONSOLE HELP TOOL TO-DO LIST:
                            - design console feedback component
                            - design console FAQ component
                            - design console help desk component
                            - 
                            - 
                            - 
                            - 
                            - 
                            - 
                            - 
                        
                        */}
                    </section>
                </section>  
                

            </div>
            {/* consoleSidebarOpen consoleSidebarClosed */}
            <div id='userConsoleDesk' onClick={handleConsoleSidebarClosed} className={consoleSidebarClosed ? "consoleSidebarClosed" : "consoleSidebarOpen"}>
                To-Do List for Console: 
                <br/>- write tabs as components that can be replicated with props
                <br/>- write tabActive toggle that makes corresponding sidebar content appear and disappear
                <br/>- add time and date in the header
                <br/>- add an activity indicator on the console so the user knows how they are performing in each time interval
                <br/>- make a button/indicator for sidebar open or closed
                <br/>- make an area in the header for updates or schedule reminders
                <br/>- save button on the console
                <br/>- help desk toggle for admin consoles
                <br/>- refresh button that updates console (queue quantities)

                <br/><br/>ACTIVITY INDICATOR
                <br/>- next to help tool on sidebar
                <br/>- displays activity level for current time interval when closed
                <br/>- 
                <br/>- 
                <br/><br/><br/><br/><br/>
                <br/>-
                <br/>-
                <br/>-
                <br/>-
                <br/>-
                <br/>-

            </div>

            {/* 
            
            
            
            
            
            
            */}
        </div>
    )
}

function ConsoleHelpDesk() {
    
    const [consoleHelpDeskClosed, setConsoleHelpDeskClosed] = useState(true);

    function handleConsoleHelpDeskClosed() {
        setConsoleHelpDeskClosed(!consoleHelpDeskClosed);
        // alert("it worked!");
    }
    
    return(
        <div className={consoleHelpDeskClosed ? "consoleHelpDeskClosed" : "consoleHelpDeskOpen"} onClick={handleConsoleHelpDeskClosed}>

        </div>
    )
}

function ConsoleSidebarContent() {return(
    <section id='consoleSidebarContent'>
        <ul>
            <li>
                <span>Account Console</span>(One Tab, One Page)
                <span>
                    <b>Account Tab</b>
                    <br/><b></b>: 
                </span>
                <span>
                    <b>Portfolio Tab</b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b>Connections Tab</b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b>Customize Tab</b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b>Voice Tab</b> (Social Only)
                    <br/>
                    <br/>
                </span>
                <span>
                    <b>Admin Tab</b> (Scholar/Admin Only)
                    <br/>
                    <br/>
                </span>
            </li>
            <li>
                <span>Subpage/Task Option</span>
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
            </li>
        </ul>
        <ul>
            <li>
                <span>Collective Console </span> (One Tab, Multi-Page)
                <span>
                    <b>Collective Details Tab </b>
                    <br/><b>Sidebar</b>: sub-collective widecards (), management team ()
                    <br/><b>Desk</b>: collective metrics (statistics, engagement, occupancy, etc.)
                </span>
                <span>
                    <b>Roster Tab</b>
                    <br/><b>Sidebar</b>: filters ()
                    <br/><b>Desk</b>: profile gallery ()
                </span>
                <span>
                    <b>Forum Tab</b>
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Bulletin Tab</b>
                    <br/><b>Sidebar</b>: notices, updates, news
                    <br/><b>Desk</b>: 
                </span>
            </li>
            <li>
                <span>Community Subpage</span>
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
            </li>
            <li>
                <span>District Subpage</span>
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
            </li>
            <li>
                <span>Region Subpage</span>
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
            </li>
            <li>
                <span>Academy Subpage</span>
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
            </li>
        </ul>
        <ul>
            <li>
                <span>Assessment Console</span> (One Tab, One Page)
                <span>
                    <b>Assessment Processing Tab</b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b>New Assessment/Catalog Tab</b>
                    <br/>
                    <br/>
                </span>
            </li>
            <li>
                <span>Introduction Step Subpage</span>
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
            </li>
            <li>
                <span>Survey Step Subpage</span>
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
            </li>
        </ul>
        <ul>
            <li>
                <span>Scholar Console</span> (One Tab, Multi-Page)
                <span>
                    <b>Assessment</b> (Members)
                    <br/>
                    <br/>
                </span>
                <span>
                    <b>Design</b> (Designers)
                    <br/>
                    <br/>
                </span>
                <span>
                    <b>Management</b> (Leaders)
                    <br/>
                    <br/>
                </span>
                <span>
                    <b>Education</b> (Educators)
                    <br/>
                    <br/>
                </span>
                <span>
                    <b>Creation</b> (Creators)
                    <br/>
                    <br/>
                </span>
                <span>
                    <b>Development</b> (Developers)
                    <br/>
                    <br/>
                </span>
            </li>
            <li>
                <span>Learning Subpages</span> Library, Courses, Lessons
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
            </li>
            <li>
                <span>Application Subpages</span> Projects, Practice, Discussion 
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
            </li>
        </ul>
        <ul>
            <li>
                <span>Admin Console</span> (Multi-Tab, One Page)
                <span>
                    <b>Collective Management</b>
                    <br/><b></b>
                    <br/>
                </span>
                <span>
                    <b>Designers</b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b>Educators</b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b>Creators</b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b>Developers</b>
                    <br/>
                    <br/>
                </span>
            </li>
            <li>
                <span>Department Performance Subpage</span>
                <span>
                    <b>Management Department</b>
                    <br/><b>Sidebar</b>: department activity (current tasks, performance, scores), 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Design Department</b>
                    <br/><b>Sidebar</b>: department activity (current tasks, performance, scores), 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Creator Department</b> (Editors)
                    <br/><b>Sidebar</b>: project progress (stages, due dates, tasks), department activity (current tasks, performance, scores), 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Writer Department</b>
                    <br/><b>Sidebar</b>: project progress (stages, due dates, tasks), 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Translator Department</b>
                    <br/><b>Sidebar</b>: project progress (stages, due dates, tasks), 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Artists Department</b>
                    <br/><b>Sidebar</b>: project progress (stages, due dates, tasks), 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Education Department</b>
                    <br/><b>Sidebar</b>: department activity (current tasks, performance, scores), 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Developer Department</b>
                    <br/><b>Sidebar</b>: department activity (current tasks, performance, scores), 
                    <br/><b>Desk</b>: 
                </span>
            </li>
            <li>
                <span>Team Performance Subpage</span>
                <span>
                    <b>Subpage/Task Option</b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
            </li>
            <li>
                <span>Support Management Subpage</span> Performance
                <span>
                    <b>Subpage/Task Option</b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b>Region Support MGMT</b>
                    <br/><b>Users</b>: 
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                    <br/>
                </span>
                <span>
                    <b>District Support MGMT</b>
                    <br/><b>Users</b>: 
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                    <br/>
                </span>
                <span>
                    <b>Community Support MGMT</b>
                    <br/><b>Users</b>: 
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                    <br/>
                </span>
                <span>
                    <b>Instructor Support MGMT</b>
                    <br/><b>Users</b>: 
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                    <br/>
                </span>
                <span>
                    <b>Scholar Support MGMT</b>
                    <br/><b>Users</b>: 
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                    <br/>
                </span>
                <span>
                    <b> Support MGMT</b>
                    <br/><b>Users</b>: 
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                    <br/>
                </span>
            </li>
            <li>
                <span>User Management Subpage</span>
                <span>
                    <b>Subpage/Task Option</b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b></b>
                    <br/>
                    <br/>
                </span>
            </li>
            <li>
                <span>Feedback Processing Subpage</span>complete = alert desat, assigned incomplete = accent desat, team incomplete = theme desat
                <span>
                    <b>General/MGMT Feedback</b>
                    <br/><b>Users</b>: attendants, community support, managers, district support, directors, region support
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: annotate (add details), return (clarify, rejection), channel (escalate, department, subdepartment, category)
                </span>
                <span>
                    <b>Assessment Feedback</b>
                    <br/><b>Users</b>: architects, architect support, designers, designer support, assessment support 
                    <br/><b>Sidebar</b>: ordered by assessment in order of oldest submission date, then ordered by element (manual, processing, results)
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Content Feedback</b>
                    <br/><b>Users</b>: editors, editor support, writers, writer support, translators, translator support, art directors, artists
                    <br/><b>Sidebar</b>: only displays relevant feedback to your roles, in order of submission dates
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Development Feedback</b>
                    <br/><b>Users</b>: engineers, engineer support, developer, developer support, QA agents, QA support, tech support
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Education Feedback</b>
                    <br/><b>Users</b>: administrators, instructors, instructor support, scholar support 
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                </span>
            </li>
            <li>
                <span>Collective Management</span> Management Only
                <span>
                    <b>Community Management</b>
                    <br/><b>Sidebar</b>: community metrics (engagement, occupancy, revenue, activity)
                    <br/><b>Desk</b>:
                </span>
                <span>
                    <b>District Management</b>
                    <br/><b>Sidebar</b>: district metrics (engagement, occupancy, revenue, activity)
                    <br/><b>Desk</b>:
                </span>
                <span>
                    <b>Region Management</b>
                    <br/><b>Sidebar</b>: region metrics (engagement, occupancy, revenue, activity)
                    <br/><b>Desk</b>:
                </span>
            </li>
            <li>
                <span>Assessment Management</span> Designers Only
                <span>
                    <b>Manual Management</b>
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Assessment Management</b>
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Results Management</b>
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                </span>
            </li>
            <li>
                <span>Curriculum Management</span> Educators Only
                <span>
                    <b>Library MGMT Subpage</b>
                    <br/><b>Sidebar</b>: annotation progress (), article progress (), topic progress ()
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Course MGMT Subpage</b>
                    <br/><b>Sidebar</b>: structure (), 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Lesson MGMT Subpage</b>
                    <br/><b>Sidebar</b>: structure (), 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Projects MGMT Subpage</b>
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Practice MGMT Subpage</b>
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Discussion MGMT Subpage</b>
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                </span>
            </li>
            <li>
                <span>Content Management</span> Creators Only
                <span>
                    <b>Editorial MGMT Subpage</b>
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Writing Subpage</b>
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Translation Subpage</b>
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b>Studio Subpage</b>
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                </span>

            </li>
            <li>
                <span>Development/Tech Management</span> Developers Only
                <span>
                    <b>Subpage/Task Option</b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b></b>
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b></b>
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                </span>
            </li>
            <li>
                <span>Committee Management</span>
                <span>
                    <b>Subpage/Task Option</b>
                    <br/>
                    <br/>
                </span>
                <span>
                    <b></b>
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                </span>
                <span>
                    <b></b>
                    <br/><b>Sidebar</b>: 
                    <br/><b>Desk</b>: 
                </span>
            </li>
        </ul>
    </section>
)}

function ConsoleTab({consoleTitle}) {
    
    // const consoleTitle = "Designer";

    const [consoleTabActive, setConsoleTabActive] = useState(true);
    function handleConsoleTabClick() {
        setConsoleTabActive(!consoleTabActive);
    }

    
    return (
        <button className={consoleTabActive ? "userConsoleTabInactive" : "userConsoleTabActive"} onClick={handleConsoleTabClick}>
            <img></img>
            <span>{consoleTitle}</span>

        </button>
    )
}

function ConsoleSubpage() {
    
    const consoleSubpageTitle = "Queue";
    const consoleSubpageQuantity = "100";

    const [consoleSubpageActive, setConsoleSubpageActive] = useState(false);
    function handleConsoleSubpageClick() {
        setConsoleSubpageActive(!consoleSubpageActive);
    }

    
    return (
        <button className={consoleSubpageActive ? "userConsoleSubpageActive" : "userConsoleSubpageInactive"} onClick={handleConsoleSubpageClick}>
            <span>{consoleSubpageTitle}</span>
            <span>{consoleSubpageQuantity}</span>

        </button>
    )
}



// To-Do List:
// <br/>- Create separate JS files for each level of user (visitorConsoles, memberConsoles, scholarConsoles, adminConsoles)
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
