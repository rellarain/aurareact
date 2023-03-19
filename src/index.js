import React from 'react';
import ReactDom from 'react-dom/client';
import './styling/style.css';

// Component Imports

import Header from "./components/Header";
import Dashboard from "./components/Dash";
import Navigation from "./components/Nav";
import Sidebar from "./components/Sidebar";
import HelpScreen from "./components/HelpScreen";
import AdminFooter from "./components/AdminF"








ReactDom.createRoot(document.getElementById('root')).render(
    <div>
        <Header />
        <Navigation />
        <Sidebar />
        <Dashboard />
        <HelpScreen />
        <AdminFooter/>
    </div>
)

