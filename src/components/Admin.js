import React from 'react';

export default function Admin() {return (
    <div className=''>
        <Sidebar />
        <AdminFooter />
    </div>
)}



function AdminFooter() {return (
    <div id= "adminFooter" className='inOffice breakTimeClosed'>
        {/* inOffice outOffice  */} {/* breakTimeOpen breakTimeClosed */}
        <div id="workWeekTimer">
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
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div id='TKtoggle'>
            <div id='TKtoggleButton' className='TKtoggleClosed'>
                {/* TKtoggleOpen TKtoggleClosed TKtoggleNone */}
            </div>
        </div>
        <div id='breakTimeHead'>
            <div id='breakTimer'>
           


            </div>
        </div>
        <div id='helpDeskAnchor'>
            <HelpDesk/>
        </div>
        <div id='breakTimeConsole'>
            

            <div id='breakTimeContent'>
                <ul>
                    <li>WORKCYCLE: shows monthly activity and performance</li>
                    <li>Activity: monthly total count of actions submitted by queue</li>
                    <li>Timecard: total monthly worktime (cumulative time in office/expected time in office); doesn't distinguish worktime and breaktime</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>WORKWEEK: shows weekly activity and performance </li>
                    <li>Activity: weekly total count of actions submitted by queue</li>
                    <li>Timecard: total monthly worktime (cumulative time in office/expected time in office); distinguishes worktime and breaktime </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>WORKDAY: shows weekly activity and performance </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

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