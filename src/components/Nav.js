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
            <span>Help Desk</span> {/* icon:  */}
            <span>Admin</span> {/* icon:  */}
            <span>Break</span> {/* icon:  */}
            <span>Scholar</span> {/* icon:  */}
            <span>Assessment</span> {/* icon:  */}
            <span>Social</span> {/* icon:  */}
            <span></span>
            <span></span>
            <span></span>
        </section>
    </nav>
)}