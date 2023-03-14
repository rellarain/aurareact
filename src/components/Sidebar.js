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
            <span alt='X'></span>
            <span alt='X'></span>
            <span alt='Simulator'></span>
            <span alt='Settings'></span>
        </div>
        <div id='toolkitTitle'>Toolkit</div>
        <div id='toolkitProgress'><span id='toolkitProgressBar'></span></div>
        <div id='toolkitBody'>

            <ul>
                <li>To-Do List</li>
                <li>
                    <h5>Draft Console's Basic Layout</h5>
                    <br/>
                    <h6>Portfolio</h6>
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

            </ul>
            <br/>

            {/* BASIC COMPONENTS */}
            <ul>
                <li>BASIC COMPONENTS</li>
                <li>
                    <h3>Header</h3>
                    <h4>Visitor Header</h4>
                    <br/>
                    <h4>User Header</h4>
                    <h6>Picture</h6>
                    square thumbnail of active user<br/>
                    <br/>
                    <h6>Display Name</h6>
                    Brings up Portfolio/Profile component<br/>
                    <br/>
                    <h6>User ID</h6>
                    Set of links that bring up collective pages<br/>
                    +  Academy Page: first 4; academy bulletin, list of regions starting with your own<br/>
                    +  Region Page: second 4; region bulletin, list of districts starting with your own<br/>
                    +  District Page: third 4; district bulletin, list of communities starting with your own<br/>
                    +  Community Page: end 4; community bulletin, list of members starting with you<br/>
                    <br/>
                    <h6>Clock</h6>
                    Shows current time with a white square; connects to selected time zone<br/>
                    Shows active time, or time spent using tools, with accent squares<br/>
                    <br/>
                    For employees, accent time is for worktime and alert is for breaktime<br/>
                    <br/>
                </li>
                <li>
                    <h3>NAVIGATION</h3>
                    <h5></h5>
                </li>
                <li>
                    <h3>HELP SCREEN</h3>
                </li>
                {/* Console */}
                <li>
                    <h3>CONSOLES</h3>
                    <h6>
                        Consoles are the screens used for various activities on Aura.Academy. <br/><br/>
                        The basic parts of the console are listed below:<br/><br/>
                        + Progress Meter: <br/>
                        + Console Title: <br/>
                        + Head Buttons: <br/>
                        + Sidebar Buttons: edit, help, <br/>
                        + Help: <br/>
                        + Sidebar: <br/>
                        + Desk: <br/>
                    </h6>
                    <h4>Visitor Consoles</h4>
                        <h5>Application</h5>
                        <h6>
                            + Progress Meter: <br/>
                            + Console Title: <br/>
                            + Head Buttons: <br/>
                            + Sidebar Buttons: <br/>
                            + Help: <br/>
                            + Sidebar:<br/>
                            + Desk: <br/>
                        </h6>
                    <h4>Member Consoles</h4>
                        <h5>Portfolio Console</h5>
                        <h6>
                            + Progress Meter: <br/>
                            + Console Title: the display name of the user<br/>
                            + Head Buttons: <br/>
                            + Sidebar Buttons: edit (if you are viewing your own account), help, <br/>
                            + Help: interpretations, portfolio assistance, technical issues<br/>
                            + Sidebar: full picture (), banner (if scholar/employee), biography, basics, interactions (connect, block)<br/>
                            + Desk: <br/>
                        </h6>
                        <h5>Connection Console</h5>
                        <h6></h6>
                        <h5></h5>
                        <h6></h6>
                        <h5></h5>
                        <h6></h6>
                    <h4>Scholar Consoles</h4>
                        <h5>Library</h5>
                            <h6>
                                + Progress Meter: completion of reading<br/>
                                + Console Title: organization (self/function/trait/subtrait/academy/etc.)<br/>
                                + Head Buttons: <br/>
                                + Sidebar Buttons: <br/>
                                + Help: <br/>
                                + Sidebar:<br/>
                                + Desk: <br/>
                            </h6>
                        <h5>Training</h5>
                            <h6>
                                + Progress Meter: completion of module/course<br/>
                                + Console Title: [BLANK] Training<br/>
                                + Head Buttons: <br/>
                                + Sidebar Buttons: <br/>
                                + Help: <br/>
                                + Sidebar:<br/>
                                + Desk: <br/>
                            </h6>
                        <h5>Apprenticeship</h5>
                            <h6>
                                + Progress Meter: completed hours of performance observation<br/>
                                + Console Title:<br/>
                                + Head Buttons: <br/>
                                + Sidebar Buttons: <br/>
                                + Help: <br/>
                                + Sidebar:<br/>
                                + Desk: <br/>
                            </h6>
                        <h5>Examination</h5>
                            <h6>
                                + Progress Meter: time remaining<br/>
                                + Console Title: <br/>
                                + Head Buttons: <br/>
                                + Sidebar Buttons: <br/>
                                + Help: <br/>
                                + Sidebar:<br/>
                                + Desk: <br/>
                            </h6>
                    <h4>Admin Consoles</h4>
                    <h6>
                        Admin Consoles are accessible from the same component. The Head Buttons along the top of the desk designate all the roles assigned to that user. <br/>
                        <br/>
                    </h6>
                        <h5>Management Console</h5>
                        <h6>
                            + Progress Meter: <br/>
                            + Console Title: <br/>
                            + Head Button: <br/>
                            + Sidebar Buttons: <br/>
                            + Help: <br/>
                            + Sidebar: links to different pages, such as metrics (), activity (), <br/>
                            + Desk: <br/>
                        </h6>
                        <h5>Designer Console</h5>
                        <h6>
                            + Progress Meter: completion of development stage/task<br/>
                            + Console Title: <br/>
                            + Head Button: <br/>
                            + Sidebar Buttons: <br/>
                            + Help: <br/>
                            + Sidebar:<br/>
                            + Desk: <br/>
                        </h6>
                        <h5>Academic Console</h5>
                        <h6>
                            + Progress Meter: <br/>
                            + Console Title: <br/>
                            + Head Buttons: <br/>
                            + Sidebar Buttons: <br/>
                            + Help: <br/>
                            + Sidebar:<br/>
                            + Desk: <br/>
                        </h6>
                        <h5></h5>
                        <h6>
                            + Progress Meter: <br/>
                            + Console Title: <br/>
                            + Head Buttons: <br/>
                            + Sidebar Buttons: <br/>
                            + Help: <br/>
                            + Sidebar:<br/>
                            + Desk: <br/>
                        </h6>
                        <h5></h5>
                        <h6>
                            + Progress Meter: <br/>
                            + Console Title: <br/>
                            + Head Buttons: <br/>
                            + Sidebar Buttons: <br/>
                            + Help: <br/>
                            + Sidebar:<br/>
                            + Desk: <br/>
                        </h6>
                        <h5></h5>
                        <h6>
                            + Progress Meter: <br/>
                            + Console Title: <br/>
                            + Head Buttons: <br/>
                            + Sidebar Buttons: <br/>
                            + Help: <br/>
                            + Sidebar:<br/>
                            + Desk: <br/>
                        </h6>
                    <h4></h4>
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
                    FAQ (common questions, policies, rules), tutorials (guided steps, follow along), feedback (), help desk (chat with an available expert on this tool/page/assessment)<br/>
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
            <br/>

            {/* MEMBER COMPONENTS */}
            <ul>
                <li>MEMBER COMPONENTS</li>
                <li>These elements are limited to users with Aura Academy accounts.</li>
                {/* Portfolio */}
                <li>
                    <h5>Portfolio Console</h5>
                    <br/>
                    <h6>Profile (Sidebar): for the user who opens their own portfolio, the sidebar becomes the account editor for customization and profile settings</h6>
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
                {/* Social */}
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
                {/* Applications */}
                <li>
                    <h3>APPLICATIONS</h3>
                    <h6></h6>
                    <h4>Scholarship</h4>
                    <h6>
                        Members need to apply to become a Aura.Academy Scholar. 
                         
                    </h6>
                    <h5>Library</h5>
                    <h6>
                        Prerequisites: <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        Application: <br/>
                        + <br/>
                        + <br/>
                    </h6>
                    <h5>Training</h5>
                    <h6>
                        Course Content: <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                    </h6>
                    <h4>Employment</h4>
                    <h6>
                        Prerequisites are automatically checked for in user accounts, and if the information is missing, they cannot apply for that role<br/><br/>
                        Prerequisites:<br/>
                        + Trained to interpret 10 traits<br/>
                        + Trained to use Aura.Academy tools<br/>
                        + Trained on Aura.Academy code of conduct<br/>
                        + <br/>
                        + <br/>
                        + <br/>
                    </h6>

                    <h5>Role-Specific Prerequisites</h5>
                    <h6>
                        DESIGNERS<br/>
                        Assessment Support<br/>
                        + Trained on all traits for two functions<br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        Design Team<br/>
                        + Trained on all traits for four functions<br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        Designer Leadership<br/>
                        + Trained on all available traits and functions<br/>
                        + University Degree in Psychology, Mathematics, and/or relevant field to assessment topic<br/>
                        + <br/>
                        + <br/>
                    </h6>
                    <h6>
                        ACADEMICS<br/><br/>
                        Educational Support: <br/>
                        + Higher Education Degree: associates, undergrad, graduate<br/>
                        + Studies Portfolio: with Aura.Academy tools, create a portfolio representing fields of interest you have pursued<br/>
                        + Recommendation: you must be recommended for training by Educational Leadership<br/><br/>
                        Educational Leadership: <br/>
                        + University Degree: undergrad, graduate<br/>
                        + CV/Resume: <br/>
                        + Teaching Experience: <br/>
                        + Educational Support Experience: <br/>
                    </h6>
                    <h6>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                    </h6>
                    <h6>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                    </h6>
                    <h6>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                    </h6>
                    <h6>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                    </h6>                    
                    <h6>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                        + <br/>
                    </h6>
                    <br/>
                </li>
                <li>
                    <h5>Lists to be made into their own things: </h5>
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
            <br/>


            {/* OFFICE COMPONENTS */}
            <ul>
                <li>OFFICE COMPONENTS</li>
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
            <br/>
            <br/>
            <br/>
            <br/>

            {/* ROLE COMPONENTS */}
            <ul>
                <li>ROLE COMPONENTS</li>
                {/* Management Consoles */}
                <li>
                    <h3>MANAGEMENT</h3>
                    <h4>Management</h4>
                    <h5></h5>
                    <h5></h5>
                    <h5></h5>
                    <h4>Role Tasks and Tools</h4>
                    <h5></h5>
                    <h6></h6>
                    <h6></h6>
                    <h4>Role Tasks and Tools</h4>
                    <h5></h5>
                    <h5></h5>
                    <h5></h5>
                    <h5></h5>
                    <h5>Team</h5>
                        <h6>
                            + Leadership: schedule stack, basic information, roles<br/>
                            + Team Members: schedule stack, basic information, roles <br/>
                            + Activity: status (online, busy, help desk, break), team performance ( both percent and counted)<br/>
                            + Assignments: projects(), tasks ()<br/>
                            + <br/>
                            + <br/>
                            + Queues: status (claimed, channeled, unclaimed, pending, dispute, complete), feedback, reports<br/>
                            + Calendar: schedule stack (you, team, leadership), week/month, <br/>
                        </h6>                    
                    <h5>Department</h5>
                        <h6>
                            + Memos: updates, reminders <br/>
                            + Bulletin: discussion, polls, birthdays, special occasions<br/> 
                            + <br/>
                            + <br/>
                            + <br/>
                            + <br/>
                            + <br/>
                            + <br/>
                        </h6>
                        <br/>
                </li>
                {/* Designer Consoles */}
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
                {/* Developer Consoles */}
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
            {/* ROLE DESCRIPTIONS */}
            <ul>
                <li>ROLE DESCRIPTIONS</li>
                <br/>
                {/* Scholars */}
                <li>
                    <h3>SCHOLARS</h3>
                    <h5>Library</h5>
                    <h5>Training</h5>
                    <h5>Apprenticeship</h5>
                    <h5>Examination</h5>
                </li>
                <br/>
                {/* Management */}
                <li>
                    <h3>MANAGEMENT</h3>


                    <h4>Community Management</h4>
                    Management teams responsible for up to 10,000 members<br/><br/>

                    <h5>Community Attendant</h5>
                    Leads the community management team, schedules meeting days, processes escalations, refunds<br/><br/>
                    <h6>TASKS: </h6>
                    <h6>CASES: feedback channeling, forum actions, bulletin, reported community support & advanced support & members, support actions, community actions, member actions</h6>
                    <h6>HOURS: 20-30/wk; 15 scheduled</h6>
                    <h6>HELP DESK: advanced community support, community support, members; some assessments</h6>
                    <h6>PAY: $15/hr + performance bonus (direct members, 3 community team shares, 1 district team share)</h6>

                    <h5>Advanced Community Support</h5>
                    <br/><br/>
                    <h6>TASKS: </h6>
                    <h6>CASES: feedback channeling, forum actions, bulletin, reported community support & members, community actions, member actions</h6>
                    <h6>HOURS: 15-25/wk; 10 scheduled</h6>
                    <h6>HELP DESK: community support, members, visitors</h6>
                    <h6>PAY: $15/hr + performance bonus (direct members, 2 community team shares)</h6>

                    <h5>Community Support</h5>
                    <br/><br/>
                    <h6>TASKS: </h6>
                    <h6>CASES: feedback channeling, forum actions, bulletin, </h6>
                    <h6>HOURS: 10-20/wk; 5 scheduled</h6>
                    <h6>HELP DESK: members, visitors</h6>
                    <h6>PAY: $15/hr + performance bonus (direct members, 1 community team share)</h6>

                    <h4>District Management</h4>
                    Management teams responsible for up to 10,000 attendants<br/><br/>

                    <h5>District Manager</h5>
                    <br/><br/>
                    <h6>TASKS: </h6>
                    <h6>CASES: </h6>
                    <h6>HOURS: 30-40/wk; 20 scheduled</h6>
                    <h6>HELP DESK: advanced district support, district support, community attendants</h6>
                    <h6>PAY: $15/hr + performance bonus (direct members, 4 district team shares, 1 region team share)</h6>

                    
                    <h5>Advanced District Support</h5>
                    <br/><br/>
                    <h6>TASKS: </h6>
                    <h6>CASES: </h6>
                    <h6>HOURS: 25-35/wk; 15 scheduled</h6>
                    <h6>HELP DESK: district support, community attendants, advanced community support</h6>
                    <h6>PAY: $15/hr + performance bonus (direct members, 3 district team shares)</h6>

                    <h5>District Support</h5>
                    <br/><br/>
                    <h6>TASKS: </h6>
                    <h6>CASES: attendant actions, </h6>
                    <h6>HOURS: 20-30/wk; 10 scheduled</h6>
                    <h6>HELP DESK: community attendants, advanced community support, community support</h6>
                    <h6>PAY: $15/hr + performance bonus (direct members, 2 district team share)</h6>

                    <h4>Region Management</h4>
                    Management teams responsible for up to 10,000 managers<br/><br/>

                    <h5>Region Director</h5>
                    <br/>
                    <br/>
                    <h6>TASKS: </h6>
                    <h6>CASES: </h6>
                    <h6>HOURS: 40-50/wk; 25 scheduled</h6>
                    <h6>HELP DESK: advanced region support, region support, district managers</h6>
                    <h6>PAY: $15/hr + performance bonus (direct members, 4 region team shares, 1 academy share)</h6>

                    <h5>Advanced Region Support</h5>
                    <br/>
                    <br/>
                    <h6>TASKS: </h6>
                    <h6>CASES: </h6>
                    <h6>HOURS: 35-45/wk; 25 scheduled</h6>
                    <h6>HELP DESK: region support, district managers, advanced district managers</h6>
                    <h6>PAY: $15/hr + performance bonus (direct members, 3 region team shares)</h6>

                    <h5>Region Support</h5>
                    <br/>
                    <br/>
                    <h6>TASKS: </h6>
                    <h6>CASES: manager actions, attendant actions</h6>
                    <h6>HOURS: 30-40/wk; 20 scheduled</h6>
                    <h6>HELP DESK: district managers, advanced district support, district support</h6>
                    <h6>PAY: $15/hr + performance bonus (direct members, 2 region team share)</h6>
                </li>
                <br/>
                {/* Designers */}
                <li>
                    <h3>DESIGNERS</h3>
                    <br/><br/>


                    <h4>Designer Leadership</h4>

                    <h5>Assessment Engineer</h5>
                        This position is for the leader(s) of the design department. <br/>
                        <br/>
                        <h6>TASKS: coordinates the updating process, maintains integrity of personality structures, decision power when department stalls, editor of the manuals, can create macro structures (selves, functions, traits), analyze aggresults</h6>
                        <h6>CASES: </h6>
                        <h6>HOURS: 30-40/wk; 25 scheduled</h6>
                        <h6>HELP DESK: </h6>
                        <h6>PAY: 5 academy shares</h6>
                    <h5>Engineer Support</h5>
                        <br/>
                        <br/>
                        <h6>TASKS: </h6>
                        <h6>CASES: </h6>
                        <h6>HOURS: </h6>
                        <h6>HELP DESK: </h6>
                        <h6>PAY: </h6>


                    <h4>Design Team</h4>

                    <h5>Design Coordinators</h5>
                        This position is for assistive leadership in the design department.<br/>
                        <br/>
                        <h6>TASKS: maintains integrity of trait structures for specific functions</h6>
                        <h6>CASES: </h6>
                        <h6>HOURS: 25-35/wk; 20 scheduled</h6>
                        <h6>HELP DESK: </h6>
                        <h6>PAY: 4 academy shares</h6>
                    <h5>Advanced Design Support</h5>
                        This position is for <br/>
                        <br/>
                        <h6>TASKS: </h6>
                        <h6>CASES: </h6>
                        <h6>HOURS: 20-30/wk; 15 scheduled</h6>
                        <h6>HELP DESK: assessment support, assessment members</h6>
                        <h6>PAY: 3 academy shares</h6>
                    <h5>Design Support</h5>
                        <br/>
                        <br/>
                        <h6>TASKS: </h6>
                        <h6>CASES: </h6>
                        <h6>HOURS: 15-25/wk; 10 scheduled</h6>
                        <h6>HELP DESK: assessment support, assessment members</h6>
                        <h6>PAY: 2 academy shares</h6>


                    <h4>Assessment Support</h4>

                    <h5>Advanced Assessment Support</h5>
                        <br/><br/>
                        <h6>TASKS: training, </h6>
                        <h6>CASES: feedback channeling, </h6>
                        <h6>HOURS: 10-20/wk; 5 scheduled</h6>
                        <h6>HELP DESK: assessment assistance, results assistance</h6>
                        <h6>PAY: </h6>
                        <br/>
                    <h5>Assessment Support</h5>
                        <br/><br/>
                        <h6>TASKS: training</h6>
                        <h6>CASES: assessment feedback </h6>
                        <h6>HOURS: 5-15/wk; 5 scheduled</h6>
                        <h6>HELP DESK: results assistance</h6>
                        <h6>PAY: 1 academy share</h6>
                        <br/>
                </li>
                <br/>
                {/* Academics */}
                <li>
                    <h3>ACADEMICS</h3>
                    <h4>Educational Leadership</h4>
                    <h5>Instructional Directors</h5>
                        <br/>
                        <br/>
                        <h6>TASKS: </h6>
                        <h6>CASES: </h6>
                        <h6>HOURS: 35-45/wk; 30 scheduled</h6>
                        <h6>HELP DESK: </h6>
                        <h6>PAY: 7 academy shares</h6>
                    <h5>Instructional Coordinators</h5>
                        <br/>
                        <br/>
                        <h6>TASKS: </h6>
                        <h6>CASES: </h6>
                        <h6>HOURS: 30-40/wk; 25 scheduled</h6>
                        <h6>HELP DESK: </h6>
                        <h6>PAY: 6 academy shares</h6>
                    <h5>Instructors</h5>
                        <br/>
                        <br/>
                        <h6>TASKS: </h6>
                        <h6>CASES: </h6>
                        <h6>HOURS: 25-35/wk; 20 scheduled</h6>
                        <h6>HELP DESK: </h6>
                        <h6>PAY: 5 academy shares</h6>
                    <h4>Educational Support</h4>
                    <h5>Advanced Instructor Support</h5>
                        <br/>
                        <br/>
                        <h6>TASKS: </h6>
                        <h6>CASES: </h6>
                        <h6>HOURS: 20-30/wk; 25 scheduled</h6>
                        <h6>HELP DESK: </h6>
                        <h6>PAY: 4 academy shares</h6>
                    <h5>Instructor Support</h5>
                        <br/>
                        <br/>
                        <h6>TASKS: </h6>
                        <h6>CASES: </h6>
                        <h6>HOURS: 15-25/wk; 10 scheduled</h6>
                        <h6>HELP DESK: </h6>
                        <h6>PAY: 3 academy shares</h6>
                    <h5>Advanced Scholar Support</h5>
                        <br/>
                        <br/>
                        <h6>TASKS: </h6>
                        <h6>CASES: </h6>
                        <h6>HOURS: 10-20/wk; 5 scheduled</h6>
                        <h6>HELP DESK: </h6>
                        <h6>PAY: 2 academy shares</h6>
                    <h5>Scholar Support</h5>
                        Scholar support agents must have passed the class they are supporting.<br/>
                        <br/>
                        <h6>TASKS: </h6>
                        <h6>CASES: library feedback, course feedback, </h6>
                        <h6>HOURS: 5-15/wk; 5 scheduled</h6>
                        <h6>HELP DESK: </h6>
                        <h6>PAY: 1 academy share</h6>
                    <br/>
                </li>
                <br/>
                {/* Developers */}
                <li>
                    <h3>DEVELOPERS</h3>
                    <h4>Development Leadership</h4>
                    <h5>Development Architects</h5>
                    <br/>
                    <h5>Development Coordinators</h5>
                    <br/>
                    <h4>Quality Assurance (QA)</h4>
                    <h5>QA Team Member</h5>
                    <br/>
                    <h5>QA Support</h5>
                    <br/>
                    <h4>Developers</h4>
                    <h5>Dev Team Member</h5>
                    <br/>
                    <h5>Advanced Developer Support</h5>
                    <br/>
                    <h5>Developer Support</h5>
                    <br/>
                    <h6></h6>
                    <br/>
                    <h6></h6>
                    <br/>
                </li>
                {/* Creators */}
                <li>
                    <h3>CREATORS</h3>
                    <h6></h6>
                    <br/>
                    <h6></h6>
                    <br/>
                    <h6>Editors</h6>
                    <br/>
                    <h6>Writer</h6>
                    <br/>
                    <h6>Translator</h6>
                    <br/>
                    <h6>Translator Support</h6>
                    <br/>
                    <h6>Advanced Creator Support</h6>
                    <br/>
                    <h6>Creator Support</h6>
                    <br/>
                </li>
                {/* Committee */}
                <li>
                    <h3>COMMITTEE</h3>
                    <br/>
                    <h4>C-Suite</h4>
                    Executive, Founder, <br/>
                    <h5>Board Structure</h5>
                    Board, Panel, Committee<br/>
                    <h5></h5>
                    <br/>
                    <h4></h4>
                    <br/>
                    <h5></h5>
                    <br/>
                    <h5></h5>
                    <br/>
                    <h4></h4>
                    <br/>
                    <h5></h5>
                    <br/>
                    <h5></h5>
                    <br/>
                    <h4></h4>
                    <br/>
                    <h5></h5>
                    <br/>
                    <h5></h5>
                    <br/>
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
    </div>
)}