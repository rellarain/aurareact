import React, { useState } from 'react';


export default function Navigation() {
    // 
    
    const [navConsoleClosed, setNavConsoleClosed] = useState(true);

    function handleNavConsoleClosed() {
        setNavConsoleClosed(!navConsoleClosed);
        // alert("it worked!");
    }    
    return (
    <nav id='navCrop' className={navConsoleClosed ? "navConsoleClosed" : "navConsoleOpen"}>
        <section>
            <button onClick={handleNavConsoleClosed}></button>
            <span>Help Desk</span> 
            {/* 
                icon: ?

                
            */}
            <span>Admin</span> 
            {/* 
                icon: briefcase

                
            */}
            <span>Break</span> 
            {/* 
                icon: smiley face? heart? 

                
            */}
            <span>Scholar</span> 
            {/* 
                icon: textbook/journal w/ tabs

                
            */}
            <span>Assessment</span> 
            {/* 
                icon: report pages

                
            */}
            <span>Social</span> 
            {/* 
                icon:  

                
            */}

        </section>
    </nav>
)}