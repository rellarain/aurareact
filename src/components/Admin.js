import React from 'react';

export default function Admin() {return (
    <div className=''>
        <AdminDash />
        <AdminFooter />
        <Sidebar />
    </div>
)}



function AdminFooter() {return (
    <div id= "adminFooter" className='inOffice breakTimeClosed'>
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
    <div id='helpDeskConsole' className='helpDeskOpenSB'>
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





        </div>
    </div>
)}