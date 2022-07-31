import React from 'react';
import ReactDom from 'react-dom/client';
import './styling/reset.css';
import './styling/style.css';

// Component Imports

import Header from "./components/Header";
import Dashboard from "./components/Dash";
import Navigation from "./components/Nav";
import Sidebar from "./components/Sidebar";








ReactDom.createRoot(document.getElementById('root')).render(
    <div>
        <Header />
        <Navigation />
        <Dashboard />
        <Sidebar />
    </div>
)

