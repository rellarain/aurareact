import React from 'react';
import {useState} from 'react';
import ReactDom from 'react-dom/client';
import './styling/style.css';

// Component Imports

import Dashboard from "./components/Dash";
import Scholar from "./components/Scholar";

ReactDom.createRoot(document.getElementById('root')).render(
    <div id='rootDash' className='nightMode rootDashMember'>
        {/* rootDashVisitor rootDashBasic rootDashMember rootDashAssess rootDashScholar rootDashAdmin */}
        {/* dayMode nightMode */}
        <Dashboard />
        <Scholar />
    </div>
)

