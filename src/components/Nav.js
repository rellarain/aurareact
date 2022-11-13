import React from 'react';


export default function Navigation() {return (
    <nav id='navCrop'>
        {/* Nav Button
                
            Navigation Console: 
                
                

        */}
        <NavigationPanel />
        <NavigationPageClose />
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
    <button id="navButton" >
    </button>
)}

function NavigationBody() { return (
    <div id="navBody">
        <section id="MemberNav">
        


        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        

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