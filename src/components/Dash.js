import React, { useState } from 'react';
import OldConsole from './OldConsole';
import Header from './Header';
import Console from './Console';


export default function Dashboard() {
    const primaryInterfaceState = "Scholar";
    // Inactive Social Assessment Scholar Admin
    const secondaryInterfaceState = "Open"; 
    // Open Closed
    const tertiaryInterfaceState ="Closed";
    // Open Closed


    // const [tertiaryInterfaceClosed, setTertiaryInterfaceClosed] = useState(true);
    // function handleSetTertiaryInterfaceClosed() {
    //     setTertiaryInterfaceClosed(!tertiaryInterfaceClosed);
    // }
    
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
        {/* "interfaceContainer " + "primaryInterface" + activeOldConsole + " secondaryInterface" + open/closed + " tertiaryInterface" + open/closed */}
        <nav>
            <button>Account</button>
            <button>BreakTime</button>
            <button>Social</button>
            <button>Assessment</button>
            <button>Scholar</button>
            <button>Admin</button>
            <button>HelpDesk</button>
        </nav>
        <main>
            {/* <Header/> */}
            <Header/>
            <main className='mainscreen'>
                <section className='secondaryInterface'>
                    {/* <OldConsole oldConsoleTitle={"helpDesk"}/> */}
                    <Console/>
                </section>
                <section className='primaryInterface'>
                    {/* <OldConsole oldConsoleTitle={"dashboard"}/> */}
                    {/* <OldConsole oldConsoleTitle={"social"}/> */}
                    {/* <OldConsole oldConsoleTitle={"scholar"}/> */}
                    {/* <OldConsole oldConsoleTitle={"admin"}/> */}
                    {/* <OldConsole oldConsoleTitle={"assessmentA"}/> */}
                    {/* <OldConsole oldConsoleTitle={"assessmentG"}/> */}
                    {/* <OldConsole oldConsoleTitle={"assessmentL"}/> */}
                    {/* <OldConsole oldConsoleTitle={"assessmentS"}/> */}
                    {/* <OldConsole oldConsoleTitle={"assessmentX"}/> */}
                    <Console/>
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