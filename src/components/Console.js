import React, { useState } from 'react';


export default function Console() {


    return (
        <main className='console'>
            <section className='consoleHeader'>
                <div></div>
                <button></button>
                <div>[CONSOLE TITLE] / [TAB TITLE]</div>
                <div>this is for the time</div>
                <button>?</button>
                <div>
                    <button>Support</button>
                    <button>MGMT</button>
                    <button>Design</button>
                    <button>Architect</button>
                    <button>Instructor</button>
                    <button>Curriculator</button>
                    <button>Developer</button>
                    <button>Engineer</button>
                    <button>Artist</button>
                    <button>Writer</button>
                    <button>Translator</button>
                    <button>Editor</button>
                    <button>+</button>
                </div>
            </section>
            <section className='consoleBody'>
                <section className='consoleSidebar'></section>
                <section className='consoleHelp'></section>
            </section>
            <section className='consoleDesk'>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
            </section>

        </main>
    )
}