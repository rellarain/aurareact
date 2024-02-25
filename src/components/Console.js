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
                    <section className='consoleSidebarTabs'>
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
                    <section className='consoleSidebarTitle'>
                        Sidebar Title 
                    </section>
                    <section className='consoleSidebarBody'>
                        <section className='consoleSidebarContent'>
                            <b>ACCOUNT</b>: tools for any user with an active account with Aura Academy (Base = $2.00)
                                <br/> <b>Styling</b>: theme and theme upsat
                                <br/> <b>Sidebar Tabs</b>: account settings; only one open at a time
                                <br/> +<b> Account</b>: subscription () 
                                <br/> +<b> Customize</b>: 
                                <br/> +<b> </b>: 
                                <br/> <b>Sidebar Title</b>: 
                                <br/> <b>Sidebar Content</b>: 
                                <br/> <b>Help Tool</b>: FAQ, tutorials, feedback, help desk (community attendant, advanced community support, community support)
                                <br/>
                                <hr></hr>
                            <b>DASHBOARD</b>: available to all users, includes Breaktime as a sidebar
                                <br/> <b>Styling</b>: all theme, theme upsat, and alert; 
                                <br/> <b>Sidebar Tabs</b>:  pastimes, practice, hobby, project, self-care
                                <br/> <b>Sidebar Title</b>: Breaktime / (active sidebar tab title)
                                <br/> <b>Sidebar Content</b>: active sidebar tab content; if no tab, displays performance breakdown ()
                                <br/> <b>Help Tool</b>: FAQ, tutorials, feedback, help desk (community attendant, advanced community support, community support)
                                <hr></hr>
                            <b>SOCIAL</b>: for users with social features enabled (Base + $2.00)
                                <br/> <b>Styling</b>: 
                                <br/> <b>Sidebar Tabs</b>: tags (demographics), management team ()
                                <br/> <b>Sidebar Title</b>: 
                                <br/> <b>Sidebar Content</b>: 
                                <br/> <b>Help Tool</b>: FAQ, tutorials, feedback, help desk (community attendant, advanced community support, community support)
                                <br/>
                                <hr></hr>
                            <b>ASSESSMENT</b>: for users with assessment features enabled (Base + $2.00)
                                <br/> <b>Styling</b>: assessment based styling, user alert styling
                                <br/> <b>Sidebar Tabs</b>: current step in assessment (only one open; introduction, survey, entry, weighting, rating, processing, )
                                <br/> <b>Sidebar Title</b>: name of current step 
                                <br/> <b>Sidebar Content</b>: processing bank (completed and remaining entries), add an entry/reprocess
                                <br/> <b>Help Tool</b>: manual, FAQ, tutorials, feedback, help desk (designer support, advanced assessment support, assessment support)
                                <br/>
                                <hr></hr>
                            <b>SCHOLAR</b>: for users with scholar features enabled (Base + $4.00)
                                <br/> <b>Styling</b>: assessment styling for assessment courses, personal styling for role training (theme, accent, alert)
                                <br/> <b>Sidebar Tabs</b>: 
                                <br/> <b>Sidebar Title</b>: 
                                <br/> <b>Sidebar Content</b>: 
                                <br/> <b>Help Tool</b>: FAQ, tutorials, feedback, help desk (instructor support, advanced scholar support, scholar support)
                                <br/>
                                <hr></hr>
                            <b>ADMIN</b>: for admin, includes multiple roles ($10.00, includes scholar, assessment, social, and basic)
                                <br/> <b>Styling</b>: user styling, accents and alerts
                                <br/> <b>Sidebar Tabs</b>:
                                    <br/> +<b> Settings</b>: schedule (scheduled hours, scheduled activities), breaktime (), helpdesk () 
                                    <br/> +<b> Library</b>: 
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                    <br/>
                                <hr></hr>
                                <b> Community Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (district support, community attendant, advanced community support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Advanced Community Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (advanced district support, district support, community attendant)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Community Attendant Sidebar</b>: 
                                    <br/> +<b> Community Management Activity</b>: project progress, annual/monthly/weekly schedules, department performance score, current activities
                                    <br/> +<b> Team Activity</b>: personal (performance scores), collective (team performance scores), members (member performance scores) 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (district managers, advanced district support, district support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                    <br/>
                                <hr></hr>
                                    <b> District Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (region support, district managers, advanced district support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Advanced District Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (advanced region support, region support, district managers)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> District Manager Sidebar</b>: 
                                    <br/> +<b> District Management Activity</b>: project progress, annual/monthly/weekly schedules, department performance score, current activities
                                    <br/> +<b> Team Activity</b>: personal (performance scores), collective (team performance scores), members (member performance scores) 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (advanced region support, region support, district managers)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                    <br/>
                                <hr></hr>
                                    <b> Region Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (region director, advanced region support, region support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Advanced Region Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (region director, advanced region support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Region Director Sidebar</b>: 
                                    <br/> +<b> Region Management Activity</b>: project progress, annual/monthly/weekly schedules, department performance score, current activities
                                    <br/> +<b> Team Activity</b>: personal (performance scores), collective (team performance scores), members (member performance scores) 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (region directors)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                    <br/>
                                <hr></hr>
                                    
                                <b> Assessment Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (advanced designer support, designer support, advanced assessment support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Advanced Assessment Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (designers, advanced designer support, designer support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                    <br/>
                                <br/><b> Designer Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (architect support, designers, advanced designer support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Advanced Designer Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (advanced architect support, architect support, designers)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Designer Sidebar</b>: 
                                    <br/> +<b> Designer Department Activity</b>: project progress, annual/monthly/weekly schedules, department performance score, current activities
                                    <br/> +<b> Team Activity</b>: personal (performance scores), collective (team performance scores), members (member performance scores) 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (architects, advanced architect support, architect support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                    <br/>
                                <br/><b> Architect Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (architects, advanced architect support, architect support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Advanced Architect Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (architects, advanced architect support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Architect Sidebar</b>: 
                                    <br/> +<b> Design Department Activity</b>: project progress, annual/monthly/weekly schedules, department performance score, current activities
                                    <br/> +<b> Team Activity</b>: personal (performance scores), collective (team performance scores), members (member performance scores) 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (architects)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                    <br/>
                                <hr></hr>
                                <b> Scholar Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (advanced instructor support, instructor support, advanced scholar support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Advanced Scholar Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (instructor, advanced instructor support, instructor support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                    <br/>
                                <br/><b> Instructor Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (administrator support, instructor, advanced instructor support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Advanced Instructor Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (advanced administrator support, administrator support, instructor)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Instructor Sidebar</b>: 
                                    <br/> +<b> Instructor Department Activity</b>: project progress, annual/monthly/weekly schedules, department performance score, current activities
                                    <br/> +<b> Team Activity</b>: personal (performance scores), collective (team performance scores), members (member performance scores) 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (advanced administrator support, administrator support, instructor)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                    <br/>
                                <br/><b> Administrator Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (administrator, advanced administrator support, administrator support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Advanced Administrator Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (administrator, advanced administrator support, )
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Administrator Sidebar</b>: 
                                    <br/> +<b> Education Department Activity</b>: project progress, annual/monthly/weekly schedules, department performance score, current activities
                                    <br/> +<b> Team Activity</b>: personal (performance scores), collective (team performance scores), members (member performance scores) 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (administrator)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                    <br/>
                                <hr></hr>
                                <b> Tech Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (QA support, developer support, advanced tech support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Advanced Tech Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (QA support, developer support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                    <br/>
                                <br/><b> Developer Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (engineer support, developer, advanced developer support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Advanced Developer Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (advanced engineer support, engineer support, developer)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Developer Sidebar</b>: 
                                    <br/> +<b> Developer Department Activity</b>: project progress, annual/monthly/weekly schedules, department performance score, current activities
                                    <br/> +<b> Team Activity</b>: personal (performance scores), collective (team performance scores), members (member performance scores) 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (advanced engineer support, engineer support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                    <br/>
                                <br/><b> QA Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (engineer support, QA, Advanced QA Support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Advanced QA Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (advanced engineer support, engineer support, QA)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> QA Sidebar</b>: 
                                    <br/> +<b> QA Department Activity</b>: project progress, annual/monthly/weekly schedules, department performance score, current activities
                                    <br/> +<b> Team Activity</b>: personal (performance scores), collective (team performance scores), members (member performance scores) 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (advanced engineer support, engineer support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>:  
                                    <br/>
                                <br/><b> Engineer Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (engineers, advanced engineer support, engineer support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Advanced Engineer Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (engineers, advanced engineer support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Engineer Sidebar</b>: 
                                    <br/> +<b> Development Department Activity</b>: project progress, annual/monthly/weekly schedules, department performance score, current activities
                                    <br/> +<b> Team Activity</b>: personal (performance scores), collective (team performance scores), members (member performance scores) 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (engineers)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                    <br/>
                                <hr></hr>
                                <b> Artist Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (editor support, artists, advanced artist support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Advanced Artist Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (editor support, advanced editor support, artists)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Artist Sidebar</b>: 
                                    <br/> +<b> Artist Department Activity</b>: project progress, annual/monthly/weekly schedules, department performance score, current activities
                                    <br/> +<b> Team Activity</b>: personal (performance scores), collective (team performance scores), members (member performance scores) 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (editor support, advanced editor support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                    <br/>
                                <br/><b> Writer Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (editor support, writers, advanced writer support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Advanced Writer Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (editor support, advanced editor support, writers)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Writer Sidebar</b>: 
                                    <br/> +<b> Writer Department Activity</b>: project progress, annual/monthly/weekly schedules, department performance score, current activities
                                    <br/> +<b> Team Activity</b>: personal (performance scores), collective (team performance scores), members (member performance scores) 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (editor support, advanced editor support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                    <br/>
                                <br/><b> Translator Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk ()
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Advanced Translator Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk ()
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Translator Sidebar</b>: 
                                    <br/> +<b> Translator Department Activity</b>: project progress, annual/monthly/weekly schedules, department performance score, current activities
                                    <br/> +<b> Team Activity</b>: personal (performance scores), collective (team performance scores), members (member performance scores) 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (editor support, advanced editor support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                    <br/>
                                <br/><b> Editor Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (editors, advanced editor support, editor support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Advanced Editor Support Sidebar</b>: 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (editors, advanced editor support)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <br/><b> Editor Sidebar</b>: 
                                    <br/> +<b> Creator Department Activity</b>: project progress, annual/monthly/weekly schedules, department performance score, current activities
                                    <br/> +<b> Team Activity</b>: personal (performance scores), collective (team performance scores), members (member performance scores) 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk (editors)
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <hr></hr>
                                <b> Committee Sidebar</b>: 
                                    <br/> +<b> Department Activity</b>: project progress, annual/monthly/weekly schedules, department performance score, current activities
                                    <br/> +<b> Team Activity</b>: personal (performance scores), collective (team performance scores), members (member performance scores) 
                                    <br/> +<b> Help Tool</b>: FAQ, tutorials, feedback, help desk ()
                                    <br/> +<b> </b>: 
                                    <br/> +<b> </b>: 
                                <hr></hr>
                            <b>HELP DESK SIDEBAR</b>: for admin;
                                <br/> <b>Styling</b>: the base elements of the console use personal alert and accent, sidebar and desk use user styling of active chat, 
                                <br/> <b>Sidebar Tabs</b>: areas of a user's account; controls sidebar content; close Help Desk
                                <br/> <b>Sidebar Title</b>: user's display name
                                <br/> <b>Sidebar Content</b>: displays information based on tab
                                <br/> +<b> Account</b>: engagement (), name (), subscription (), role (), tags (), reports/flags ()
                                <br/> +<b> Feedback</b>: pending (), closed ()
                                <br/> +<b> Social</b>: connections (), organization ()
                                <br/> +<b> Assessment</b>: only available to design admin; coverage (), history (), status ()
                                <br/> +<b> Scholar</b>: only available to education admin; certifications (), active courses () 
                                <br/> <b>Help Tool</b>: FAQ, Tutorials, Feedback, Help Desk (active team or department leaders)
                                <hr></hr>

                        </section>
                        <section className='consoleSidebarHelp'>
                            <section>
                                <button onClick={handleConsoleHelpClosed}>?</button>

                            </section>
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
                        <br/> <b>Desk</b>: Portfolio
                        <br/>
                        <hr></hr>
                    <b>DASHBOARD</b>: available to all users, includes Breaktime as a sidebar
                        <br/> <b>Styling</b>: all theme, theme upsat, and alert; 
                        <br/> <b>Progress Bar</b>: total daily performance score (achievement = % complete of assigned work, accomplishment = % complete of scheduled break activities, adherence = % of scheduled time doing scheduled activity, activity = % score of activity points earned based on average daily points)
                        <br/> <b>Console Button</b>: opens sidebar, refresh page; current activity indicator; admin (alert = break, accent = work, theme = inactivity/member activity)
                        <br/> <b>Console Tabs</b>: today's scheduled roles, roles with available activities, controls consoles
                        <br/> <b>Desk</b>: 
                        <br/> +<b> Activity Log</b>: general totals (all activity), member totals (social, assessment, scholar), role totals (break, MGMT, educator, creator, developer, designer, support),
                        <br/> +<b> Schedule</b>: scheduled work activity (scheduled, remaining, ongoing), scheduled member activity (scheduled, remaining, ongoing), scheduled break activity (scheduled, remaining, ongoing)
                        <br/> +<b> Workweek</b>: total possible worktime, total used worktime, total earned breaktime, total used breaktime, total missed worktime
                        <br/> +<b> Activity Feed</b>: view what one's connections or team are doing currently 
                        <br/> +<b> Messenger</b>: 
                        <br/> +<b> </b>: 
                        <br/> +<b> </b>: 
                        <hr></hr>
                    <b>SOCIAL</b>: for users with social features enabled (Base + $2.00)
                        <br/> <b>Styling</b>: 
                        <br/> <b>Progress Bar</b>: 
                        <br/> <b>Console Button</b>: opens sidebar, refresh page; alert medium = open request(s), th
                        <br/> <b>Console Tabs</b>: only one selected; Voice, Collectives (Academy, Region, District, Community, Cluster, Connection Groups)
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
                        <br/> <b>Desk</b>: 
                        <br/>
                        <hr></hr>
                    <b>ADMIN</b>: for admin, includes multiple roles ($10.00, includes scholar, assessment, social, and basic)
                        <br/> <b>Styling</b>: user styling, accents and alerts
                        <br/> <b>Progress Bar</b>: achievement score (% complete of assigned work;  accent )
                        <br/> <b>Console Button</b>: opens sidebar, refresh page; activity indicator (alert bright = inactivity, accent bright = low activity, accent medium = average activity, accent dark = high activity), opens and closes sidebar 
                        <br/> <b>Console Tabs</b>: only one selected; tab determines desk content; includes name of role and quantity of work  
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
                        <br/> +<b> Editor Support MGMT</b>: 
                        <br/> +<b> Artist MGMT</b>: 
                        <br/> +<b> Artist Support MGMT</b>: 
                        <br/> +<b> Writer MGMT</b>: 
                        <br/> +<b> Writer Support MGMT</b>: 
                        <br/> +<b> Translator MGMT</b>: 
                        <br/> +<b> Translator Support MGMT</b>: 
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
                        <br/> <b>Console Tabs</b>: chat heads (thumbnail, name, number of new replies, new reply is alert color, no new reply is accent color); open new chat
                        <br/> <b>Desk</b>: 
                        <br/> +<b> Chat</b>: 
                        <br/> +<b> Forms</b>: assisted feedback, link creator
                        <br/>
                        <hr></hr>
                        To-Do List for Console: 
                        <br/>- write tabs as components that can be replicated with props
                        <br/>- write tabActive toggle that makes corresponding sidebar content appear and disappear
                        <br/>- make an area in the header for updates or schedule reminders
                        <br/>- save button on the console
                        <br/>- help desk toggle for admin consoles
                        <br/> 
                        Help Desk To-Do:
                        <br/> - full screen mode: widens sidebar, creates individual components for oldest chats
                        <br/> - mini screen mode: narrows sidebar, removes individual chats and creates chat heads on header
                        <br/> - individual component: only shows one user information, removed when closed 
                        <br/> - multi-component: on mini screen or final component for full screen; shows a header of all minimized/newest chats along the top, only shows one user's info
                </section>
            </div>
        </main>
    </div>


)}