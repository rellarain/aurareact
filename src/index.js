import React from 'react';
import ReactDom from 'react-dom/client';
import './styling/style.css';

// Component Imports

import Header from "./components/Header";
import Dashboard from "./components/Dash";
import Navigation from "./components/Nav";
import Sidebar from "./components/Sidebar";
import HelpDesk from "./components/HelpDesk";








ReactDom.createRoot(document.getElementById('root')).render(
    <div>
        <Header />
        <Navigation />
        <Dashboard />
        <Sidebar />
        <HelpDesk />
    </div>
)

