import React, { useState } from 'react';
import Console from './Console';
import Header from './Header';


export default function Dashboard() {
    const primaryInterfaceState = "Scholar";
    // Inactive Social Assessment Scholar Admin
    const secondaryInterfaceState = "Closed"; 
    // Open Closed
    const tertiaryInterfaceState ="Closed";
    // Open Closed


    const [tertiaryInterfaceClosed, setTertiaryInterfaceClosed] = useState(true);
    function handleSetTertiaryInterfaceClosed() {
        setTertiaryInterfaceClosed(!tertiaryInterfaceClosed);
    }
    
    // function handlePrimaryInterfaceInactive() {
    //     let primaryInterfaceState = "Inactive";
    //     alert("it worked!");

    // }
    // function handlePrimaryInterfaceSocial() {
    //     let primaryInterfaceState = "Social";

    // }
    // function handlePrimaryInterfaceScholar() {
    //     let primaryInterfaceState = "Scholar";

    // }
    // function handlePrimaryInterfaceAdmin() {
    //     let primaryInterfaceState = "Admin";

    // }
    // function handlePrimaryInterfaceAssessment() {
    //     let primaryInterfaceState = "Assessment";

    // }



    
    return (
    <main className={"interfaceContainer " + "primaryInterface" + primaryInterfaceState + " secondaryInterface" + secondaryInterfaceState + " tertiaryInterface" + tertiaryInterfaceState}>
        {/* "interfaceContainer " + "primaryInterface" + activeConsole + " secondaryInterface" + open/closed + " tertiaryInterface" + open/closed */}
        <nav>
            <button>Account</button>
            <button>Social</button>
            <button>Assessment</button>
            <button>Scholar</button>
            <button>Admin</button>
            <button>Help Desk</button>
            <button>Close</button>
        </nav>
        <main>
            {/* <Header/> */}
            <Header/>
            <main className='mainscreen'>
                <section className='secondaryInterface'>
                    <Console consoleTitle={"helpDesk"}/>
                </section>
                <section className='primaryInterface'>
                    <Console consoleTitle={"dashboard"}/>
                    <Console consoleTitle={"social"}/>
                    {/* <Console consoleTitle={"scholar"}/> */}
                    {/* <Console consoleTitle={"admin"}/> */}
                    {/* <Console consoleTitle={"assessment"}/> */}
                </section>
            </main>
        </main>


    </main>
)}



// NOTES: 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 