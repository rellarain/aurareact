import React, { useState } from 'react';


export default function Console() {
    // Console Variables
    const consoleTitle = "Assessment";
    const today = new Date();
    const time = "8:00";
    const achievementScore = 100;

    const [consoleSidebarClosed, setConsoleSidebarClosed] = useState(true);
    const [consoleHelpClosed, setConsoleHelpClosed] = useState(true);



    // Console Functions
    function formatDate(date) {
        return new Intl.DateTimeFormat('en-us', {weekday: 'long', month: 'short', day: '2-digit', year:'numeric'}).format(date);
    }
    
    function handleConsoleSidebarClosed() {
        setConsoleSidebarClosed(!consoleSidebarClosed);
        // alert("it worked!");
    }

    function handleConsoleHelpClosed() {
        setConsoleHelpClosed(!consoleHelpClosed);
        // alert("it worked!");
    }
    
    
    return(
    <div className='console'>
        {/* consoleSidebarClosed consoleSidebarOpen */}
        <main className={consoleSidebarClosed ? "consoleSidebarClosed" : "consoleSidebarOpen"}>
            {/*  */}
            <header>
                <section>{consoleTitle}</section>
                <section>  <span>{formatDate(today)}</span> <span>{time}</span> </section>
                <section> <span style={{width: achievementScore + "%"}}></span> </section>
                <section> <button onClick={handleConsoleSidebarClosed}></button> </section>
                <section></section>
            </header>
            {/*  */}
            <div className={consoleHelpClosed ? "consoleHelpClosed" : "consoleHelpOpen"}> 
                <section className='consoleSidebar'>
                    <section className='consoleSidebarContent'>
                        <section>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </section>
                        <section>Title </section>
                        <section></section>
                    </section>
                    <section className='consoleSidebarHelp'>
                        <button onClick={handleConsoleHelpClosed}>?</button>
                    </section>
                </section>
                <section className='consoleDesk'></section>
            </div>
        </main>
    </div>


)}