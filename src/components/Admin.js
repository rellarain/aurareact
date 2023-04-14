import React from 'react';

export default function Admin() {return (
    <div className=''>
        <AdminDash />
        <AdminFooter />
        <Sidebar />
    </div>
)}






function AdminFooter() {return (
    <div id= "adminFooter" className='outOffice breakTimeClosed'>
        {/* inOffice outOffice  */} {/* breakTimeOpen breakTimeClosed */}
        <div id='TKtoggle'>
            <div id='TKtoggleButton' className='TKtoggleClosed'>
                {/* TKtoggleOpen TKtoggleClosed TKtoggleNone */}
            </div>
        </div>
        <div id='breakTimeHead'>
            <div id='breakTimer'>
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
        </div>
        <div id='helpDeskAnchor'>
            <HelpDesk/>
        </div>
        <div id='breakTimeConsole'>
            
            <div id='breakTimeWeek'>
                {/* BreakTime Header: says how much worktime is left for the week, how much time is left on today's schedule, accumulated breaktime (units and time), how much breaktime is left in the week */}
            </div>
            <div id='breakTimeContent'>


            </div>
        </div>

    </div>
)}

function HelpDesk() {return (
    <div id='helpDeskConsole' className='helpDeskClosed'>
        {/* helpDeskOpen helpDeskOpenSB helpDeskClosed helpDeskNone */}
        <div></div>
        <section id='helpDeskChats'></section>
        <div id='helpDeskForm'>

        </div>
    </div>
)}


function AdminDash() {return(
    <div id='adminDashCrop' className='adminDashClosed'>
        {/* adminDashOpen adminDashClosed */}
        <div id="adminDashboard">
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
            <span alt='Tracking'></span>
            <span alt='Library'></span>
            <span alt='Training'></span>
            <span alt='Team'></span>
            <span alt='X'></span>
            <span alt='Office Settings'></span>
            <span alt='Help Desk Lite'></span>
        </div>
        <div id='toolkitTitle'>Toolkit</div>
        <div id='toolkitProgress'><span id='toolkitProgressBar'></span></div>
        <div id='toolkitBody'>

        {/* VISITOR COMPONENTS --------------------------------------------------------------------------------------------------------------------------------*/}
        <ul>
            <li>
                <h3>VISITOR COMPONENTS</h3>
                + Login<br/>
                + Academy Information<br/>
                + Application<br/>
                <h6>
                    To-Do List: <br/>
                    + <br/>
                    + <br/>
                </h6>
            </li>
        </ul>

        {/* MEMBER COMPONENTS ------------------------------------------------------------------------------------------------------------------------------- */}
        <ul>
            <li>
                <h3>MEMBER COMPONENTS</h3>
                + Header <br/>
                + Navigation<br/>
                + Portfolio Console<br/>
                + Social Console<br/>
                + Community Console<br/>
                <h6>To-Do List: <br/>
                    + <br/>
                    + <br/>
                </h6>
            </li>
            <li>These elements are limited to users with Aura Academy accounts.</li>
            <li>
                <h3>Header</h3>
                <h4>Thumbnail <br/> square image of active user</h4>
                <h4>Full Name <br/> activates the portfolio console of the active user, which can be used to edit one's information</h4>
                <h4>User ID <br/> first 4 (link to academy, shows a list of all regions), second 4 (link to region, shows a list of districts), third 4 (link to district, lists the communities in the district), fourth 4 (link to community, lists the users in the community) </h4>
                <h4>Clock</h4>
                <h5>Current Time (White Square)
                    <h6>
                    + <br/>
                    + <br/>
                    </h6>
                </h5>
                <h5>Scheduled Time (Theme Color)</h5>
                <h5>Active Time (Accent Color)</h5>
                <h5>Down Time (WHITE)</h5>
                <h6>
                    Down Time indicates times that the website will be inactive or inaccessible to users for one of the following reasons:<br/>
                    + Site Maintenance: <br/>
                    + <br/>
                    + <br/>
                </h6>
            </li>
            <li>
                <h3>Navigation</h3>
                <h4>Links</h4>
                <h4>Notifications</h4>
                <h4>Settings</h4>
                <h4></h4>
            </li>
            <li>
                <h3>Portfolio Console</h3>
                <h6>
                    + Name: full name, user ID, basics (pronouns, role)<br/><br/>
                    + Profile: sidebar (), portrait (), banner (additional landscape image for employees and scholars), pattern (two tone, subtle, patterned style across the background of containers), edit (for your own profile, this button appears above the profile section), connection roster (), interactions (connect, block, follow)<br/>
                    ++ Biography, Help (results, profile, customization, account tools, technical issues), Results, Voice (), </h6>
            </li>
            <li>
                <h3>Social Console</h3>
                <h6>Connections: groups (# of users, % access, group name), create group (), </h6>
                <h6></h6>
            </li>
            <li>
                <h3>Community Console</h3>
                <h6>Sidebar (leadership team, tags, population, roster), Calendar (dates, deadlines, holidays, birthdays), Bulletin (news, changes in policy, changes in tools, reminders), Forum (discussions, polls), Aggreport (frequency maps, analytics, reflections to user's profile)</h6>
            </li>
            <li>
                <h3>Help Screen</h3>
                <h6>
                    + FAQ: repeat questions, policies, rules <br/>
                    + Tutorials: guided steps, follow along<br/>
                    + Feedback: <br/>
                    + Help Desk: chat, <br/>
                    + <br/>
                </h6>
            </li>
        </ul>

        {/* TESTING COMPONENTS */}
        <ul>
            <li>
                <h3>TESTING COMPONENTS</h3>
                + Introduction<br/>
                + <br/>
                + <br/>
                + Results<br/>
                + Feedback<br/>
                <h6>
                    To-Do List: <br/>
                    + <br/>
                    + <br/>
                </h6>
            </li>
        </ul>

        {/* SCHOLAR COMPONENTS */}
        <ul>
            <li>
                <h3>SCHOLAR COMPONENTS</h3>
                + Library: completion of reading, organization of topic (academy, self, function, trait, subtrait, factor, subfactors)<br/>
                + Training Console: course content, progress through course/module/lesson,<br/>
                + Apprenticeship: sandbox, completion of time in sandbox or performance observations<br/>
                + Examination: progress meter of assessment, <br/>
                + Application: employment (checks for prerequisite training and documents)<br/>
                +
                <h6>
                    To-Do List: <br/>
                    + <br/>
                    + <br/>
                </h6>
            </li>
            
        </ul>


        {/* ADMIN COMPONENTS ------------------------------------------------------------------------------------------------------------------------------- */}

        {/* OFFICE COMPONENTS */}
        <ul>
            <li>
                <h3>OFFICE COMPONENTS</h3>
                + Dashboard<br/>
                + Toolkit<br/>
                + Help Desk Console<br/>
                + Breaktime<br/>
                + Admin Footer<br/>
                <h6>
                    To-Do List: <br/>
                    + <br/>
                    + <br/>
                </h6>
            </li>
            <li>
                <h3>Dashboard</h3>
                <h4></h4>
            </li>
            <li>
                <h3>Toolkit</h3>
                <h4>Agenda</h4>
                <h4>Tracking</h4>
                <h5>Tracking is used to monitor your performance score. Each score is created weekly, and recorded for a year. Monthly averages are stored for 3 years, and yearly averages are stored for 10 years.<br/>
                    The maximum performance score is 100%. Five scores are worth 20% with an optional bonus 15%.
                    </h5>
                    <h5> ACHIEVEMENT (20%) 
                        <h6>
                            The percentage of one's assigned work that was completed in one day.<br/><br/> 
                            SCORE: X/Y<br/>
                            + Completed Work (X): the amount of work (cases, helped users, etc.) that was completed in that day's shift<br/>
                            + Allotted Workshare (Y): cumulative amount of each equal portion of work in a user's assigned pools<br/>
                            + <br/>
                            + <br/>
                            + <br/>
                        </h6>
                    </h5>
                    <h5> ACTIVITY (20%)
                        <h6>
                            The quantity of action points earned in a day.<br/><br/> 
                            SCORE: X/2<br/>
                            + Total Action Points: <br/>
                            <br/>
                            Action Points: points are earned per interval for the queue <br/>
                            + 3: more than the average range of actions submitted (for this queue)<br/>
                            + 2: average range of actions submitted (for this queue)<br/>
                            + 1: less than the average range of actions submitted (for this queue)<br/>
                            + 0: inactive, no actions submitted<br/>
                        </h6>
                    </h5>
                    <h5> ADEQUACY (20%)
                        <h6>
                            SCORE: X/Y<br/>
                            + Cumulative Score (X): the sum of each scored action that week <br/>
                            + Total Number of Scored Actions (Y): the number of actions scored in a week, which should be 3-7 total, for all roles; up to 3 can come from disputes, the rest are randomly generated<br/>
                            <br/>
                            <br/>
                            <br/>
                            Rubrics used for scoring are available in role manuals.<br/>
                        </h6>
                    </h5>
                    <h5> ADHERENCE (20%)
                        <h6>
                            SCORE: X/Y<br/>
                            + Worked Scheduled Time (X): the number of work and break intervals that fall in the user's scheduled worktime<br/>
                            + Scheduled Time (Y): the number of time intervals the user has scheduled themselves to work<br/>
                        </h6>
                    </h5>
                    <h5> ATTENDANCE (20%)
                        <h6>
                            SCORE: X/Y<br/>
                            + Worked Time Intervals (X): a user's cumulative number of worktime and breaktime intervals for the week<br/>
                            + Minimum Worktime Intervals (Y): the minimum of the user's expected worktime based on work roles<br/>
                        </h6>
                    </h5>
                    <h5> ACCOUNTABILITY (15%)
                        <h6>
                            SCORE: X/Y<br/>
                            + Completed Break Activities (X): the number of scheduled break activities completed that week<br/>
                            + Planned Break Activities (Y): the number of scheduled break activities planned that week<br/>
                        </h6>
                    </h5>
                    <h5>INCOME
                        <h6>
                            + Salary: <br/>
                            <br/>
                            + Performance Score Bonus: 30% of revenue from a user's direct district is multiplied by the user's monthly performance score <br/>
                            + Team Share: portion of the revenue from the user's team (community, district, region)<br/>
                        </h6>
                    </h5>
                <h4>Library</h4>
                    <h5>Articles</h5>
                    <h5>Annotations</h5>
                <h4>Training</h4>
                    <h5>Assignments: projects, </h5>
                    <h5>Assessments: comprehension, application</h5>
                    <h5>Discussions: </h5>
                    <h5>Essays: </h5>
                <h4>Team: , queues (), calendar ()</h4>
                    <h5>Leadership
                    <h6>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                    </h6>
                        schedules, basic information, roles), Team (roster, schedules, basic information, stacks), statuses (online, busy, help desk, break), team performance (achievement, case submissions)</h5>
                    <h5>assignments (projects, tasks)</h5>
                    <h5>Queues: status (claimed, channeled, unclaimed, pending, dispute, complete), feedback, reports</h5>
                    <h5>Calendar: schedule stack (you, team, leadership), week/month,</h5>
                    <h5>Memos: updates, reminders</h5>
                    <h5>Bulletin: discussion, polls, birthdays, special occasions</h5>
                    <h5></h5>
                <h4></h4>
                <h4>Settings</h4>
                    <h5>Breaktime: autofill absences (y/n), accountability (y/n)</h5>
                <h4>Help Desk Lite</h4>
                    <h5>Only available for leadership roles</h5>
                    <h5></h5>

            </li>
            <li>
                <h3>Help Desk Console </h3>
            </li>
            <li>
                <h3>Breaktime </h3>
                <h4>breakroom</h4>
                <h4>pastimes</h4>
                <h4>self-care</h4>
                <h4>practice</h4>
                <h4>project</h4>
            </li>
            <li>
                <h3>Admin Footer</h3>
                <h4>Toolkit Toggle: </h4>

            </li>
        </ul>

        {/* MANAGEMENT COMPONENTS */}

        <ul>
            <li>
                <h3>MANAGEMENT COMPONENTS</h3>
                + Roles in Management<br/>
                + <br/>
                + <br/>
                + <br/>
                + <br/>
                + <br/>
                <h6>
                    To-Do List: <br/>
                    + <br/>
                    + <br/>
                </h6>
            </li>

            <li>
                <h3>MANAGEMENT ROLES</h3>


                <h4>REGION MANAGEMENT</h4>

                <h5>REGION DIRECTOR [1600-0000-0000-0000]
                    <h6>
                        + HOURS: 50-60/wk, 35 scheduled minimum<br/>
                            ++ Worktime: 33h20m-40h<br/>
                            ++ Breaktime: 16h40m-20h<br/>
                            <br/>
                        + PAY: $15/hr (Salary: $46,800) + performance bonus (direct members, 4 region shares, 1 academy(management) share)<br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES: region directors, advanced region support, region support<br/>
                    </h6>
                </h5>
                <h5>ADVANCED REGION SUPPORT [1600-9000-0000-0000]
                    <h6>
                        + HOURS: 45-55/wk, 30 scheduled minimum<br/>
                            ++ Worktime: 30h-36h40m<br/>
                            ++ Breaktime: 15h-18h20m<br/>
                            <br/>
                        + PAY: $15/hr (Salary: $42,900) + performance bonus (direct members, 3 region shares)<br/>
                        + <br/>
                    </h6>
                    <h6>
                        + TASKS: <br/>
                        + CASES: <br/>
                        + HELP DESK QUEUES: region support, district manager, advanced district support<br/>
                    </h6>
                </h5>
                <h5>REGION SUPPORT [1600-1000-0000-0000]
                    <h6>
                        + HOURS: 40-50/wk, 25 scheduled minimum<br/>
                            ++ Worktime: 26h40m-33h20m<br/>
                            ++ Breaktime: 13h20m-16h40m<br/>
                            <br/>
                        + PAY: $15/hr (Salary: $39,000) + performance bonus (direct members, 2 region shares)<br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES: district manager, advanced district support, district support<br/>
                    </h6>
                </h5>


                <h4>DISTRICT MANAGEMENT</h4>

                <h5>DISTRICT MANAGER [1600-1234-0000-0000]
                    <h6>
                        + HOURS: 35-45/wk, 25 scheduled minimum <br/>
                            ++ Worktime: 23h20m-30h<br/>
                            ++ Breaktime: 11h40m-15h<br/>
                            <br/>
                        + PAY: $15/hr (Salary: $35,100) + performance bonus (direct members, 4 district shares, 1 region share)<br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES: advanced district support, district support, community attendant<br/>
                    </h6>
                </h5>
                <h5>ADVANCED DISTRICT SUPPORT [1600-1234-9000-0000]
                    <h6>
                        + HOURS: 30-40/wk, 20 scheduled minimum<br/>
                            ++ Worktime: 20h-26h40m<br/>
                            ++ Breaktime: 10h-13h20m<br/>
                            <br/>
                        + PAY: $15/hr (Salary: $31,200) + performance bonus (direct members, 3 district shares)<br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES: district support, community attendant, advanced community support<br/>
                    </h6>
                </h5>
                <h5>DISTRICT SUPPORT [1600-1234-1000-0000]
                    <h6>
                        + HOURS: 25-35/wk, 15 scheduled minimum<br/>
                            ++ Worktime: 16h40m-23h20m<br/>
                            ++ Breaktime: 8h20m-11h40m<br/>
                            <br/>
                        + PAY: $15/hr (Salary: $27,300) + performance bonus (direct members, 2 district shares)<br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES: community attendant, advanced community support, community support<br/>
                    </h6>
                </h5>


                <h4>COMMUNITY MANAGEMENT</h4>

                <h5>COMMUNITY ATTENDANT [1600-1234-1234-0000]
                    <h6>
                        + HOURS: 20-30/wk, 15 scheduled minimum<br/>
                            ++ Worktime: 13h20m-20h<br/>
                            ++ Breaktime: 6h40m-10h <br/>
                            <br/>
                        + PAY:  $15/hr (Salary: $23,400) + performance bonus (direct members, 3 community team shares, 1 district share)<br/>
                    </h6>
                    <h6>
                        + TASKS: schedules team meetings, processes escalations, processes community refunds,  <br/>
                        + CASES: feedback channeling, forum actions, bulletin, reported community support & advanced support & members, support actions, community actions, member actions <br/>
                        + HELP DESK QUEUES: advanced community support, community support, members<br/>
                    </h6>
                </h5>
                <h5>ADVANCED COMMUNITY SUPPORT [1600-1234-1234-9000]
                    <h6>
                        + HOURS: 15-25/wk, 10 scheduled minimum<br/>
                            ++ Worktime: 10h-16h40m<br/>
                            ++ Breaktime: 5h-8h20m<br/>
                            <br/>
                        + PAY: $15/hr (Salary: $19,500) + performance bonus (direct members, 2 community team shares)<br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES: feedback channeling, forum actions, bulletin, reported community support & members, community actions, member actions<br/>
                        + HELP DESK QUEUES: community support, members, visitors<br/>
                    </h6>
                </h5>
                <h5>COMMUNITY SUPPORT [1600-1234-1234-1000]
                    <h6>
                        + HOURS: 10-20/wk, 5 scheduled minimum <br/>
                            ++ Worktime: 6h40m-10h<br/>
                            ++ Breaktime: 3h20m-5h<br/>
                            <br/>
                        + PAY: $15/hr (Salary: $15,600) + performance bonus (direct members, 1 community team share)<br/>
                    </h6>
                    <h6>
                        + TASKS: feedback channeling, forum actions, bulletin, <br/>
                        + CASES: <br/>
                        + HELP DESK QUEUES: members, visitors<br/>
                    </h6>
                </h5>

            </li>
        </ul>

        {/* DESIGNER COMPONENTS */}
        <ul>
            <li>
                <h3>DESIGNER COMPONENTS</h3>
                + Roles in Design<br/>
                + <br/>
                + <br/>
                <h6>
                    To-Do List: <br/>
                    + <br/>
                    + <br/>
                </h6>
            </li>

            <li>
                <h3>DESIGNER ROLES</h3>


                <h4>DESIGN LEADERSHIP</h4>
                <h5>
                    LEAD ASSESSMENT ARCHITECTS

                    <h6>
                        + HOURS: 35-45/wk, 30 scheduled minimum<br/>
                        ++ Worktime: hm-hm<br/>
                        ++ Breaktime: hm-hm<br/>
                        <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS: maintained training (), coordinates the updating process, maintains integrity of personality structures, decision power when department stalls, editor of the manuals, can create macro structures (selves, functions, traits), analyze aggresults<br/>
                        + CASES: <br/>
                        + HELP DESK QUEUES: lead assessment engineers, assessment engineer support, design coordinators<br/>
                    </h6>
                </h5>
                <h5> ASSESSMENT ARCHITECT SUPPORT
                    <h6>
                        + HOURS: 30-40/wk, 25 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES: design coordinators, advanced design support<br/>
                    </h6>
                </h5>


                <h4>DESIGN TEAM</h4>

                <h5> DESIGN COORDINATORS
                    <h6>
                        + HOURS: 25-35/wk, 20 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES: assessment feedback, <br/>
                        + HELP DESK QUEUES: advanced design support, design support, advanced assessment support<br/>
                    </h6>
                </h5>
                <h5> ADVANCED DESIGN SUPPORT
                    <h6>
                        + HOURS: 20-30/wk, 15 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES: design support, advanced assessment support, assessment support<br/>
                    </h6>
                </h5>
                <h5> DESIGN SUPPORT
                    <h6>
                        + HOURS: 15-25/wk, 10 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES: advanced assessment support, assessment support, general employees<br/>
                    </h6>
                </h5>


                <h4>ASSESSMENT SUPPORT</h4>

                <h5> ADVANCED ASSESSMENT SUPPORT
                    <h6>
                        + HOURS: 10-20/wk, 5 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS: training ()<br/>
                        + CASES: assessment feedback, results feedback<br/>
                        + HELP DESK QUEUES: assessment support, results users, assessment users<br/>
                    </h6>
                </h5>
                <h5> ASSESSMENT SUPPORT
                    <h6>
                        + HOURS: 5-15/wk, 5 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS: training<br/>
                        + CASES: assessment feedback, results feedback<br/>
                        + HELP DESK QUEUES: results users, assessment users<br/>
                    </h6>
                </h5>

            </li>

            <li>
                <h3>DESIGNER TOOLS</h3>


                <h4>ASSESSMENT EDITOR</h4>

                <h5>Warnings: </h5>
                <h5>Further Reading: </h5>

                <h4>MANUAL EDITOR</h4>

                <h5></h5>

                <h4>RESULTS EDITOR</h4>

                <h5></h5>
            </li>
        </ul>

        {/* ACADEMIC COMPONENTS */}
        <ul>
            <li>
                <h3>ACADEMIC COMPONENTS</h3>
                + Roles in Academics<br/>
                + <br/>
                + <br/>
                <h6>
                    To-Do List: <br/>
                    + <br/>
                    + <br/>
                    + <br/>
                    + <br/>
                    + <br/>
                </h6>
            </li>
            <li>
                <h3>Academic Roles</h3>


                <h4>EDUCATIONAL LEADERSHIP</h4>

                <h5>INSTRUCTIONAL DIRECTORS
                    <h6>
                        + HOURS: 40-50/wk, 30 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES:<br/>
                    </h6>
                </h5>
                <h5>INSTRUCTIONAL COORDINATORS
                    <h6>
                        + HOURS: 35-45/wk, 25 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES:<br/>
                    </h6>
                </h5>
                <h5>INSTRUCTORS
                    <h6>
                        + HOURS: 30-40/wk, 20 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES:<br/>
                    </h6>
                </h5>


                <h4>EDUCATIONAL SUPPORT</h4>

                <h5>ADVANCED INSTRUCTOR SUPPORT
                    <h6>
                        + HOURS: 25-35/wk, 20 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES:<br/>
                    </h6>
                </h5>
                <h5> INSTRUCTOR SUPPORT
                    <h6>
                        + HOURS: 20-30/wk, 15 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES:<br/>
                    </h6>
                </h5>
                <h5> ADVANCED SCHOLAR SUPPORT
                    <h6>
                        + HOURS: 15-25/wk, 10 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES:<br/>
                    </h6>
                </h5>
                <h5>SCHOLAR SUPPORT
                    <h6>
                        + HOURS: 10-20/wk, 5 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES: library feedback, course feedback<br/>
                        + HELP DESK QUEUES:<br/>
                    </h6>
                </h5>
            </li>

        </ul>

        {/* DEVELOPER COMPONENTS */}
        <ul>
            <li>
                <h3>DEVELOPER COMPONENTS</h3>
                + Roles in Development<br/>
                + <br/>
                + <br/>
                <h6>
                    To-Do List: <br/>
                    + <br/>
                    + <br/>
                </h6>
            </li>
            <li>
                <h3>DEVELOPER ROLES</h3>

                <h4>ENGINEERS</h4>
                <h5>LEAD ENGINEERS
                    <h6>
                        + HOURS: 35-45/wk, 30 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS: monitors development progress, sets development goals<br/>
                        + CASES: user reports (engineer support, lead developers, advanced developer support, QA leads, advanced QA support)<br/>
                        + HELP DESK QUEUES: lead engineers, engineer support, lead developers<br/>
                    </h6>
                </h5>
                <h5>ENGINEER SUPPORT
                    <h6>
                        + HOURS: 30-40/wk, 25 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES: user reports (advanced developer support, developer support, advanced QA support, QA support)<br/>
                        + HELP DESK QUEUES: lead developers, advanced developer support, QA leads, advanced QA support<br/>
                    </h6>
                </h5>

                <h4>DEVELOPER</h4>
                <h5>LEAD DEVELOPERS
                    <h6>
                        + HOURS: 25-35/wk, 20 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES: lead developers, advanced developer support, developer support<br/>
                    </h6>
                </h5>
                <h5>ADVANCED DEVELOPER SUPPORT
                    <h6>
                        + HOURS: 20-30/wk, 15 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES: developer support, members (tech assistance)<br/>
                    </h6>
                </h5>
                <h5>DEVELOPER SUPPORT
                    <h6>
                        + HOURS: 10-20/wk, 5 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES: website bugs, system errors, typos<br/>
                        + HELP DESK QUEUES: members (tech assistance)<br/>
                    </h6>
                </h5>

                <h4>QUALITY ASSURANCE</h4>
                <h5>QUALITY ASSURANCE LEAD
                    <h6>
                        + HOURS: 20-30/wk, 15 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS: unit testing code (), checking accessibility metrics ()<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES: quality assurance leads, advanced QA support, QA support<br/>
                    </h6>
                </h5>
                <h5>ADVANCED QUALITY ASSURANCE SUPPORT
                    <h6>
                        + HOURS: 10-20/wk, 5 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES: QA support, members (tech issues, accessibility issues)<br/>
                    </h6>
                </h5>
                <h5>QUALITY ASSURANCE SUPPORT
                    <h6>
                        + HOURS: 5-15/wk, 5 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus ()<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES: members (tech issues, accessibility issues)<br/>
                    </h6>
                </h5>
            </li>
        </ul>

        {/* CREATOR COMPONENTS */}
        <ul>
            <li>
                <h3>CREATOR COMPONENTS</h3>
                + Roles in Creative<br/>
                + <br/>
                + <br/>
                <h6>
                    To-Do List: <br/>
                    + <br/>
                    + <br/>
                    + <br/>
                </h6>
            </li>
            <li>
                <h3>CREATOR ROLES</h3>


                <h4>TRANSLATORS</h4>

                <h5>LEAD TRANSLATORS
                    <h6>
                        + HOURS: 30-40/wk, 20 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus (3 translator shares)<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS: <br/>
                        + CASES: <br/>
                        + HELP DESK QUEUES: lead translators, advanced translator support, translator support<br/>
                    </h6>
                </h5>
                <h5>ADVANCED TRANSLATOR SUPPORT
                    <h6>
                        + HOURS: 20-30/wk, 15 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus (2 translator shares)<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES: translator support, fluent members<br/>
                    </h6>
                </h5>
                <h5>TRANSLATOR SUPPORT
                    <h6>
                        + HOURS: 10-20/wk, 10 scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus (1 translator share)<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES: fluent members<br/>
                    </h6>
                </h5>




                <h4>WRITTEN CREATORS</h4>

                <h5>LEAD EDITORS
                    <h6>
                        + HOURS: 30-40/wk, X scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus (3 writer shares)<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS: <br/>
                        + CASES: <br/>
                        + HELP DESK QUEUES: editorial support, writer support <br/>
                    </h6>
                </h5>
                <h5>EDITORIAL SUPPORT
                    <h6>
                        + HOURS: 25-35/wk, X scheduled minimum<br/>
                            ++ Worktime: hm-hm<br/>
                            ++ Breaktime: hm-hm<br/>
                            <br/>
                        + PAY: performance bonus (2 writer shares)<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES: writer support, writers<br/>
                    </h6>
                </h5>
                <h5>WRITER SUPPORT
                    <h6>
                        + HOURS: 20-30/wk, 15 scheduled minimum <br/>
                            ++ Worktime: hm-hm <br/>
                            ++ Breaktime: hm-hm <br/>
                            <br/>
                        + PAY: performance bonus (2 writer shares)<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS: <br/>
                        + CASES: <br/>
                        + HELP DESK QUEUES: writers, general employees<br/>
                    </h6>
                </h5>
                <h5>WRITERS
                    <h6>
                        + HOURS: 15-25/wk, 10 scheduled minimum <br/>
                            ++ Worktime: hm-hm <br/>
                            ++ Breaktime: hm-hm <br/>
                            <br/>
                        + PAY: performance bonus (1 writer share)<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS: <br/>
                        + CASES: <br/>
                    </h6>
                </h5>



                <h4>MEDIA CREATORS</h4>

                <h5>LEAD MEDIA SPECIALISTS
                    <h6>
                        + HOURS: 30-40/wk, 25 scheduled minimum<br/>
                            ++ Worktime: 20h-26h40m<br/>
                            ++ Breaktime: 10h-13h20m<br/>
                            <br/>
                        + PAY: performance bonus (4 artist share)<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES: lead media specialists, media specialists, artist support<br/>
                    </h6>
                </h5>
                <h5>MEDIA SPECIALISTS
                    <h6>
                        + HOURS: 25-35/wk, 20 scheduled minimum<br/>
                            ++ Worktime: 16h40m-23h20m<br/>
                            ++ Breaktime: 8h20m-11h40m<br/>
                            <br/>
                        + PAY: performance bonus (3 artist share)<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS:<br/>
                        + CASES:<br/>
                        + HELP DESK QUEUES: artist support, artists<br/>
                    </h6>
                </h5>
                <h5>ARTIST SUPPORT
                    <h6>
                        + HOURS: 20-30/wk, 15 scheduled minimum<br/>
                            ++ Worktime: 13h20m-20h<br/>
                            ++ Breaktime: 6h40m-10h<br/>
                            <br/>
                        + PAY: performance bonus (2 artist shares)<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS: help desk (5-10h), studio (rem.)<br/>
                        + CASES: commissions, creator feedback, <br/>
                        + HELP DESK QUEUES: artists, general employees<br/>
                    </h6>
                </h5>
                <h5>ARTISTS
                    <h6>
                        + HOURS: 15-25/wk, 10 scheduled minimum<br/>
                            ++ Worktime: 10h-16h40m<br/>
                            ++ Breaktime: 5h-8h20m<br/>
                            <br/>
                        + PAY: performance bonus (1 artist share)<br/>
                    </h6>
                    <h6>
                        + REQUIREMENTS: <br/>
                    </h6>
                    <h6>
                        + TASKS: visual studio, audio studio, video studio, digital studio<br/>
                        + CASES: commissions, commission feedback, <br/>
                    </h6>
                </h5>
            </li>
        </ul>

        {/* COMMITTEE COMPONENTS */}
        <ul>
            <li>
                <h3>COMMITTEE COMPONENTS</h3>
                + Roles in Committee<br/>
                + C-Suite: Founder, Executive<br/>
                + Appointment: <br/>
                + Committee<br/>
                + Panel<br/>
                + Board<br/>
                + <br/>
                <h6>
                    To-Do List: <br/>
                    + <br/>
                    + <br/>
                </h6>
            </li>
            <li>
                <h5>
                    REVENUE BREAKDOWN
                    <h6>
                        + Community (30-55%): supports community staff<br/>
                        + Performance (0-25%): additional income based on grades related to work performance; a user's monthly grade (in percent) multiplied by 25% of the direct revenue of members serviced by the user equals the value of the income bonus<br/>
                        + Academy (20%): supports academy roles in all departments; designers (5%), academics (5%), developers (5%), creators (5%)<br/>
                        + District (15%): <br/>
                        + Region (10%): <br/>
                    </h6>
                </h5>
            </li>
        </ul>

        </div>
    </div>
)}