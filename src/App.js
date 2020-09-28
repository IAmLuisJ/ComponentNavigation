import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';

        const items = [
            {
                title: "What is your greatest skill?",
                content: "The ability to learn."
            },
            {
                title: "How do you define success?",
                content: "Being useful to others."
            },
            {
                title: "What is the answer to life?",
                content: '42.'
            }
        ];

        const options = [
            {
                label: "Red",
                value: "red"
            },
            {
                label: "Blue",
                value: 'blue'
            },
            {
                label: "Green",
                value: 'green'
            }
        ];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <Header />
            <Route path='/'>
                <Intro />
            </Route>
            <Route path="/faq">
            <Accordion items={items}/>
            </Route>
            <Route path="/list">
            <Search />
            </Route>
            <Route path="/dropdown">
            <button onClick={() => setShowDropdown(!showDropdown)}>Show Dropdown</button>
            { showDropdown ?
            <Dropdown options={options} selection={selected} onSelectedChange={setSelected} label='Select a Color'/>
            : null
            }
            </Route>
            <Route path="/translate">
            <Translate />
            </Route>
            <Footer />
        </div>
       )
};