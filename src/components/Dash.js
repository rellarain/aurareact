import React from 'react';
import HelpDesk from './Admin';
import UserConsole from './UserConsole';

export default function Dashboard() {return (
    <main id="userDash" className='userDashMini'>
        {/* userDashMax userDashMini */}
        <UserConsole />
        <HelpDesk />
    </main>
)}




