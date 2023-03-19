import React from 'react';

export default function AdminFooter() {return (
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
            
            <div id='breakTimeHeader'>
                <span>BREAKTIME CONSOLE</span>
                <span></span>
                {/* BreakTime Header: says how much worktime is left for the week, how much time is left on today's schedule, accumulated breaktime (units and time), how much breaktime is left in the week */}
            </div>
            <div>


            </div>
        </div>

    </div>
)}

function HelpDesk() {return (
    <div id='helpDeskConsole' className='helpDeskClosed'>
        {/* helpDeskOpen helpDeskClosed helpDeskNone */}

    </div>
)}

