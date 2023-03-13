import React from 'react';

export default function UserConsole() {return (
    <div id='userConsole' className='userConsoleMax'>
        <div id='userConsoleProgress'></div>
        <ConsoleTitle/>
        <div id='userConsoleClose'></div>
        <div id='userConsoleSidebar'>
            <TeamSchedule/>
            <TeamBdays/>

            
            <ul>
                <li>Console Sidebar</li>
            </ul>
            <br/>
            <ul>
                <li>To-Do List</li>
                <li>
                    <h5>Draft Console's Basic Layout</h5>
                    Progress: <br/>
                    Title: <br/>
                    Sidebar: <br/>
                    Desk: <br/>
                    Help: <br/>
                    <br/>
                    <h6>Portfolio</h6>
                    Title: user's display name<br/>
                    Sidebar: interactions () <br/>
                    Desk: profile (bio, picture), results ()<br/>
                    Help: interpreters ()<br/>                    
                    <br/>
                    <h6>Connections</h6>
                    Title: Connections <br/>
                    Sidebar: Groups (# of users, % access, group name), add group <br/>
                    Desk: <br/>
                    Help: <br/>                    
                    <br/>
                    <h6>Management</h6>
                    Progress: achievement (shows percentage of assigned work load)<br/>
                    Title: support/attendant/manager/director<br/>
                    Sidebar: links (), department (active), queues (users in queue, cases in queue), <br/>
                    Desk: forum (), bulletin (news, upcoming, ), members (), manage (support, attendants, managers), feedback processing ()<br/>
                    Help: <br/>                    
                    <br/>


                    {/* 
                    <h6>Bulletin</h6>
                    Title: <br/>
                    Sidebar: <br/>
                    Desk: <br/>
                    Help: <br/>
                    <br/>
                    <h6>Forum</h6>
                    Title: <br/>
                    Sidebar: <br/>
                    Desk: <br/>
                    Help: <br/>                    
                    <br/>
                    <h6>Assessments</h6>
                    Progress: <br/>
                    Title: <br/>
                    Sidebar: <br/>
                    Desk: <br/>
                    Help: <br/>                    
                    <br/>
                    <h6>Training</h6>
                    Progress: <br/>
                    Title: <br/>
                    Sidebar: <br/>
                    Desk: <br/>
                    Help: <br/>                    
                    <br/>
                    <h6>Break Time</h6>
                    Progress: <br/>
                    Title: <br/>
                    Sidebar: <br/>
                    Desk: <br/>
                    Help: <br/>                                    
                    <br/>
                    <h6>Designer</h6>
                    Progress: <br/>
                    Title: <br/>
                    Sidebar: <br/>
                    Desk: <br/>
                    Help: <br/>                    
                    <br/>
                    <h6>Instructor</h6>
                    Progress: <br/>
                    Title: <br/>
                    Sidebar: <br/>
                    Desk: <br/>
                    Help: <br/>                    
                    <br/>
                    <h6>Studios</h6>
                    Progress: <br/>
                    Title: <br/>
                    Sidebar: <br/>
                    Desk: <br/>
                    Help: <br/>                    
                    <br/>
                    <h6>Developer</h6>
                    Progress: <br/>
                    Title: <br/>
                    Sidebar: <br/>
                    Desk: <br/>
                    Help: <br/>                    
                    <br/>
                    <h6>Committee</h6>
                    <br/>
                    <br/>
                    <h6>Feedback Processing</h6>
                    <br/>
                    <br/>
                    <br/>
                    
                    */}
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {/* BASIC COMPONENTS */}
            <ul>
                <li>BASIC COMPONENTS</li>
                <li>
                    <h5>Header</h5>
                    <br/>
                    <h6>Picture</h6>
                    square thumbnail of active user<br/>
                    <br/>
                    (blank for visitors)<br/>
                    <h6>Display Name</h6>
                    Brings up Portfolio/Profile component<br/>
                    <br/>
                    (only members)<br/>
                    <h6>User ID</h6>
                    Set of links that bring up collective pages<br/>
                    +  Academy Page: first 4; academy bulletin, list of regions starting with your own<br/>
                    +  Region Page: second 4; region bulletin, list of districts starting with your own<br/>
                    +  District Page: third 4; district bulletin, list of communities starting with your own<br/>
                    +  Community Page: end 4; community bulletin, list of members starting with you<br/>
                    <br/>
                    (only members)<br/>
                    <h6>Clock</h6>
                    Shows current time with a white square; connects to selected time zone<br/>
                    Shows active time, or time spent using tools, with accent squares<br/>
                    <br/>
                    For employees, accent time is for worktime and alert is for breaktime<br/>
                    <br/>
                    (only members)<br/>
                </li>
                <li>
                    <h5>Navigation</h5>
                </li>
                <li>
                    <h5>Help Screen</h5>
                </li>
                <li>
                    <h5>Consoles</h5>
                    <br/>
                    <br/>
                    <h6>Title</h6>
                    Console Name: <br/>
                    Progress Meter: <br/>
                    Close: <br/>
                    <br/>
                    <h6>Desk</h6>
                    <br/>
                    <br/>
                    <h6>Sidebar</h6>
                    <br/>
                    <br/>
                    <h6>Help</h6>
                    <br/>
                    <br/>
                    <h6></h6>
                    <br/>
                    <br/>
                </li>
                <li>
                    <h5></h5>
                </li>
                <li>
                    <h5></h5>
                </li>
            </ul>
            <br/>
            {/* Applications */}
            <ul>
                <li>APPLICATIONS</li>
                <li>
                    <h5>Membership</h5>
                    <br/>
                </li> 
                <li>
                    <h5>Scholarship</h5>
                    <br/>
                </li>
                <li>
                    <h5>Support</h5>
                    <br/>
                </li>
                <li>
                    <h5>Roles</h5>
                    <br/>
                </li>
                <li>
                    <h5>Management</h5>
                    -Checking for training requirements automatically<br/>
                    -Checking for collective management portfolio<br/>
                    <br/>
                    <br/>
                </li>
                <li>
                    <h5></h5>
                    <br/>
                </li>
            </ul>
            <br/>

            {/* VISITOR COMPONENTS */}
            <ul>
                <li>VISITOR COMPONENTS</li>
                <li></li>
            </ul>
            <br/>
            <br/>

            {/* MEMBER COMPONENTS */}
            <ul>
                <li>MEMBER COMPONENTS</li>
                {/* Portfolio */}
                <li>These elements are limited to users with Aura Academy accounts.</li>
                <li>
                    <h5>Portfolio Console</h5>
                    <br/>
                    <h6>Profile (Sidebar)</h6>
                    Name: <br/>
                    Role: <br/>
                    Biography: <br/>
                    <br/>
                    <h6>Results</h6>
                    <br/>
                    <h6>Training</h6>
                    Certifications:<br/>
                    <br/>
                    <h6></h6>
                    <br/>
                </li>
                {/* Connections */}
                <li>
                    <h5>Connections Console</h5>
                    <h6>Groups</h6>
                    <br/>
                </li>
                {/* Community */}
                <li>
                    <h5>Community Console</h5>
                    <h6>Metaconsole</h6>
                    Leadership: <br/>
                    Tags: <br/>
                    Population: number of people in community<br/>
                    Roster: listed with thumbnails<br/>
                    <br/>
                    Calendar:<br/>
                    + Dates: deadlines, holidays, birthdays<br/>
                    <h6>Bulletin</h6>
                    News: Academy, Regional, District, Community<br/>
                    Changes: policy, tools, features, etc.<br/>
                    Reminders: <br/>
                    <br/>
                    <h6>Forum</h6>
                    Discussions:<br/>
                    Polls: <br/>
                    <h6>Aggreport</h6>
                    Frequency Maps: <br/>
                    Analytics: <br/>
                    Reflections: relating to the user's data<br/>
                    <br/>
                    <br/>
                </li>
                <li>
                    <h5></h5>
                    <h6></h6>
                    <br/>
                </li>
                <li>
                    <h5></h5>
                    <h6></h6>
                    <br/>
                </li>

            </ul>

            <br/>
            <br/>
            <br/>
            <br/> 
            <br/>


            {/* TESTING COMPONENTS */}
            <ul>
                <li>TESTING COMPONENTS</li>
                <li>
                    <h5>Introduction</h5>
                    <br/>
                    <br/>
                    <h6></h6>
                    <br/>
                    <br/>
                    <h6></h6>
                    <br/>
                    <br/>
                    <h6></h6>
                    <br/>
                    <br/>
                    <h6></h6>
                    <br/>
                    <br/>
                </li>
                <li>
                    <h5></h5>
                    <br/>
                    <br/>
                    <h6></h6>
                    <br/>
                    <br/>
                </li>
                <li>
                    <h5></h5>
                    <br/>
                    <br/>
                    <h6></h6>
                    <br/>
                    <br/>
                </li>
            </ul>
            <br/>
            {/* Assessment */}
            <ul>
                <li>ASSESSMENT CONSOLE</li>
                <li>Progress: previous steps, the step you are on, next steps</li>
                <li>
                    <h5></h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li> 
                <li>
                    <h5></h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li> 
                <li>
                    <h5></h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li> 
                <li></li>
            </ul>      
            <br/>  
            <br/>


            {/* OFFICE COMPONENTS */}
            <ul>
                <li>Office Components</li>
                {/* Dashboard */}
                <li>
                    <h5>Dashboard</h5>
                    This is what appears when no other screen is active.<br/>
                    <h6>WorkDay</h6>
                    <br/>
                    <h6>WorkPlace</h6>
                    News: <br/>
                    Message Board: <br/>
                    + Channels: <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h6></h6>
                    <br/>
                    <h6></h6>
                    <br/>
                </li>
                {/* Training */}
                <li>
                    <h5>Training</h5>
                    <br/>
                    <h6>Assignments</h6>
                    Quizzes: small tests over resources<br/>
                    Discussion: responses to a prompt with a paragraph or less<br/>
                    Essay: responses to a prompt with multiple paragraphs<br/>
                    <br/>
                    <h6>Resources</h6>
                    Reading Assignments: <br/>
                    Comprehension Check: <br/>
                    Articles: <br/>
                    Annotations: <br/>
                    <br/>
                    <h6>Projects</h6>
                    <br/>
                    <h6></h6>
                    <br/>
                </li>
                {/* Office Clock */}
                <li>
                    <h5>Office Clock: </h5>
                    Accrual: for every 2 average worktime intervals, 1 break interval is earned; all breaktime must be used by week's end; if accrued breaktime reaches maximum work hours, the office will be locked until the next week<br/>

                    <h5>WorkTime </h5>
                    <br/>
                    <h6></h6>
                    <br/>
                    <h6></h6>
                    <br/>

                    <h5>BreakTime </h5>
                    Autofill: accrued breaktime fills in for missed scheduled worktime<br/>
                    <br/>
                    <br/>
                    <h6>BreakRoom</h6>
                    Chat: <br/>
                    Current Activities: <br/>
                    <br/>
                    <h6>Pastimes</h6>
                    <br/>
                    <h6>Self-Care</h6>
                    <br/>
                    <h6>Practice</h6>
                    <br/>
                    <h6>Project</h6>
                    <br/>



                    
                </li>
                {/* WorkDay */}
                <li>
                    <h5>WorkDay</h5>
                    <h6></h6>
                    <br/>
                    <h5></h5>
                    <h6>Actions: number of actions submitted in a day</h6>
                    <h6>Contribution: expected percentage of assigned pools completed based on number of people working each pool</h6>
                    <h5>WorkWeek</h5>
                    <h6>Breakdown: </h6>
                    <h6>Seasonal: </h6>
                    <h6>Annual: </h6>
                    <h6></h6>
                </li>
                {/* WorkPlace */}
                <li>
                    <h5>WorkPlace</h5>
                    <h6></h6>
                    <br/>
                </li>

                <li>
                    <h5></h5>
                    <h6></h6>
                    <br/>
                </li>
                <li>
                    <h5></h5>
                    <h6></h6>
                    <br/>
                </li>
            </ul>

            <br/>
            {/* Management */}
            <ul>
                <li>MANAGEMENT CONSOLE</li>
                <li>
                    <h5>MANAGEMENT METACONSOLE</h5>
                    Information on<br/>
                    <br/>
                    <h6>TEAM</h6>
                    Roster: <br/>
                    Calendar: week, month, quarter, year <br/>
                    Schedule: team hours, supervisor hours <br/>
                    Queues: feedback, <br/>
                    Assignments: projects, tasks <br/>
                    Productivity: pending, processed, awaiting <br/>
                    <br/>
                    <br/>
                    <h6>DEPARTMENT</h6>
                    News: birthdays, updates, reminders <br/>
                    Bulletin: discussions, polls <br/>
                    Online: employees, supervisors, team <br/>
                    <br/>
                    <br/>

                </li>              
            </ul>
            <br/>
            <br/>
            <br/>
            <br/>

            {/* ROLE COMPONENTS */}
            <ul>
                <li>ROLE COMPONENTS</li>
                <li>
                    <h5>MANAGEMENT--------------------</h5>
                    <h6></h6>
                    <h5>Community</h5>
                    <h6></h6>
                    <h5>District</h5>
                    <h6></h6>
                    <h5>Region</h5>
                    <h6></h6>
                    <h5>Academy</h5>
                    <h6></h6>
                    <br/>
                </li>
                <li>
                    <h5>DESIGNERS<br/></h5>
                    Some of the tools for these positions include:
                    <h6>Introduction Editor</h6>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    + Warnings: <br/>
                    + Further Reading: <br/>
                    <h6>Assessment Editor</h6>
                    <br/>
                    <br/>
                    <h6>Results Editor</h6>
                    <br/>
                    <h6>Assessment Editor</h6>
                    <br/>
                    <h5></h5>
                    <br/>
                    <h5></h5>
                    <br/>
                    <br/>
                    <h5></h5>
                    <br/>
                    <h6></h6>
                    <br/>
                </li>
                <li>
                    <h5>DEVELOPERS-------------------</h5>
                    <h6></h6>
                    <h6></h6>
                    <h6></h6>
                    <h6></h6>
                    <h6></h6>
                    <h6></h6>
                    <h6></h6>
                    <h5>Architects</h5>
                    <h5>Devs</h5>
                    <h5>Dev Support</h5>
                    <h5>QA</h5>
                    <h5>QA Support</h5>
                    <h5>Developer Liaison</h5>
                    <br/>
                </li>
                <li>
                    <h5></h5>
                    <h6></h6>
                    <br/>
                </li>
                <li>
                    <h5></h5>
                    <h6></h6>
                    <br/>
                </li>
                <li>
                    <h5></h5>
                    <h6></h6>
                    <br/>
                </li>

            </ul>
            <br/>
            <br/>
            <br/>
            <br/>



            {/* Designer */}
            <ul>
                <li>DESIGNER CONSOLE</li>
                <li>
                    <h5>DESIGNER METACONSOLE</h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li> 
                <li>
                    <h5></h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li> 
                <li>
                    <h5></h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li> 
                <li></li>
                <li></li>
            </ul>
            <br/>
            {/* Instructor */}
            <ul>
                <li>INSTRUCTOR CONSOLE</li>
                <li>
                    <h5>LEAD INSTRUCTOR</h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li>
                <li>
                    <h5>INSTRUCTORS</h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li>
                <li>
                    <h5>INSTRUCTOR SUPPORT</h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li>
                <li>
                    <h5>SCHOLAR SUPPORT</h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li>
                <li></li>
            </ul>
            <br/>
            {/* Studios */}
            <ul>
                <li>STUDIOS</li>
                <li>
                    <h5>CREATIVE EDITORS</h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li>
                <li>
                    <h5>CREATORS</h5>
                    Written: <br/>
                    Audio: <br/>
                    Visual: <br/>
                    Video: <br/>
                </li> 
                <li>
                    <h5>CREATIVE SUPPORT</h5>
                    Translators: <br/>
                    Creative Tech Support: <br/>
                    Production: <br/>
                    <br/>
                </li> 
            </ul>
            <br/>
            {/* Developer */}
            <ul>
                <li>DEVELOPER CONSOLE</li>
                <li>
                    <h5>DEVELOPMENT ARCHITECT</h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li> 
                <li>
                    <h5>DEVELOPER</h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li> 
                <li>
                    <h5>DEVELOPER SUPPORT</h5>
                    QA: <br/>
                    Feedback: <br/>
                    <br/>
                    <br/>
                </li> 
                <li>
                    <h5>TECH SUPPORT</h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li> 
                <li></li>
            </ul>
            <br/>
            {/* Committee */}
            <ul>
                <li>COMMITTEE CONSOLE</li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <br/>
            {/* Work Day */}
            <ul>
                <li>Work Day</li>
                <li>
                    <h5>Clock</h5>
                    A strip of boxes on the header that indicate time spent working that day.
                    <h6>Worktime</h6>
                    intervals where work actions were submitted<br/>
                    ACCENT COLOR: dark for more than average, medium for average, light for less than average
                    <h6>Breaktime</h6>
                    intervals where no work activity was submitted (optional: intervals where break activity was submitted)<br/>
                    ALERT COLOR: dark for multiple break actions, medium for one break action, light for no break action
                    <h6>Upcoming</h6>
                    intervals where the user is scheduled to work later in the day<br/>
                    LIGHT THEME COLOR
                    <h6>Missed</h6>
                    intervals where the user was absent during scheduled worktime earlier in the day<br/>
                    MEDIUM THEME COLOR
                    <h6>Unscheduled</h6>
                    intervals where the user submitted no action and was not scheduled to work<br/>
                    DARK THEME COLOR
                </li>
                <li>
                    <h5>Beginning</h5>
                    Schedule: <br/>
                    Goals: case #, pool % <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li> 
                <li>
                    <h5>Worktime</h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li>
                <li>
                    <h5>Breaktime</h5>
                    -Accrual: break time is earned from work time; see Performance Bonus section<br/>
                    <br/>
                    <br/>
                    <br/>
                </li>
                <li>
                    <h5>Meetings</h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li>
                <li>
                    <h5>Closing</h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li>
                <li>
                    <h5></h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li>
            </ul>
            <br/>
            {/* Subscription Revenue */}
            <ul>
                <li>REVENUE</li>
                <li>
                    <h5>PERFORMANCE BONUS: 0-30%  </h5>
                    The performance bonus is calculated from a general productivity score. The ceiling of the score is 100% with 5 categories worth 20% each. An optional bonus 15% can be earned with an accountability score, but 100% remains the highest score.<br/>
                    <h6>Attendance</h6>
                    The percentage of hours worked out of the total hours required.<br/>
                    <h6>Adherence</h6>
                    The percentage of scheduled hours worked out of the total scheduled hours.<br/>
                    <h6>Activity</h6>
                    The performance score of work activity based on prior performance.<br/>
                    (actual day's score)/(average day score)<br/>
                    3: more than average number of actions<br/>
                    2: standard range of actions <br/>
                    1: less than average number of actions<br/>
                    0: inactivity<br/>
                    <h6>Achievement</h6>
                    The percentage of work processed relative to equal portions with team.<br/>
                    (actual workshare)/(day's expected workshare)<br/>
                    actual work share = number of processed cases in each queue<br/>
                    expected work share = (number of cases in queue)/(number of people in queue)<br/>
                    <h6>Adequacy</h6>
                    The quality score of work reviewed by supervisor using an available rubric.<br/>
                    (reviewed work can be disputes, rewards, or random)<br/>
                    <h6>Accountability</h6>
                    The percentage of scheduled break activities that were completed. <br/>
                    <h5>COMMUNITY SHARE: 25%</h5>
                    The cumulative value of a community's 25% revenue is divided into portioned shares for employees in that region.<br/>
                    <h6>SHARES</h6>
                    Attendant: 3 shares<br/>
                    Advanced Support: 2 shares<br/>
                    Support: 1 share<br/>
                    <h5>DISTRICT SHARE: 20%</h5>
                    The cumulative value of a district's 20% revenue is divided into portioned shares for employees in that district.<br/>
                    <h6>SHARES</h6>
                    Manager: 3 shares<br/>
                    Advanced Support: 2 shares<br/>
                    Support: 1 share<br/>
                    <h5>REGION SHARE: 15%</h5>
                    The cumulative value of a region's 15% revenue is divided into portioned shares for employees in that region.<br/>
                    <h6>SHARES</h6>
                    Director: 3 shares<br/>
                    Advanced Support: 2 shares<br/>
                    Support: 1 share<br/>
                    <h5>ACADEMY SHARE: 10%</h5>    
                    The cumulative value of the academy's 10% revenue is divided into portioned shares for employees with organizational roles.<br/>
                    <h6>SHARES</h6>
                    Department Coordinators: 4 shares; Dev Architect, Assessment Engineer, <br/>
                    Experts: 3 shares; Developers, Designer, Instructor, <br/>
                    Expert Support: 2 shares; Developer Support, Designer Support, Instructor Support<br/>
                    Department Support: 1 share; Tech Support, Assessment Support, Scholar Support<br/>
                    <br/>
                </li> 

                <li></li>
            </ul>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {/* ROLE DESCRIPTIONS */}
            <ul>
                <li>ROLE DESCRIPTIONS</li>
                {/* Scholars */}
                <li>
                    <h5>SCHOLARS-------------------</h5>
                </li>
                {/* Management */}
                <li>
                    <h5>MANAGEMENT</h5>
                    <br/>


                    <h5>Community Management</h5>
                    Management teams responsible for up to 10,000 members<br/><br/>
                    <h6>Community Attendant</h6>
                    Leads the community management team, schedules meeting days, processes escalations, refunds<br/><br/>
                    CASES: feedback channeling, forum actions, bulletin, reported community support & advanced support & members, support actions, community actions, member actions<br/>
                    HOURS: 20-30/wk; 15 scheduled<br/>
                    HELP DESK: advanced community support, community support, members; some assessments<br/>
                    PAY: $15/hr + performance bonus (direct members, 3 community team shares, 1 district team share)<br/>
                    <h6>Advanced Community Support</h6>
                    <br/><br/>
                    CASES: feedback channeling, forum actions, bulletin, reported community support & members, community actions, member actions<br/>
                    HOURS: 15-25/wk; 10 scheduled<br/>
                    HELP DESK: community support, members, visitors<br/>
                    PAY: $15/hr + performance bonus (direct members, 2 community team shares)<br/>
                    <h6>Community Support</h6>
                    <br/><br/>
                    CASES: feedback channeling, forum actions, bulletin, <br/>
                    HOURS: 10-20/wk; 5 scheduled<br/>
                    HELP DESK: members, visitors<br/>
                    PAY: $15/hr + performance bonus (direct members, 1 community team share)<br/>


                    <h5>District Management</h5>
                    Management teams responsible for up to 10,000 attendants<br/><br/>
                    <h6>District Manager</h6>
                    <br/><br/>
                    CASES: <br/>
                    HOURS: 30-40/wk; 20 scheduled<br/>
                    HELP DESK: advanced district support, district support, community attendants<br/>
                    PAY: $15/hr + performance bonus (direct members, 4 district team shares, 1 region team share)<br/>
                    <h6>Advanced District Support</h6>
                    <br/><br/>
                    CASES: <br/>
                    HOURS: 25-35/wk; 15 scheduled<br/>
                    HELP DESK: district support, community attendants, advanced community support<br/>
                    PAY: $15/hr + performance bonus (direct members, 3 district team shares)<br/>
                    <h6>District Support</h6>
                    <br/><br/>
                    CASES: attendant actions, <br/>
                    HOURS: 20-30/wk; 10 scheduled<br/>
                    HELP DESK: community attendants, advanced community support, community support<br/>
                    PAY: $15/hr + performance bonus (direct members, 2 district team share)<br/>


                    <h5>Region Management</h5>
                    Management teams responsible for up to 10,000 managers<br/><br/>
                    <h6>Region Director</h6>
                    <br/><br/>
                    CASES: <br/>
                    HOURS: 40-50/wk; 25 scheduled<br/>
                    HELP DESK: advanced region support, region support, district managers<br/>
                    PAY: $15/hr + performance bonus (direct members, 4 region team shares, 1 academy share)<br/>
                    <h6>Advanced Region Support</h6>
                    <br/><br/>
                    CASES: <br/>
                    HOURS: 35-45/wk; 25 scheduled<br/>
                    HELP DESK: region support, district managers, advanced district managers<br/>
                    PAY: $15/hr + performance bonus (direct members, 3 region team shares)<br/>
                    <h6>Region Support</h6>
                    <br/><br/>
                    CASES: manager actions, attendant actions<br/>
                    HOURS: 30-40/wk; 20 scheduled<br/>
                    HELP DESK: district managers, advanced district support, district support<br/>
                    PAY: $15/hr + performance bonus (direct members, 2 region team share)<br/>
                </li>
                {/* Designers */}
                <li>
                    <h5>DESIGNERS------------------</h5>
                    <br/><br/>
                    <h5>Assessment Engineer</h5>
                        This position is for the leader(s) of the design department. <br/><br/>
                        <br/>

                        <h6>TASKS: coordinates the updating process, maintains integrity of personality structures, decision power when department stalls, editor of the manuals, can create macro structures (selves, functions, traits), analyze aggresults</h6>
                        <h6>CASES: </h6>
                        <h6>HOURS: 30-40/wk; 25 scheduled</h6>
                        <h6>HELP DESK: </h6>
                        <h6>PAY: 5 academy shares</h6>
                    <h5>Design Leads</h5>
                        This position is for assistive leadership in the design department.<br/><br/>
                        <br/>

                        <h6>TASKS: maintains integrity of trait structures for specific functions</h6>
                        <h6>CASES: </h6>
                        <h6>HOURS: 25-35/wk; 20 scheduled</h6>
                        <h6>HELP DESK: </h6>
                        <h6>PAY: 4 academy shares</h6>
                    <h5>Advanced Design Support</h5>
                        This position is for <br/><br/>
                        TASKS: <br/>
                        CASES: <br/>
                        HOURS: 20-30/wk; 15 scheduled<br/>
                        HELP DESK: assessment support, assessment members<br/>
                        PAY: 3 academy shares<br/>


                        <h6></h6>
                        <h6></h6>
                        <h6></h6>
                        <h6></h6>
                        <h6></h6>
                    <h5>Design Support</h5>
                        <br/><br/>
                        <br/>
                        <br/>
                        HOURS: 15-25/wk; 10 scheduled<br/>
                        HELP DESK: assessment support, assessment members<br/>
                        PAY: 2 academy shares<br/>


                        <h6>TASKS: </h6>
                        <h6>CASES: </h6>
                        <h6></h6>
                        <h6></h6>
                        <h6></h6>
                    <h5>Assessment Support</h5>
                        <br/><br/>
                        TASKS: training<br/>
                        CASES: assessment feedback, <br/>
                        HOURS: 10-20/wk; 5 scheduled<br/>
                        HELP DESK: assessment members, <br/>
                        PAY: 1 academy share<br/>


                    <br/>
                </li>
                {/* Instructors */}
                <li>
                    <h5>INSTRUCTORS----------------</h5>
                    <h6></h6>
                    <br/>
                </li>
                {/* Developers */}
                <li>
                    <h5>DEVELOPERS-----------------</h5>
                    <h6></h6>
                    <br/>
                    <h6></h6>
                    <br/>
                    <h6></h6>
                    <br/>
                    <h6></h6>
                    <br/>
                    <h6></h6>
                    <br/>
                    <h6></h6>
                    <br/>
                    <h6></h6>
                    <br/>
                    <h6></h6>
                    <br/>
                </li>
                {/* Creators */}
                <li>
                    <h5>CREATORS</h5>
                    <h6></h6>
                    <br/>
                    <h6></h6>
                    <br/>
                    <h6></h6>
                    <br/>
                    <h6></h6>
                    <br/>
                    <h6></h6>
                    <br/>
                    <h6></h6>
                    <br/>
                    <h6>Advanced Creator Support</h6>
                    <br/>
                    <h6>Creator Support</h6>
                    <br/>
                </li>
                {/*  */}
                <li>
                    <h5></h5>
                    <h6></h6>
                    <br/>
                </li>
                {/*  */}
                <li>
                    <h5></h5>
                    <h6></h6>
                    <br/>
                </li>

            </ul>

            <ul>
                <li>g</li>
                <li>
                    <h5></h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </li> 
                <li></li>
                <li></li>
            </ul>
            <br/>
        </div>
        <div id='userConsoleDesk' className='consoleSidebarOpen'>
            <br/>
            Applications<br/>
            <br/>
            <br/>
            To-Do:<br/>
            - add window actions: pause, close<br/>
            - add tabs for steps in a process<br/>
            - <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        <ConsoleHelp/>
            
    </div>
)}


function ConsoleTitle() {return(
    <div id='userConsoleTitle'>
        <span>Console</span>
    </div>
)}

function TeamSchedule() {return(
    <div className=''>
        <img src='' alt=''/>
        <span></span>
    </div>
)}


function TeamBdays() {return(
    <div className=''>
        <img src='' alt=''/>
        <span></span>
    </div>
)}

function ConsoleHelp() {return(
    <div id='userConsoleHelp'>
        <div id='userConsoleHelpContent'>
            FAQ: common questions, policy,<br/>
            Tutorials: guided steps<br/>
            Feedback: <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            Chat: contacting an employee trained on this topic<br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        <div id='userConsoleHelpButton'>
            <span>?</span>
            <span>Help</span>
        </div>
    </div>
)}