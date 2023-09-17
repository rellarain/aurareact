import React from 'react';
import UserConsole from './UserConsole';

export default function Dashboard() {return (
    <main id="userDash" className='userDashMini'>
        {/* userDashMax userDashMini */}
        <UserConsole />
        <UserDashboard />
    </main>
)}

function UserDashboard() { 
    const month = "January";
    const weekday = "Monday";
    const monthday = "1";
    const year = "2023";
    const time = "8:00";
    
    
    return (
    <div id="userDashboard" >
        <p>{weekday}, {month} {monthday}, {year} <br/> {time} </p>
        <p>NOTICES <br/> organizational changes, individual changes, academy changes</p>
        <p>PERFORMANCE <br/><br/> WORKDAY (today's date)<br/> achievement, activity, adherence, attendance <br/><br/>  WORKWEEK (last 2-7 days in month)<br/> achievement, activity, adherence, attendance, accomplishment <br/><br/>  WORKCYCLE (average daily score of month) <br/> achievement, activity, adequacy, adherence, attendance, accomplishment</p>
        <p>REQUESTS <br/> </p>
        <p></p>
        <p></p>
        <section>
            
        </section>
    </div>
)}


