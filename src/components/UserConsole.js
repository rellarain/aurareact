import React, { useState } from 'react';

export default function UserConsole() {

    const consoleTitle = "Console Title";

    const [consoleClosed, setConsoleClosed] = useState(false);
    const [consoleHelpClosed, setConsoleHelpClosed] = useState(true);
    const [consoleSidebarClosed, setConsoleSidebarClosed] = useState(true);
    const [consoleTabActive, setConsoleTabActive] = useState(true);

    function handleConsoleClosed() {
        setConsoleClosed(!consoleClosed);
        // alert("it worked!");
    }

    function handleConsoleTabClick() {
        setConsoleTabActive(!consoleTabActive)
    }

    function handleConsoleSidebarClosed() {
        setConsoleSidebarClosed(!consoleSidebarClosed);
        // alert("it worked!");
    }

    function handleConsoleHelpClosed() {
        setConsoleHelpClosed(!consoleHelpClosed);
        // alert("it worked!");
    }


    return (
        <div id='userConsole' className={consoleClosed ? "userConsoleClosed" : "userConsoleOpen"} >
            <div id="userConsoleHead">
                <div id='userConsoleTitle'>{consoleTitle}</div>
                <div>
                    <span className='userConsoleTabObject userConsoleTabActive'>
                        <span>Tab Title</span>
                        <span>1235</span>

                    </span>
                    <span className='userConsoleTabObject'>
                        <span>Tab Title</span>
                        <span>112225</span>
                    </span>
                    <span className='userConsoleTabObject'>
                        <span>Tab Title</span>
                        <span>12045</span>
                    </span>
                    <span className='userConsoleTabObject'>
                        <span>Tab Title</span>
                        <span>45</span>
                    </span>
                    <span className='userConsoleTabObject'>
                        <span>Tab Title</span>
                        <span>62</span>
                    </span>
                    <span className='userConsoleTabObject'>
                        <span>Tab Title </span>
                        <span></span>
                    </span>
                    <span className='userConsoleTabObject'>
                        <span></span>
                        <span></span>
                    </span>
                    <span className='userConsoleTabObject'>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div onClick={handleConsoleClosed}></div>
                <div> <span></span> </div>
            </div>
            <div id='userConsoleSidebar' className={consoleHelpClosed ? "consoleHelpToolClosed" : "consoleHelpToolOpen"}>
                {/* consoleHelpToolClosed consoleHelpToolOpen */}
                <section id='userConsoleHelp' onClick={handleConsoleHelpClosed}>

                </section>  
                <ConsoleSidebarContent />

            </div>
            {/* consoleSidebarOpen consoleSidebarClosed */}
            <div id='userConsoleDesk' onClick={handleConsoleSidebarClosed} className={consoleSidebarClosed ? "consoleSidebarClosed" : "consoleSidebarOpen"}>

            </div>

            {/* 
            To-Do List for Console: 
            - write tabs as components that can be replicated with props
            - write tabActive toggle that makes corresponding sidebar content appear and disappear
            - add time and date in the header
            - add an activity indicator on the console so the user knows how they are performing in each time interval
            - make a button/indicator for sidebar open or closed
            - make an area in the header for updates or schedule reminders
            - save button on the console
            - help desk toggle for admin consoles
            
            
            
            
            
            
            */}
        </div>
    )
}



function ConsoleSidebarContent() {return(
    <section id='consoleSidebarContent'>
        <ul>
            <li>Community Console</li>
            <li>
                <span>Community Info Tab</span>
                <span>Sidebar: community metrics ()</span>
                <span>Desk: </span>
                <span></span>
            </li>
            <li>
                <span>Roster Tab</span>
                <span>Sidebar: management team, </span>
                <span>Desk: profile cards, </span>
                <span></span>
            </li>
            <li>
                <span>Forum Tab</span>
                <span>Sidebar: </span>
                <span>Desk: </span>
                <span></span>
            </li>
            <li>
                <span>Bulletin Tab</span>
                <span>Sidebar: notices/updates/news </span>
                <span>Desk: </span>
                <span></span>
            </li>
        </ul>
        <ul>
            <li>District Console</li>
            <li>
                <span>District Info Tab</span>
                <span>Sidebar: wide cards of community summaries</span>
                <span>Desk: management team, </span>
            </li>
            <li>
                <span>Roster Tab</span>
                <span>Sidebar: statistics, </span>
                <span>Desk: profile cards, </span>
                <span></span>
            </li>
            <li>
                <span>Forum Tab</span>
                <span>Sidebar: </span>
                <span>Desk: </span>
                <span></span>
            </li>
            <li>
                <span>Bulletin Tab</span>
                <span>Sidebar: </span>
                <span>Desk: </span>
                <span></span>
            </li>
        </ul>
        <ul>
            <li>Region Console</li>
            <li>
                <span>Region Info Tab</span>
                <span>Sidebar: wide cards of district summaries</span>
                <span>Desk: management team, </span>
            </li>
            <li>
                <span>Roster Tab</span>
                <span>Sidebar: statistics, </span>
                <span>Desk: profile cards, </span>
            </li>
            <li>
                <span>Forum Tab</span>
                <span>Sidebar: </span>
                <span>Desk: </span>
            </li>
            <li>
                <span>Bulletin Tab</span>
                <span>Sidebar: </span>
                <span>Desk: </span>
            </li>
        </ul>
        <ul>
            <li>Academy Console</li>
            <li>
                <span>Academy Info Tab</span>
                <span>Sidebar: wide cards of region summaries</span>
                <span>Desk: management team, </span>
                <span></span>
            </li>
            <li>
                <span>Roster Tab</span>
                <span>Sidebar: statistics, </span>
                <span>Desk: profile cards, </span>
                <span></span>
            </li>
            <li>
                <span>Forum Tab</span>
                <span>Sidebar: </span>
                <span>Desk: </span>
                <span></span>
            </li>
            <li>
                <span>Bulletin Tab</span>
                <span>Sidebar: </span>
                <span>Desk: </span>
                <span></span>
            </li>
        </ul>
        <ul>
            <li>Assessment Console</li>
            <li>
                <span>Assessment Processing Tabs</span>
                <span>Sidebar: steps (survey, )</span>
                <span>Desk: </span>
            </li>
            <li>
                <span>Add Assessment Tab (Catalog) </span>
                <span>Sidebar: </span>
                <span>Desk: </span>
            </li>
        </ul>
        <ul>
            <li>Scholar Console</li>
            <li>
                <span>Library Tab (Learning)</span>
                <span>Sidebar: topic navigation, reading list</span>
                <span>Desk: current active topic </span>
                <span></span>
            </li>
            <li>
                <span>Course Tab (Learning)</span>
                <span>Sidebar: to-do list (reading, activities, discussions)</span>
                <span>Desk: </span>
                <span></span>
            </li>
            <li>
                <span>Project Tab (Training)</span>
                <span>Sidebar: </span>
                <span>Desk: </span>
                <span></span>
            </li>
            <li>
                <span>Evaluation Tab (Evaluation)</span>
                <span>Sidebar: </span>
                <span>Desk: </span>
                <span></span>
            </li>
            <li>
                <span>Apprentice Tab (Training, Evaluation)</span>
                <span>Sidebar: </span>
                <span>Desk: </span>
                <span></span>
            </li>
        </ul>
        <ul>
            <li>Management Console</li>
            <li>
                <span>Collective Management Tab</span>
                <span>Sidebar: collective metrics (engagement, occupancy, revenue, activity) for all managed levels (academy, region/region cluster, district/district cluster, community/community cluster)</span>
                <span>Desk: </span>
                <span></span>
            </li>
            <li>
                <span>Support Management Tab</span>
                <span>Sidebar: direct reports' widecards with today's performance scores </span>
                <span>Desk: </span>
                <span></span>
            </li>
            <li>
                <span>Feedback Processing Tab</span>
                <span>Sidebar: </span>
                <span>Desk: feedback bank (complete = alert desat, assigned incomplete = accent desat, team incomplete = theme desat), feedback processing form ()</span>
                <span></span>
            </li>
            <li>
                <span>Forum Management Tab</span>
                <span>Sidebar: </span>
                <span>Desk: </span>
                <span></span>
            </li>
            <li>
                <span>Bulletin Management Tab</span>
                <span>Sidebar: </span>
                <span>Desk: </span>
                <span></span>
            </li>
            <li>
                <span>Member Management Tab</span>
                <span>Sidebar: </span>
                <span>Desk: </span>
                <span></span>
            </li>
        </ul>
        <ul>
            <li>Designer Console</li>
            <li>
                <span>Design Department Tab</span>
                <span>Sidebar:  </span>
                <span>Desk: </span>
                <span></span>
            </li>
            <li>
                <span>Support Management Tab</span>
                <span>Sidebar: direct reports' widecards with today's performance scores </span>
                <span>Desk: </span>
                <span></span>
            </li>
            <li>
                <span> Assessment Editor Tab</span>
                <span>Sidebar: assessment navigation</span>
                <span>Desk: </span>
                <span></span>
            </li>
            <li>
                <span> Manual Editor Tab</span>
                <span>Sidebar: </span>
                <span>Desk: </span>
                <span></span>
            </li>
            <li>
                <span> Feedback Processing Tab</span>
                <span>Sidebar: </span>
                <span>Desk: </span>
                <span></span>
            </li>
        </ul>
        <ul>
            <li>Educator Console</li>
            <li>
                <span>Educator Department Tab</span>
                <span>Sidebar: department performance </span>
                <span>
                    SUBPAGE
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
            </li>
            <li>
                <span>Educational Administrator Tab</span>
                <span>
                    <b>CURRICULUM MANAGEMENT</b>
                    <br/> Sidebar: 
                    <br/> Desk: 
                </span>
                <span>
                    LEAD INSTRUCTOR MANAGEMENT 
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
                <span>
                    INSTRUCTOR MANAGEMENT
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
                <span>
                    INSTRUCTOR SUPPORT MGMT.
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
                <span>
                    SCHOLAR SUPPORT MANAGEMENT
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
            </li>
            <li>
                <span>Lead Instructor Tab</span>
                <span>
                    MANAGEMENT EVALUATION
                    <br/> Sidebar: projects (), assessments ()
                    <br/> Desk:
                </span>
                <span>
                    EDUCATOR EVALUATION
                    <br/> Sidebar: projects (), assessments ()
                    <br/> Desk:
                </span>
                <span>
                    CREATOR EVALUATION
                    <br/> Sidebar: projects (), assessments ()
                    <br/> Desk:
                </span>
                <span>
                    DESIGNER EVALUATION
                    <br/> Sidebar: projects (), assessments ()
                    <br/> Desk:
                </span>
                <span>
                    DEVELOPER EVALUATION
                    <br/> Sidebar: projects (), assessments ()
                    <br/> Desk:
                </span>
            </li>
            <li>
                <span>Instructor Tab</span>
                <span>
                    <b>MANAGEMENT TRAINING</b>
                    <br/> Sidebar: scholar (), apprentice ()
                    <br/> Desk:
                </span>
                <span>
                    <b>EDUCATOR TRAINING</b>
                    <br/> Sidebar: scholar (), apprentice ()
                    <br/> Desk:
                </span>
                <span>
                    <b>CREATOR TRAINING</b>
                    <br/> Sidebar: scholar (), apprentice ()
                    <br/> Desk:
                </span>
                <span>
                    <b>DESIGNER TRAINING</b>
                    <br/> Sidebar: scholar (), apprentice ()
                    <br/> Desk:
                </span>
                <span>
                    <b>DEVELOPER TRAINING</b>
                    <br/> Sidebar: scholar (), apprentice ()
                    <br/> Desk:
                </span>
            </li>
            <li>
                <span>Instructor Support Tab</span>
                <span>
                    <b>MANAGEMENT LEARNING</b>
                    <br/> Sidebar: library (topics, articles, annotations), course (lessons, activities)
                    <br/> Desk:
                </span>
                <span>
                    <b>EDUCATOR LEARNING</b>
                    <br/> Sidebar: library (topics, articles, annotations), course (lessons, activities)
                    <br/> Desk:
                </span>
                <span>
                    <b>CREATOR LEARNING</b>
                    <br/> Sidebar: library (topics, articles, annotations), course (lessons, activities)
                    <br/> Desk:
                </span>
                <span>
                    <b>DESIGNER LEARNING</b>
                    <br/> Sidebar: library (topics, articles, annotations), course (lessons, activities)
                    <br/> Desk:
                </span>
                <span>
                    <b>DEVELOPER LEARNING</b>
                    <br/> Sidebar: library (topics, articles, annotations), course (lessons, activities)
                    <br/> Desk:
                </span>
            </li>
            <li>
                <span>Scholar Support Tab</span>
                <span>
                    <b>LIBRARY FEEDBACK</b>
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
                <span>
                    <b>COURSE FEEDBACK</b>
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
                <span>
                    <b>PROJECT FEEDBACK</b>
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
                <span>
                    <b>EVALUATION FEEDBACK</b>
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
                <span>
                    <b>APPRENTICESHIP FEEDBACK</b>
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
            </li>
        </ul>
        <ul>
            <li>Creator Console</li>
            <li>
                <span>Creator Department Tab</span>
                <span>Sidebar: department performance, project schedule/progress,  </span>
                <span>Desk: </span>
                <span>
                    SUBPAGE
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
                <span>
                    SUBPAGE
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
            </li>
            <li>
                <span>Editor Tab</span>
                <span></span>
                <span></span>
                <span>
                    SUBPAGE
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
                <span>
                    SUBPAGE
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
            </li>
            <li>
                <span>Writer Tab</span>
                <span>
                    SUBPAGE
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
                <span>
                    SUBPAGE
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
                <span></span>
                <span></span>
            </li>
            <li>
                <span>Translator Tab</span>
                <span>
                    SUBPAGE
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
                <span>
                    SUBPAGE
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
                <span></span>
                <span></span>
            </li>
            <li>
                <span>Artist Tab</span>
                <span>
                    SUBPAGE
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
                <span>
                    SUBPAGE
                    <br/> Sidebar: 
                    <br/> Desk:
                </span>
                <span></span>
                <span></span>
            </li>
        </ul>
        <ul>
            <li>Developer Console</li>
            <li>
                <span>Developer Department Tab</span>
                <span>Sidebar: department performance </span>
                <span>Desk: </span>
                <span></span>
            </li>
            <li>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </li>
        </ul>
        <ul>
            <li>Committee Console</li>
            <li>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </li>
        </ul>
    </section>
)}




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
