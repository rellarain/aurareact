import React, { useState } from 'react';
import UserConsole from './UserConsole';

export default function Dashboard() {
    const time = "8:00";
    const today = new Date();
    const [toolkitConsoleState, setToolkitConsoleState] = useState(false);

    function handleSetToolkitConsoleState() {
        setToolkitConsoleState(!toolkitConsoleState);
        // alert("it worked!");
    }
    function formatDate(date) {
        return new Intl.DateTimeFormat('en-us', {weekday: 'long', month: 'long', day: '2-digit', year:'numeric'}).format(date);
    }



    
    return (
    <main id="userDash" className={toolkitConsoleState ? "userDashMax" : "userDashMini"}>
        {/* userDashMax userDashMini */}
        <UserConsole />
        {/* <UserDashboard/> */}
        <div id="userDashboard" >
            <p>{formatDate(today)} <br/> {time} </p>
            <button onClick={handleSetToolkitConsoleState}></button>
            <section></section>
            {/* <p>NOTICES <br/> organizational changes, individual changes, academy changes</p>
            <p>PERFORMANCE <br/><br/> WORKDAY (today's date)<br/> achievement, activity, adherence, attendance <br/><br/>  WORKWEEK (last 2-7 days in month)<br/> achievement, activity, adherence, attendance, accomplishment <br/><br/>  WORKCYCLE (average daily score of month) <br/> achievement, activity, adequacy, adherence, attendance, accomplishment</p>
            <p>REQUESTS <br/> </p>
            <p>feedback status</p>
            <p>SIGN OUT</p>
            <section>
                
            </section> */}
        </div>
    </main>
)}

// function UserDashboard() { 
    
   

//     return (
    
// )}


