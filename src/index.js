import React from 'react';
import ReactDom from 'react-dom';
import './styling/reset.css';
import './styling/style.css';

function Header() {
    return (
        <header id="userHeader"></header>
    )
}

function Navigation() {
    return (
        <nav id='userNav'></nav>
    )
}

function Dashboard() {
    return (
        <main id="userDash"></main>
    )
}

function Footer() {
    return (
        <main id="footer"></main>
    )
}

ReactDom.createRoot(document.getElementById('root')).render(
    <div>
        <Header />
        <Navigation />
        <Dashboard />
        <Footer />
    </div>
)
// ReactDom.render(
//     <div>
//         <Header />
//         <Navigation />
//         <Dashboard />
//         <Footer />
//     </div>,
//     document.getElementById('root'));
