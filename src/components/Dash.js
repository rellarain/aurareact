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
        <p>TO-DO LIST <br/> <br/> MGMT Tasks: feedback, forum, bulletin, reports, requests <br/><br/> Roles Tasks: queues, projects, meetings, disputes, reports, requests<br/><br/> Break Tasks <br/> SELF-CARE: tasks/chores to do every certain number of days <br/> PRACTICES: unstructured activities to do every certain number of days <br/> PASTIMES: unstructured activities done irregularly <br/> PROJECTS: structured activities to do every certain number of days</p>
        <p>FEEDBACK PROGRESS <br/> pending, channeled, escalated, annotated, returned, clarified, rejected, appeals, accepted</p>
        <p>OPEN ASSESSMENTS <br/> progress, title, open date</p>
        <p>REQUESTS <br/> </p>
        <p></p>
        <p></p>
    </div>
)}


