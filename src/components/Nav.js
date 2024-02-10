import React, { useState } from 'react';


export default function Navigation() {
    
    const [navClosed, setNavClosed] = useState(true);

    function handleNavClosed() {
        setNavClosed(!navClosed);
        // alert("it worked!");
    }
    
    
    return (
    // navCropClosed navCropPage navCropOpen navCropTools
    <nav id='navCrop' className={navClosed ? "navCropClosed" : "navCropOpen"}>
        {/* Nav Button
                
            Navigation Console: 
                
                

        */}
        <NavigationPanel />
        <button id="navButton" onClick={handleNavClosed} ></button>

    </nav>
)}

function NavigationPanel() { return (
    <main id="navPanel">
        <NavigationBody />
        <NavigationPage />
        


    </main>
)}

function NavigationPage() { return (
    <div id="navPage" placeholder='Search'>
        Office

        {/* Page Tool
                
            Text-Input: 
                Page: 
                Subpage: 
            Close-Page: 
                Animation: 
                Console Close: 
        */}

    </div>
)}



function NavigationBody() { return (
    <div id="navBody">
        
        <ul>
            <li>Banner</li>
            <li>Animated Scene</li>
            <li>Notifications</li>
            <li>Reminders</li>
            <li>Requests</li>
            <li></li>
        </ul>
        <ul>
            <li>Links Panel</li>
            <li>Connections</li>
            <li>Community</li>
            <li>Assessments</li>
            <li>Scholar</li>
            <li></li>
            <li></li>

        </ul>
        <ul>
            <li>Shortcuts</li>
            <li>+</li>

        </ul>
        <ul>
            <li>Settings</li>
            <li>Customize</li>
        </ul>
        <ul>
            <li>Help Desk</li>
        </ul>
        <ul>
            <li>Sign Out</li>
        </ul>
        

    </div>
)}


