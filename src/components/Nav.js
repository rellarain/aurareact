import React from 'react';


export default function Navigation() {return (
    // navCropClosed navCropPage navCropOpen navCropTools
    <nav id='navCrop' className='navCropPage'>
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
            <li>Sign Out</li>
        </ul>
        

    </div>
)}





// Navigation Panel Opening

// class navPanelOpen extends navButton {
//     var navPanel =document.getElementById("navPanel");
//     var navCrop =document.getElementById("navCrop");
//     var navPage =document.getElementById("navPage");
//     var navPageClose =document.getElementById("navPageClose");

    

//     if (navCrop.style.width == "30px" && navPage.style.top == "-30px") {
//         navPanel.style.height = "calc(100% - 10px)";
//         navPanel.style.width = "300px";
//         navPage.style.top = "9px";
//         navPageClose.style.top = "9px";
//     } else if (navCrop.style.width == "30px" && navPage.style.top == "9px") {
//         navPanel.style.height = "calc(100% - 10px)";
//         navPanel.style.width = "300px";
//         navPage.style.top = "9px";
//         navPageClose.style.top = "9px";
//     } else {
//         navPanel.style.height = "30px";
//         navPanel.style.width = "30px";
//         navPage.style.top = "-30px";
//         navPageClose.style.top = "-30px";
//     }
// }