import React from 'react';
import UserConsole from './UserConsole';

export default function Dashboard() {return (
    <main id="userDash" className='userDashMini'>
        {/* userDashMax userDashMini */}
        <UserConsole />
        <UserDashboard />
    </main>
)}

function UserDashboard() { return (
    <div id="userDashboard" >
        <p>DATE <br/> day of the week, Month #Day #Year, Holidays/Significant Dates</p>
        <p>NOTICES <br/> organizational changes, individual changes, academy changes</p>
        <p>PERFORMANCE <br/> <br/> WORKDAY (today's date)<br/> achievement, activity, adherence, attendance <br/><br/>  WORKWEEK (last 2-7 days in month)<br/> achievement, activity, adherence, attendance, accomplishment <br/><br/>  WORKCYCLE (average daily score of month) <br/> achievement, activity, adequacy, adherence, attendance, accomplishment</p>
        <p>TO-DO LIST: list of roles/tasks expected for the day with the number of cases or hours necessary for each role/task <br/> <br/> MGMT Tasks: feedback, forum, bulletin, reports, requests <br/><br/> Roles Tasks: queues, projects, meetings, disputes, reports, requests<br/><br/> Break Tasks <br/> SELF-CARE: tasks/chores to do every certain number of days <br/> PRACTICES: unstructured activities to do every certain number of days <br/> PASTIMES: unstructured activities done irregularly <br/> PROJECTS: structured activities to do every certain number of days</p>
        <p>F E E D B A C K <br/><br/> PENDING: case has not had contact with any volunteers <br/><br/> CHANNELED: case has been attributed to a specific or departmental queue<br/><br/> ESCALATED: case has been attributed to a specific or departmental agent/team<br/><br/> ANNOTATED: case has been annotated by an agent prior to escalation/channeling<br/><br/> RETURNED: case has been returned to the issuant for more specific details <br/><br/> CLARIFIED: case has been returned to agent with additional details from the issuant <br/><br/> REJECTED: case has been determined ineligible, redundant, or ancilliary to the goals or purpose of Aura Academy <br/><br/> APPEALS: issuant has requested another agent to view the case (can be done up to 2 times per case)<br/><br/> ACCEPTED: case has been onboarded for consideration in Aura Academy iterations </p>
        <p>OPEN ASSESSMENTS <br/> progress, title, open date</p>
        <p>REQUESTS <br/> </p>
        <p></p>
        <p></p>
    </div>
)}


