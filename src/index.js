import React from 'react';
import {useState} from 'react';
import ReactDom from 'react-dom/client';
import './styling/style.css';

// Component Imports

import Header from "./components/Header";
import Dashboard from "./components/Dash";
import Navigation from "./components/Nav";
import Admin from "./components/Admin";
import Scholar from "./components/Scholar";

ReactDom.createRoot(document.getElementById('root')).render(
    <div id='rootDash' className='nightMode'>
        {/* rootDashVisitor rootDashMember rootDashScholar rootDashAdmin */}
        {/* dayMode nightMode */}
        <Admin />
        <Scholar />
        <Header />
        <Navigation />
        <Dashboard />
    </div>
)

