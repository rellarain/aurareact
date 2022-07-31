import React from 'react';

function NavigationPanel() { return (
    <main id="navPanel">

    </main>
)}

function NavigationPage() { return (
    <input id="navPage"></input>
)}

function NavigationButton() { return (
    <button id="navButton"></button>
)}

export default function Navigation() {return (
    <nav id='navAnchor'>
            {/* Nav Button
                
                Navigation Console: 
                
                

            */}
            <NavigationButton />
            <NavigationPanel />
            <NavigationPage />
            {/* Page Tool
                
                Text-Input:
                    Page:
                    Subpage: 

                Close-Page: 
                    Animation:
                    Console Close: 

            */}
    </nav>
)}




// Navigation Panel Opening

