import React from 'react';


export default function Sidebar() {return (
    <div id="sidebar">
        <QuickTools />
    </div>
)}


function QuickTools() {return (
    <div id="quickTools">
        <div id='quickToolsHead'>
            <span src='' alt='X'></span>
            <span src='' alt='X' className='openTab'></span>
            <span src='' alt='X'></span>
            <span src='' alt='X'></span>
            <span src='' alt='X'></span>
            <span src='' alt='X'></span>
            <span src='' alt='X'></span>
        </div>
        <div id='quickToolsTitle'>Quick Tools</div>
        <div id='quickToolsBody'></div>
    </div>
)}