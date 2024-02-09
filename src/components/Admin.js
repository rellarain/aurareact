import React from 'react';
import useState from 'react';


export default function Admin() {return (
    <div>
        <Sidebar />
        <AdminFooter />
    </div>
)}



function AdminFooter() {
    
    // const [isActive, setActive] = useState("false");
    // const ToggleClass = () => {
    //     setActive(!isActive);
    // };
    
    

    
    return (
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
        <div id='breakTimeHeader'>
            BREAKTIME
        </div>
        <div id='TKtoggle'>
            <TKToggleButton />
        </div>
        <div id='helpDeskAnchor'>
            <HelpDesk/>
        </div>
        <div id='breakTimeConsole'>
            
            <div id="breakTimeConsoleMenu"></div>
            <div id="breakTimeConsoleDesk"></div>

        </div>

    </div>
)}

function TKToggleButton() { return (<div id='TKtoggleButton' className='TKtoggleClosed'>
    {/* TKtoggleOpen TKtoggleClosed TKtoggleNone {isActive ? "TKtoggleOpen" : "TKtoggleClosed"} */}

    </div>
    )}

function HelpDesk() {return (
    <div id='helpDeskConsole' className='helpDeskClosed'>
        {/* helpDeskOpen helpDeskOpenSB helpDeskClosed helpDeskNone */}
        <div></div>
        <section id='helpDeskChats'>
            this is where I need to put the user specific content that is generated when selecting different conversation tabs
        </section>
        <div id='helpDeskSidebar' className='helpDeskSidebarClosed'>
        {/* helpDeskSidebarOpen helpDeskSidebarClosed */}
            this is where I need to put the tools for the admin (link creator, assisted forms, )
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
            <span alt='X'></span>
            <span alt='Library'></span>
            <span alt='Training'></span>
            <span alt='Team'></span>
            <span alt='X'></span>
            <span alt='Office Settings'></span>
            <span alt='Help Desk Lite'></span>
        </div>
        <div id='toolkitTitle'>
            <input type='text'></input>
        </div>
        <div id='toolkitProgress'><span id='toolkitProgressBar'></span></div>
        <div id='toolkitBody'>





        </div>
    </div>
)}


// Toolkit Navigation
// 
// Tabbing: after closing all open tabs, the clicked tab will switch the toolkit content and title; clicking the current open tab closes the toolbar
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// Functionality: 
// - Breaktime Toggle: change class from breakTimeOpen -> breakTimeClosed or breakTimeClosed -> breakTimeOpen 
// - Toolkit Toggle: change class from userDashMini -> userDashMax or userDashMax -> userDashMini
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
