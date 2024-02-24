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
            <button>Help Desk</button> 
            {/* 
                icon: ?

                
            */}
            <button>Admin</button> 
            {/* 
                icon: briefcase

                
            */}
            <button>Break</button> 
            {/* 
                icon: smiley face? heart? 

                
            */}
            <button>Scholar</button> 
            {/* 
                icon: textbook/journal w/ tabs

                
            */}
            <button>Assessment</button> 
            {/* 
                icon: report pages

                
            */}
            <button>Social</button> 
            {/* 
                icon:  

                
            */}

        </section>
    </nav>
)}