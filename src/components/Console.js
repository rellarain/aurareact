import React, { useState } from 'react';


export default function Console() {
    // Console Variables
    const consoleTitle = "Account";
    const consoleState = "active";

    const consoleClass = "console console" + consoleTitle;
    const today = new Date();
    const time = "8:00";
    const achievementScore = 100;

    const [consoleSidebarClosed, setConsoleSidebarClosed] = useState(true);
    const [consoleHelpClosed, setConsoleHelpClosed] = useState(true);


    // Console Functions
    function formatDate(date) {
        return new Intl.DateTimeFormat('en-us', {weekday: 'long', month: 'short', day: '2-digit', year:'numeric'}).format(date);
    }
    function handleConsoleSidebarClosed() {
        setConsoleSidebarClosed(!consoleSidebarClosed);
        // alert("it worked!");
    }
    function handleConsoleHelpClosed() {
        setConsoleHelpClosed(!consoleHelpClosed);
        // alert("it worked!");
    }
    
    
    return(
    <div className='console'>
        {/* consoleSidebarClosed consoleSidebarOpen */}
        <main className={consoleSidebarClosed ? "consoleSidebarClosed" : "consoleSidebarOpen"}>
            {/*  */}
            <header>
                <section>{consoleTitle}</section>
                <section>  <span>{formatDate(today)}</span> <span>{time}</span> </section>
                <section> <span style={{width: achievementScore + "%"}}></span> </section>
                <section> <button onClick={handleConsoleSidebarClosed}></button> </section>
                <section></section>
            </header>
            {/*  */}
            <div className={consoleHelpClosed ? "consoleHelpClosed" : "consoleHelpOpen"}> 
                <section className='consoleSidebar'>
                    <section className='consoleSidebarContent'>
                        <section>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </section>
                        <section>Sidebar Title </section>
                        <section></section>
                    </section>
                    <section className='consoleSidebarHelp'>
                        <section>
                            <button onClick={handleConsoleHelpClosed}>?</button>
                        </section>
                    </section>
                </section>
                <section className='consoleDesk'>
                    <b>ACCOUNT</b>: tools for any user with an active account with Aura Academy (Base = $2.00)
                        <br/> <b>Styling</b>: theme and theme upsat
                        <br/> <b>Progress Bar</b>: 
                        <br/> <b>Console Button</b>: opens sidebar, refresh page; open requests = medium accent, no open requests = medium theme;
                        <br/> <b>Console Tabs</b>: 
                        <br/> +<b> Portfolio</b>: view full profile (portfolio, voice)
                        <br/> +<b> Connections</b>: group management (view groups, add groups, remove groups, edit groups), member management (view users, add users, remove users, edit users) 
                        <br/> +<b> Privacy</b>: public access, academy access, region access, district access, community access, cluster access, connection group access, 
                        <br/> +<b> </b>:
                        <br/> <b>Sidebar Tabs</b>: account settings; only one open at a time
                        <br/> +<b> Account</b>: subscription () 
                        <br/> +<b> Customize</b>: 
                        <br/> +<b> </b>: 
                        <br/> <b>Sidebar Title</b>: 
                        <br/> <b>Sidebar Content</b>: 
                        <br/> <b>Help Tool</b>: FAQ, Tutorials, Feedback, Help Desk 
                        <br/> <b>Desk</b>: Portfolio
                        <br/>
                        <hr></hr>
                    <b>DASHBOARD</b>: 
                        <br/> <b>Styling</b>: all theme, theme upsat, and alert; 
                        <br/> <b>Progress Bar</b>: total daily performance score ()
                        <br/> <b>Console Button</b>: opens sidebar, refresh page; current activity indicator ()
                        <br/> <b>Console Tabs</b>: today's schedule, control consoles
                        <br/> <b>Sidebar Tabs</b>: general totals (all activity), member totals (social, assessment, scholar), role totals (break, MGMT, educator, creator, developer, designer, support), 
                        <br/> <b>Sidebar Title</b>: active sidebar tab title
                        <br/> <b>Sidebar Content</b>: activity log, 
                        <br/> <b>Help Tool</b>: 
                        <br/> <b>Desk</b>: 
                        <hr></hr>
                    <b>SOCIAL</b>: for users with social features enabled (Base + $2.00)
                        <br/> <b>Styling</b>: 
                        <br/> <b>Progress Bar</b>: 
                        <br/> <b>Console Button</b>: opens sidebar, refresh page; alert medium = open request(s), th
                        <br/> <b>Console Tabs</b>: only one selected; Voice, Collectives (Academy, Region, District, Community, Cluster, Connection Groups)
                        <br/> <b>Sidebar Tabs</b>: tags (demographics), management team ()
                        <br/> <b>Sidebar Title</b>: 
                        <br/> <b>Sidebar Content</b>: 
                        <br/> <b>Help Tool</b>: 
                        <br/> <b>Desk</b>: 
                        <br/> +<b> Roster</b>: profile gallery (), filters ()
                        <br/> +<b> Forum</b>: 
                        <br/> +<b> Bulletin</b>: notices, updates, news
                        <br/> +<b> Collective Results</b>: 
                        <br/>
                        <hr></hr>
                    <b>ASSESSMENT</b>: for users with assessment features enabled (Base + $2.00)
                        <br/> <b>Styling</b>: assessment based styling, user alert styling
                        <br/> <b>Progress Bar</b>: percent completion of entire assessment (desaturated test style with insufficient processing, saturated test style with sufficient processing, alert style with complete processing)
                        <br/> <b>Console Button</b>: opens sidebar, refresh page; opens and closes sidebar 
                        <br/> <b>Console Tabs</b>: open assessments with % completion (only one open)
                        <br/> <b>Sidebar Tabs</b>: current step in assessment (only one open; introduction, survey, entry, weighting, rating, processing, )
                        <br/> <b>Sidebar Title</b>: name of current step 
                        <br/> <b>Sidebar Content</b>: processing bank (completed and remaining entries), add an entry/reprocess
                        <br/> <b>Help Tool</b>: manual, FAQ, tutorials, help desk
                        <br/> <b>Desk</b>: 
                        <br/> +<b> Progress Bar</b>: percent completion with current step (desaturated test style with insufficient processing, saturated test style with sufficient processing, alert style with complete processing)
                        <br/> +<b> Processing Interface</b>: 
                        <br/> +<b> </b>: 
                        <br/>
                        <hr></hr>
                    <b>SCHOLAR</b>: for users with scholar features enabled (Base + $4.00)
                        <br/> <b>Styling</b>: assessment styling for assessment courses, personal styling for role training (theme, accent, alert)
                        <br/> <b>Progress Bar</b>: General (total completion %), Library (current article reading %), Course (lesson completion %), Sandbox (completion of dummy processing banks), Practice (progress through practice examples)
                        <br/> <b>Console Button</b>: opens sidebar, refresh page; activity indicator (if breaktime setting is enabled, shows activity score)
                        <br/> <b>Console Tabs</b>: General (active certifications, active courses, course catalog), Library, Course Tabs (lessons, projects, discussions, reading, assessment), Sandbox (practice, review, evaluation), Application (training, role, promotion)
                        <br/> <b>Sidebar Tabs</b>: 
                        <br/> <b>Sidebar Title</b>: 
                        <br/> <b>Sidebar Content</b>: 
                        <br/> <b>Help Tool</b>: 
                        <br/> <b>Desk</b>: 
                        <br/>
                        <hr></hr>
                    <b>BREAKTIME</b>: 
                        <br/> <b>Styling</b>: all alert styling
                        <br/> <b>Progress Bar</b>: completion of daily tasks () 
                        <br/> <b>Console Button</b>: opens sidebar, refresh page; breaktime activity indicator
                        <br/> <b>Console Tabs</b>: pastimes, practice,  
                        <br/> <b>Sidebar Tabs</b>: 
                        <br/> <b>Sidebar Title</b>: 
                        <br/> <b>Sidebar Content</b>: 
                        <br/> <b>Help Tool</b>: 
                        <br/> <b>Desk</b>: 
                        <br/>
                        <hr></hr>
                    <b>ADMIN</b>: for admin, includes multiple roles ($10.00, includes scholar, assessment, social, and basic)
                        <br/> <b>Styling</b>: user styling, accents and alerts
                        <br/> <b>Progress Bar</b>: achievement score (% complete of assigned work;  accent )
                        <br/> <b>Console Button</b>: opens sidebar, refresh page; activity indicator (alert bright = inactivity, accent bright = low activity, accent medium = average activity, accent dark = high activity), opens and closes sidebar 
                        <br/> <b>Console Tabs</b>: only one selected; tab determines desk content; includes name of role and quantity of work  
                        <br/> <b>Sidebar Tabs</b>:
                        <br/> +<b> Department Activity</b>: project progress, annual/monthly/weekly schedules, department performance score, current activities
                        <br/> +<b> Team Activity</b>: personal (performance scores), collective (team performance scores), members (member performance scores) 
                        <br/> +<b> Resources</b>: 
                        <br/> +<b> </b>: 
                        <br/> +<b> </b>: 
                        <br/> +<b> </b>: 
                        <br/> +<b> </b>: 
                        <br/> +<b> </b>: 
                        <br/> +<b> </b>: 
                        <br/> +<b> </b>: 
                        <br/> +<b> </b>: 
                        <br/> +<b> Settings</b>: schedule (scheduled hours, scheduled activities), breaktime (), helpdesk () 
                        <br/> <b>Sidebar Title</b>: 
                        <br/> <b>Sidebar Content</b>: 
                        <br/> <b>Help Tool</b>: 
                        <br/>
                        <br/>
                        <br/>
                        <br/> <b>DESK</b>: 
                        <br/>
                        <br/><b> Attendant Desk</b>: collective metrics (engagement, occupancy, revenue, activity)
                        <br/> +<b> Community MGMT</b>: collective metrics (engagement, occupancy, revenue, activity)
                        <br/> +<b> Community Support MGMT</b>: 
                        <br/> +<b> Member MGMT</b>: 
                        <br/><b> Manager Desk</b>: 
                        <br/> +<b> Community MGMT</b>: collective metrics (engagement, occupancy, revenue, activity)
                        <br/> +<b> District MGMT</b>: collective metrics (engagement, occupancy, revenue, activity)
                        <br/> +<b> Attendant MGMT</b>: 
                        <br/> +<b> Community Support MGMT</b>: 
                        <br/> +<b> District Support MGMT</b>: 
                        <br/> +<b> Member MGMT</b>: 
                        <br/><b> Director Desk</b>: 
                        <br/> +<b> Community MGMT</b>: collective metrics (engagement, occupancy, revenue, activity)
                        <br/> +<b> District MGMT</b>: collective metrics (engagement, occupancy, revenue, activity)
                        <br/> +<b> Region MGMT</b>: collective metrics (engagement, occupancy, revenue, activity)
                        <br/> +<b> Attendant MGMT</b>: 
                        <br/> +<b> Manager MGMT</b>: 
                        <br/> +<b> Community Support MGMT</b>: 
                        <br/> +<b> District Support MGMT</b>: 
                        <br/> +<b> Region Support MGMT</b>: 
                        <br/> +<b> Member MGMT</b>: 
                        <br/>
                        <br/><b> Designer Desk</b>: 
                        <br/> +<b> Test Content</b>: 
                        <br/> +<b> Feedback Sorting</b>: 
                        <br/> +<b> </b>: 
                        <br/><b> Architect Desk</b>: 
                        <br/> +<b> Assessment Support MGMT</b>: 
                        <br/> +<b> Designer Support MGMT</b>: 
                        <br/> +<b> Designer MGMT</b>: 
                        <br/> +<b> Architect Support MGMT</b>: 
                        <br/> +<b> Assessment MGMT</b>: 
                        <br/> +<b> Manual MGMT</b>: 
                        <br/> +<b> Result MGMT</b>: 
                        <br/>
                        <br/><b> Instructor Desk</b>: 
                        <br/> +<b> Sandbox MGMT</b>: 
                        <br/> +<b> Practice MGMT</b>: 
                        <br/> +<b> Discussion MGMT</b>: 
                        <br/> +<b> Project MGMT</b>: 
                        <br/><b> Administrator Desk</b>: 
                        <br/> +<b> Library MGMT</b>: 
                        <br/> +<b> Course MGMT</b>: lessons, readings
                        <br/> +<b> Rubric MGMT</b>: 
                        <br/> +<b> Scholar MGMT</b>: 
                        <br/> +<b> Scholar Support MGMT</b>: 
                        <br/> +<b> Instructor Support MGMT</b>: 
                        <br/> +<b> Instructor MGMT</b>: 
                        <br/> +<b> Administrator Support MGMT</b>: 
                        <br/>
                        <br/><b> Developer Desk</b>: 
                        <br/> +<b> Front-End</b>: 
                        <br/> +<b> Front-to-Back API</b>: 
                        <br/> +<b> Back-End</b>: 
                        <br/> +<b> Back-to-Front API</b>: 
                        <br/><b> QA Desk</b>: 
                        <br/> +<b> Adequacy Scoring</b>: 
                        <br/> +<b> Accessibility</b>: 
                        <br/> +<b> Bug Testing</b>: 
                        <br/> +<b> Tech Tutorials</b>: managing instructions for relevant tech activities with other tools 
                        <br/><b> Engineer Desk</b>: 
                        <br/> +<b> Project MGMT</b>: 
                        <br/> +<b> Engineer Support MGMT</b>: 
                        <br/> +<b> Developer MGMT</b>: 
                        <br/> +<b> Developer Support MGMT</b>: 
                        <br/> +<b> QA MGMT</b>: 
                        <br/> +<b> QA Support MGMT</b>: 
                        <br/> +<b> Tech Support MGMT</b>: 
                        <br/>
                        <br/><b> Artist Desk</b>: 
                        <br/> +<b> Artist Studio</b>: 
                        <br/> +<b> Art Review</b>: 
                        <br/> +<b> </b>: 
                        <br/><b> Writer Desk</b>: 
                        <br/> +<b> Writer Studio</b>: 
                        <br/> +<b> Text Review</b>: 
                        <br/> +<b> </b>: 
                        <br/><b> Translator Desk</b>: 
                        <br/> +<b> Translator Studio</b>: 
                        <br/> +<b> Translation Review</b>: 
                        <br/> +<b> </b>: 
                        <br/><b> Editor Desk</b>: 
                        <br/> +<b> Editor Studio</b>: 
                        <br/> +<b> Editor Review</b>: 
                        <br/> +<b> </b>: 
                        <br/>
                        <br/><b> Committee Desk</b>: 
                        <br/> +<b> Architect MGMT</b>: 
                        <br/> +<b> Administrator MGMT</b>: 
                        <br/> +<b> Engineer MGMT</b>: 
                        <br/> +<b> Director MGMT</b>: 
                        <br/> +<b> Editor MGMT</b>: 
                        <br/>
                        <br/><b> Support Desk</b>: 
                        <br/> +<b> Feedback Processing</b>: sort (correction, comment, compliment, criticism, reporting, inquiry), annotate (add details), return (clarify, rejection), channel (escalate, department, subdepartment, category)
                        <br/>
                        <br/> +<b> Community Support</b>: basic (<i>social feature support, forum MGMT, bulletin MGMT</i>), advanced (<i>member MGMT</i>)
                        <br/> +<b> District Support</b>: basic (<i>social feature support, forum MGMT, bulletin MGMT</i>), advanced (<i>member MGMT, attendant MGMT</i>)
                        <br/> +<b> Region Support</b>: basic (<i>social feature support, forum MGMT, bulletin MGMT</i>), advanced (<i>member MGMT, attendant MGMT, manager MGMT</i>)
                        <br/>
                        <br/> +<b> Assessment Support</b>: basic (<i>assessment, manual</i>), advanced (<i>results</i>)
                        <br/> +<b> Scholar Support</b>: basic (<i>learning, application</i>), advanced (<i>evaluation</i>)
                        <br/>
                        <br/> +<b> Designer Support</b>: basic (<i>test material creation, </i>), advanced (<i></i>)
                        <br/> +<b> Architect Support</b>: basic (<i></i>), advanced (<i></i>)
                        <br/>
                        <br/> +<b> Instructor Support</b>: basic (<i>annotations</i>), advanced (<i></i>)
                        <br/> +<b> Administrator Support</b>: basic (<i></i>), advanced (<i></i>)
                        <br/>
                        <br/> +<b> Tech Support</b>: basic (<i></i>), advanced (<i></i>)
                        <br/> +<b> QA Support</b>: basic (<i></i>), advanced (<i></i>)
                        <br/> +<b> Developer Support</b>: basic (<i></i>), advanced (<i></i>)
                        <br/> +<b> Engineer Support</b>: basic (<i></i>), advanced (<i></i>)
                        <br/>
                        <br/> +<b> Artist Support</b>: basic (<i>review</i>), advanced (<i></i>)
                        <br/> +<b> Writer Support</b>: basic (<i>proofreading, review</i>), advanced (<i></i>)
                        <br/> +<b> Translator Support</b>: basic (<i>proofreading, review</i>), advanced (<i></i>)
                        <br/> +<b> Editor Support</b>: basic (<i>review</i>), advanced (<i></i>)
                        <br/>
                        <br/> +<b> Committee Support</b>: basic (<i>FAQ, Tutorials, Feedback</i>), advanced (<i></i>)
                        <br/> +<b> Panel Support</b>: basic (<i></i>), advanced (<i></i>)
                        <br/> +<b> Board Support</b>: basic (<i></i>), advanced (<i></i>)
                        <br/>
                        <hr></hr>
                    <b>HELP DESK</b>: for admin;
                        <br/> <b>Styling</b>: the base elements of the console use personal alert and accent, sidebar and desk use user styling of active chat, 
                        <br/> <b>Progress Bar</b>: % of required help desk time completed
                        <br/> <b>Console Button</b>: opens sidebar, refresh page; activity indicator (low activity is bright accent, medium activity is medium accent, high activity is dark accent)
                        <br/> <b>Console Tabs</b>: chat heads (thumbnail, name, number of new replies, new reply is alert color, no new reply is accent color)
                        <br/> <b>Sidebar Tabs</b>: areas of a user's account; controls sidebar content
                        <br/> <b>Sidebar Title</b>: user's display name
                        <br/> <b>Sidebar Content</b>: displays information based on tab
                        <br/> +<b> Account</b>: engagement (), name (), subscription (), role (), tags (), reports/flags ()
                        <br/> +<b> Feedback</b>: pending (), closed ()
                        <br/> +<b> Social</b>: connections (), organization ()
                        <br/> +<b> Assessment</b>: only available to design admin; coverage (), history (), status ()
                        <br/> +<b> Scholar</b>: only available to education admin; certifications (), active courses () 
                        <br/> <b>Help Tool</b>: FAQ, Tutorials, Feedback, Help Desk (active team or department leaders)
                        <br/> <b>Desk</b>: 
                        <br/> +<b> Chat</b>: 
                        <br/> +<b> Forms</b>: assisted feedback, link creator
                        <br/>
                        <hr></hr>
                </section>
            </div>
        </main>
    </div>


)}