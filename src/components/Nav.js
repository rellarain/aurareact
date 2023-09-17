import React from 'react';


export default function Navigation() {return (
    // navCropClosed navCropPage navCropOpen navCropTools
    <nav id='navCrop' className='navCropClosed'>
        {/* Nav Button
                
            Navigation Console: 
                
                

        */}
        <NavigationPanel />
        <NavigationButton />

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


function NavigationButton() { return (
    <button id="navButton" >
    </button>
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


