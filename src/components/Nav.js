import React from 'react';
import MemberNav from "./MemberNav";


export default function Navigation() {return (
    <nav id='navCrop'>
        {/* Nav Button
                
            Navigation Console: 
                
                

        */}
        <NavigationPanel />
        <NavigationPage />
        <NavigationPageClose />
        <NavigationButton />

    </nav>
)}

function NavigationPanel() { return (
    <main id="navPanel">
        <NavigationBody />
        


    </main>
)}

function NavigationPage() { return (
    <input id="navPage" placeholder='Search'>
        {/* Page Tool
                
            Text-Input:
                Page:
                Subpage: 
            Close-Page: 
                Animation:
                Console Close: 

        */}
    </input>
)}
function NavigationPageClose() { return (
    <button id="navPageClose">
        X
    </button>
)}

function NavigationButton() { return (
    <button id="navButton">

    </button>
)}

function NavigationBody() { return (
    <div id="navBody">
        <MemberNav />

        

    </div>
)}





// Navigation Panel Opening

