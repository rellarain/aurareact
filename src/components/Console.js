import React, { useState } from 'react';


export default function Console() {
    // Console Variables
    const consoleTitle = "Assessment";
    const today = new Date();
    const time = "8:00";
    const achievementScore = 100;

    const [consoleSidebarClosed, setConsoleSidebarClosed] = useState(true);



    // Console Functions
    function formatDate(date) {
        return new Intl.DateTimeFormat('en-us', {weekday: 'long', month: 'short', day: '2-digit', year:'numeric'}).format(date);
    }
    
    function handleConsoleSidebarClosed() {
        setConsoleSidebarClosed(!consoleSidebarClosed);
        // alert("it worked!");
    }
    
    
    return(
    <div className='console'>
        {/* consoleSidebarClosed consoleSidebarOpen */}
        <main className={consoleSidebarClosed ? "consoleSidebarClosed" : "consoleSidebarOpen"}>
            <header>
                <section>{consoleTitle}</section>
                <section>  <span>{formatDate(today)}</span> <span>{time}</span> </section>
                <section> <span style={{width: achievementScore + "%"}}></span> </section>
                <section> <button onClick={handleConsoleSidebarClosed}></button> </section>
                <section></section>
            </header>
            <section>
                <section>
                    <section>g</section>
                    <section></section>
                </section>
                <section></section>
            </section>
        </main>
    </div>


)}