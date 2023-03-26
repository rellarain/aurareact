import React from 'react';


export default function Sidebar() {return (
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
            <ul>
                <li>
                </li>

                {/* Console */}
                <li>
                    <h3>CONSOLES</h3>
                    <h4>Visitor Consoles</h4>
                        <h5>Application</h5>
                    <h4>Member Consoles</h4>
                        <h5>Portfolio Console</h5>
                        <h6>
                            + Console Title: the display name of the user<br/>
                            + Sidebar Buttons: edit (if you are viewing your own account), help, <br/>
                            + Help: interpretations, portfolio tool assistance, technical issues<br/>
                            + Sidebar: full picture (), banner (if scholar/employee), biography, basics, interactions (connect, block)<br/>
                        </h6>
                        <h5>Connection Console</h5>
                        <h6>Groups: (# of users, % access, group name), add group, header, desk, help</h6>
                    <h4>Scholar Consoles</h4>
                        <h5>Library</h5>
                            <h6>
                                + Progress Meter: completion of reading<br/>
                                + Console Title: organization (self/function/trait/subtrait/academy/etc.)<br/>

                            </h6>
                        <h5>Training</h5>
                            <h6>
                                + Progress Meter: completion of module/course<br/>
                                + Console Title: [BLANK] Training<br/>
                            </h6>
                        <h5>Apprenticeship</h5>
                            <h6>
                                + Progress Meter: completed hours of performance observation<br/>
                            </h6>
                        <h5>Examination</h5>
                            <h6>
                                + Progress Meter: time remaining<br/>
                            </h6>
                    <h4>Admin Consoles</h4>

                    <h6>Help</h6>
                    FAQ (common questions, policies, rules), tutorials (guided steps, follow along), feedback (), help desk (chat with an available expert on this tool/page/assessment)<br/>
                    <br/>
                    <h6></h6>
                    <br/>
                    <br/>
                </li>
            </ul>
            <br/>
            <br/>


            {/* MEMBER COMPONENTS ------------------------------------------------------------------------------------------------------------------------------- */}


            {/* MEMBER COMPONENTS */}
            <ul>
                <li>
                    <h3>MEMBER COMPONENTS</h3>
                    + Header <br/>
                    + Navigation: links, notifications, settings<br/>
                    + Portfolio Console: profile, results, voice, connections roster<br/>
                    + Social Console<br/>
                    + Community Console: forum, events<br/>
                    + Help Screen<br/>
                    <h6>
                        To-Do List: <br/>
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
                    <h6></h6>
                </li>
                <li>
                    <h3>Portfolio Console</h3>
                    <h6>Profile (Sidebar; Name, Role, Biography), Results, Training</h6>
                </li>
                <li>
                    <h3>Social Console</h3>
                    <h6></h6>
                </li>
                <li>
                    <h3>Community Console</h3>
                    <h6>Sidebar (leadership team, tags, population, roster), Calendar (dates, deadlines, holidays, birthdays), Bulletin (news, changes in policy, changes in tools, reminders), Forum (discussions, polls), Aggreport (frequency maps, analytics, reflections to user's profile)</h6>
                </li>
                <li>
                    <h3>Help Screen</h3>
                    <h6></h6>
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
                    + Library: <br/>
                    + Training: course content<br/>
                    + Apprenticeship: sandbox<br/>
                    + Examination: <br/>
                    + Application: employment (checks for prerequisite training and documents)<br/>
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
                        <h5> Adequacy (20%)
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
                        <h5> Accountability (15%)
                            <h6>
                                SCORE: X/Y<br/>
                                + Completed Break Activities (X): the number of scheduled break activities completed that week<br/>
                                + Planned Break Activities (Y): the number of scheduled break activities planned that week<br/>
                            </h6>
                        </h5>
                        <h5>Income
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
                        <h5></h5>
                    <h4>Training</h4>
                        <h5>Assignments: projects, </h5>
                        <h5>Assessments: comprehension, application</h5>
                        <h5>Discussions: </h5>
                        <h5>Essays: </h5>
                        <h5></h5>
                        <h5></h5>
                    <h4>Team</h4>
                    <h5>Leadership (schedules, basic information, roles), Team (roster, schedules, basic information, stacks), statuses (online, busy, help desk, break), team performance (achievement, case submissions)</h5>
                    <h4></h4>
                    <h4>Settings</h4>
                        <h5>Breaktime: autofill absences (y/n), accountability (y/n)</h5>
                        <h5></h5>
                        <h5></h5>
                        <h5></h5>
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



                    <h4>COMMUNITY MANAGEMENT</h4>

                    <h5>COMMUNITY ATTENDANT
                        <h6>
                            + HOURS: 20-30/wk, 15 scheduled minimum<br/>
                                ++ Worktime: 13h20m-20h<br/>
                                ++ Breaktime: 6h40m-10h <br/>
                                <br/>
                            + PAY:  $15/hr (Salary: $23,400) + performance bonus (direct members, 3 community team shares, 1 district share)<br/>
                        </h6>
                        <h6>
                            + TASKS: <br/>
                            + CASES: <br/>
                            + HELP DESK QUEUES: <br/>
                        </h6>
                    </h5>
                    <h5>ADVANCED COMMUNITY SUPPORT
                        <h6>
                            + HOURS: 15-25/wk, 10 scheduled minimum<br/>
                                ++ Worktime: 10h-16h40m<br/>
                                ++ Breaktime: 5h-8h20m<br/>
                                <br/>
                            + PAY: $15/hr (Salary: $19,500) + performance bonus (direct members, 2 community team shares)<br/>
                        </h6>
                        <h6>
                            + TASKS:<br/>
                            + CASES:<br/>
                            + HELP DESK QUEUES:<br/>
                        </h6>
                    </h5>
                    <h5>COMMUNITY SUPPORT
                        <h6>
                            + HOURS: 10-20/wk, 5 scheduled minimum <br/>
                                ++ Worktime: 6h40m-10h<br/>
                                ++ Breaktime: 3h20m-5h<br/>
                                <br/>
                            + PAY: $15/hr (Salary: $15,600) + performance bonus (direct members, 1 community team share)<br/>
                        </h6>
                        <h6>
                            + TASKS: <br/>
                            + CASES: <br/>
                            + HELP DESK QUEUES: <br/>
                        </h6>
                    </h5>



                    <h4>DISTRICT MANAGEMENT</h4>

                    <h5>DISTRICT MANAGER
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
                            + HELP DESK QUEUES:<br/>
                        </h6>
                    </h5>
                    <h5>ADVANCED DISTRICT SUPPORT
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
                            + HELP DESK QUEUES:<br/>
                        </h6>
                    </h5>
                    <h5>DISTRICT SUPPORT
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
                            + HELP DESK QUEUES:<br/>
                        </h6>
                    </h5>



                    <h4>REGION MANAGEMENT</h4>

                    <h5>REGION DIRECTOR
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
                            + HELP DESK QUEUES:<br/>
                        </h6>
                    </h5>
                    <h5>ADVANCED REGION SUPPORT
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
                            + HELP DESK QUEUES: <br/>
                        </h6>
                    </h5>
                    <h5>REGION SUPPORT
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
                            + HELP DESK QUEUES:<br/>
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

                    <h5> LEAD ASSESSMENT ENGINEER
                        <h6>
                            + HOURS: 40-50/wk, 35 scheduled minimum<br/>
                                ++ Worktime: hm-hm<br/>
                                ++ Breaktime: hm-hm<br/>
                                <br/>
                            + PAY: performance bonus ()<br/>
                        </h6>
                        <h6>
                            + REQUIREMENTS: <br/>
                        </h6>
                        <h6>
                            + TASKS: maintained training (), <br/>
                            + CASES: <br/>
                            + HELP DESK QUEUES: lead assessment engineers, assessment engineers, assessment engineer support<br/>
                        </h6>
                    </h5>
                    <h5> ASSESSMENT ENGINEER
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
                            + TASKS:<br/>
                            + CASES:<br/>
                            + HELP DESK QUEUES: assessment engineer support, design coordinators<br/>
                        </h6>
                    </h5>
                    <h5> ASSESSMENT ENGINEER SUPPORT
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
                            + TASKS:<br/>
                            + CASES:<br/>
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
                            + TASKS:<br/>
                            + CASES:<br/>
                            + HELP DESK QUEUES: results users, assessment users<br/>
                        </h6>
                    </h5>
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
                    </h6>
                </li>
                <li>
                    <h5>
                        <h6>
                            + HOURS: X-X/wk, X scheduled minimum<br/>
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
                    <h5>
                        <h6>
                            + HOURS: X-X/wk, X scheduled minimum<br/>
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
                </li>

            </ul>

            {/* CREATOR COMPONENTS */}
            <ul>
                <li>
                    <h3>CREATOR COMPONENTS</h3>
                    + Roles in Creative<br/>
                    + <br/>
                    + <br/>
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
            </ul>

            <ul>
                <li>ROLE COMPONENTS</li>
                {/* Management Consoles */}
                <li>
                    <h3>MANAGEMENT</h3>

                    <h5>Team</h5>
                        <h6>
                            + Assignments: projects(), tasks ()<br/>
                            + Queues: status (claimed, channeled, unclaimed, pending, dispute, complete), feedback, reports<br/>
                            + Calendar: schedule stack (you, team, leadership), week/month, <br/>
                        </h6>                    
                    <h5>Department</h5>
                        <h6>
                            + Memos: updates, reminders <br/>
                            + Bulletin: discussion, polls, birthdays, special occasions<br/> 
                        </h6>
                </li>
                {/* Designer Consoles */}
                <li>
                    <h5>DESIGNERS<br/></h5>
                    Some of the tools for these positions include:
                    <h6>Introduction Editor</h6>
                    + Warnings: <br/>
                    + Further Reading: <br/>
                    <h6>Assessment Editor</h6>
                    <h6>Results Editor</h6>
                    <h6>Assessment Editor</h6>
                </li>
            </ul>


            <ul>
                <li>ROLE DESCRIPTIONS</li>
                <br/>
                {/* Management */}
                <li>
                    <h3>MANAGEMENT</h3>

                    <h5>Community Attendant</h5>
                    Leads the community management team, schedules meeting days, processes escalations, refunds<br/><br/>
                    <h6>CASES: feedback channeling, forum actions, bulletin, reported community support & advanced support & members, support actions, community actions, member actions</h6>
                    <h6>HELP DESK: advanced community support, community support, members; some assessments</h6>
                    <h6>PAY: $15/hr + performance bonus (direct members, 3 community team shares, 1 district team share)</h6>

                    <h5>Advanced Community Support</h5>
                    <h6>CASES: feedback channeling, forum actions, bulletin, reported community support & members, community actions, member actions</h6>
                    <h6>HELP DESK: community support, members, visitors</h6>
                    <h6>PAY: $15/hr + performance bonus (direct members, 2 community team shares)</h6>

                    <h5>Community Support</h5>
                    <h6>CASES: feedback channeling, forum actions, bulletin, </h6>
                    <h6>HELP DESK: members, visitors</h6>
                    <h6>PAY: $15/hr + performance bonus (direct members, 1 community team share)</h6>

                    <h4>District Management</h4>
                    Management teams responsible for up to 10,000 attendants<br/><br/>

                    <h5>District Manager</h5>
                    <h6>HELP DESK: advanced district support, district support, community attendants</h6>
                    <h6>PAY: $15/hr + performance bonus (direct members, 4 district team shares, 1 region team share)</h6>

                    
                    <h5>Advanced District Support</h5>
                    <h6>HELP DESK: district support, community attendants, advanced community support</h6>
                    <h6>PAY: $15/hr + performance bonus (direct members, 3 district team shares)</h6>

                    <h5>District Support</h5>
                    <h6>CASES: attendant actions, </h6>
                    <h6>HELP DESK: community attendants, advanced community support, community support</h6>
                    <h6>PAY: $15/hr + performance bonus (direct members, 2 district team share)</h6>

                    <h4>Region Management</h4>
                    Management teams responsible for up to 10,000 managers<br/><br/>

                    <h5>Region Director</h5>
                    <h6>HELP DESK: advanced region support, region support, district managers</h6>
                    <h6>PAY: $15/hr + performance bonus (direct members, 4 region team shares, 1 academy share)</h6>

                    <h5>Advanced Region Support</h5>
                    <h6>HELP DESK: region support, district managers, advanced district managers</h6>
                    <h6>PAY: $15/hr + performance bonus (direct members, 3 region team shares)</h6>

                    <h5>Region Support</h5>
                    <h6>CASES: manager actions, attendant actions</h6>
                    <h6>HELP DESK: district managers, advanced district support, district support</h6>
                    <h6>PAY: $15/hr + performance bonus (direct members, 2 region team share)</h6>
                </li>
                <br/>
                {/* Designers */}
                <li>
                    <h3>DESIGNERS</h3>
                    <h4>Designer Leadership</h4>
                    <h5>Assessment Engineer</h5>
                        This position is for the leader(s) of the design department. <br/>
                        <h6>TASKS: coordinates the updating process, maintains integrity of personality structures, decision power when department stalls, editor of the manuals, can create macro structures (selves, functions, traits), analyze aggresults</h6>
                        <h6>HOURS: 35-45/wk; 30 scheduled</h6>
                        <h6>PAY: 7 academy shares</h6>
                    <h5>Engineer Support</h5>
                        <h6>HOURS: 30-40/wk; 25 scheduled</h6>
                        <h6>PAY: 6 academy shares</h6>
                    <h4>Design Team</h4>
                    <h5>Design Coordinators</h5>
                        This position is for assistive leadership in the design department.<br/>
                        <h6>TASKS: maintains integrity of trait structures for specific functions</h6>
                        <h6>HOURS: 25-35/wk; 20 scheduled</h6>
                        <h6>PAY: 5 academy shares</h6>
                    <h5>Advanced Design Support</h5>
                        This position is for <br/>
                        <h6>HOURS: 20-30/wk; 15 scheduled</h6>
                        <h6>HELP DESK: assessment support, assessment members</h6>
                        <h6>PAY: 4 academy shares</h6>
                    <h5>Design Support</h5>
                        <h6>HOURS: 15-25/wk; 10 scheduled</h6>
                        <h6>HELP DESK: assessment support, assessment members</h6>
                        <h6>PAY: 3 academy shares</h6>
                    <h4>Assessment Support</h4>
                    <h5>Advanced Assessment Support</h5>
                        <br/><br/>
                        <h6>TASKS: training, </h6>
                        <h6>CASES: feedback channeling, </h6>
                        <h6>HOURS: 10-20/wk; 5 scheduled</h6>
                        <h6>HELP DESK: assessment assistance, results assistance</h6>
                        <h6>PAY: 2 academy shares</h6>
                    <h5>Assessment Support</h5>
                        <br/><br/>
                        <h6>TASKS: training</h6>
                        <h6>CASES: assessment feedback </h6>
                        <h6>HOURS: 5-15/wk; 5 scheduled</h6>
                        <h6>HELP DESK: results assistance</h6>
                        <h6>PAY: 1 academy share</h6>
                </li>
                <br/>
                {/* Academics */}
                <li>
                    <h3>ACADEMICS</h3>
                    <h4>Educational Leadership</h4>
                    <h5>Instructional Directors</h5>
                        <br/>
                        <h6>HOURS: 35-45/wk; 30 scheduled</h6>
                        <h6>PAY: 7 academy shares</h6>
                    <h5>Instructional Coordinators</h5>
                        <br/>
                        <h6>HOURS: 30-40/wk; 25 scheduled</h6>
                        <h6>PAY: 6 academy shares</h6>
                    <h5>Instructors</h5>
                        <br/>
                        <h6>HOURS: 25-35/wk; 20 scheduled</h6>
                        <h6>PAY: 5 academy shares</h6>
                    <h4>Educational Support</h4>
                    <h5>Advanced Instructor Support</h5>
                        <br/>
                        <h6>HOURS: 20-30/wk; 25 scheduled</h6>
                        <h6>PAY: 4 academy shares</h6>
                    <h5>Instructor Support</h5>
                        <br/>
                        <h6>HOURS: 15-25/wk; 10 scheduled</h6>
                        <h6>PAY: 3 academy shares</h6>
                    <h5>Advanced Scholar Support</h5>
                        <br/>
                        <h6>HOURS: 10-20/wk; 5 scheduled</h6>
                        <h6>PAY: 2 academy shares</h6>
                    <h5>Scholar Support</h5>
                        Scholar support agents must have passed the class they are supporting.<br/>
                        <br/>
                        <h6>CASES: library feedback, course feedback, </h6>
                        <h6>HOURS: 5-15/wk; 5 scheduled</h6>
                        <h6>PAY: 1 academy share</h6>
                    <br/>
                </li>
                <br/>
                {/* Developers */}
                <li>
                    <h3>DEVELOPERS</h3>
                    <h4>Development Leadership</h4>
                    <h5>Development Architects</h5>
                    <h5>Development Coordinators</h5>
                    <h4>Quality Assurance (QA)</h4>
                    <h5>QA Team Member</h5>
                    <h5>QA Support</h5>
                    <h4>Developers</h4>
                    <h5>Dev Team Member</h5>
                    <h5>Advanced Developer Support</h5>
                    <h5>Developer Support</h5>
                </li>


            </ul>
            <br/>

        </div>

        
    </div>
)}