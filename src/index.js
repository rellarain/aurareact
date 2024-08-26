import React from 'react';
import {useState} from 'react';
import ReactDom from 'react-dom/client';
import './styling/style.css';

// Component Imports

import Dashboard from "./components/Dash";

ReactDom.createRoot(document.getElementById('root')).render(
    <div id='rootDash' className='nightMode rootDashAdmin'>
        {/* rootDashVisitor rootDashBasic rootDashMember rootDashAssess rootDashScholar rootDashAdmin */}
        {/* dayMode nightMode */}
        <Dashboard />
    </div>
)

