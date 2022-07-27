import React from 'react';
import ReactDom from 'react-dom';

function Header() {
    return (
        <header className="userHeader"> Ooga </header>
    )
}

function Navigation() {
    return (
        <nav className='userNav'>Booga</nav>
    )
}

function Dashboard() {
    return (
        <main>Wonka Bonka</main>
    )
}


ReactDom.render(
    <div>
        <Header />
        <Navigation />
        <Dashboard />
    </div>,
    document.getElementById('root'));
