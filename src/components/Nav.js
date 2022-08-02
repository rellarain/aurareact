import React from 'react';

export default function Navigation() {return (
    <nav id='navCrop'>
            {/* Nav Button
                
                Navigation Console: 
                
                

            */}
            <NavigationPanel />


    </nav>
)}

function NavigationPanel() { return (
    <main id="navPanel">
        
            <NavigationPage />
            <NavigationButton />

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

function NavigationButton() { return (
    <button id="navButton">
        
    </button>
)}






// Navigation Panel Opening

