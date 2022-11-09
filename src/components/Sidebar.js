import React from 'react';


export default function Sidebar() {return (
    <div id="sidebar">
        <QuickTools />
    </div>
)}


function QuickTools() {return (
    <div id="quickTools">
        <div id='quickToolsHead'>
            <span alt='Agenda' className='openTab'></span>
            <span alt='Tracking'></span>
            <span alt='Library'></span>
            <span alt='X'></span>
            <span alt='X'></span>
            <span alt='X'></span>
            <span alt='Break Time'></span>
            <span alt='Simulator'></span>
            <span alt='Settings'></span>
        </div>
        <div id='quickToolsTitle'>Quick Tools</div>
        <div id='quickToolsBody'></div>
    </div>
)}