import React from 'react';


export default function Navigation() {return (
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
        Social / 1600.0000.0000.0000
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
            <li>ACADEMY</li>
        </ul>
        <ul>
            <li>MEMBER</li>
            <li>Portfolio</li>
            <li>Connections</li>
            <li></li>
            <li></li>
            <li>Customize</li>
            <li>Settings</li>
        </ul>
        <ul>
            <li>SOCIAL</li>
            <li>Community</li>
            <li>District</li>
            <li>Region </li>
            <li></li>
            <li></li>
        </ul>
        <ul>
            <li>ASSESSMENT</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul>
            <li>OFFICE</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul>
            <li>SCHOLAR</li>
            <li>Training </li>
            <li>Apprenticeship</li>
            <li>Examination</li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul>
            <li>MANAGEMENT</li>
            <li>Director </li>
            <li>Manager</li>
            <li>Attendant</li>
            <li>Advanced Support</li>
            <li>Support </li>
            <li></li>
        </ul>
        <ul>
            <li>DESIGNER</li>
            <li>Designer</li>
            {/* subtraits, factors, subfactors */}
            <li>Support</li>
            {/* items, feedback */}
            <li>Analytics</li>
            <li>Manual</li>
            <li></li>
        </ul>
        <ul>
            <li>EDUCATOR</li>
            <li>Instructor</li>
            <li>Instructor Support</li>
            <li>Scholar Support</li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul>
            <li>DEVELOPER</li>
            <li>Architects </li>
            <li>QA </li>
            <li>QA Support</li>
            <li>Devs</li>
            <li>Dev Support </li>
            <li></li>
            <li>Liaison</li>
        </ul>
        <ul>
            <li>STUDIOS</li>
            <li>Editor</li>
            <li>Writer</li>
            <li>Translator</li>
            <li>Translator Support</li>

        </ul>
        <ul>
            <li>COMMITTEE</li>
            <li>Executive </li>
            <li>Board</li>
            <li>Panel </li>
            <li>Committee </li>
            <li>C-Suite </li>
            <li></li>
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