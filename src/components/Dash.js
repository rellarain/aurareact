import React from 'react';
import UserConsole from './UserConsole';

export default function Dashboard() {return (
    <main id="userDash" className='userDashMax'>
        {/* userDashMax userDashMini */}
        <UserConsole />
        <AdminDash />

    </main>
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