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
            <span></span>
            <span></span>
            <span></span>
            <span>fdgdfgdfg</span>
            <span></span>
            <span>dfgdfgdfg</span>
            <span></span>
            <span></span>
            <span></span>
        </section>
    </nav>
)}