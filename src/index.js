import React from 'react';
import ReactDom from 'react-dom/client';
import './styling/style.css';

// Component Imports

import Header from "./components/Header";
import Dashboard from "./components/Dash";
import Navigation from "./components/Nav";
import Admin from "./components/Admin";

ReactDom.createRoot(document.getElementById('root')).render(
    <div>
        <Admin />
        <Header />
        <Navigation />
        <Dashboard />
    </div>
)

