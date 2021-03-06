import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Uses from './components/Uses';

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
    const [showDropdown, setShowDropdown] = useState(false);

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
            <button className="fluid ui toggle button" onClick={() => setShowDropdown(!showDropdown)}>Show Settings</button><br />
            { showDropdown ?
            <Dropdown options={options} selection={selected} onSelectedChange={setSelected} label='Select a Color'/>
            : null
            }
            </Route>
            <Route path="/translate">
            <Translate />
            </Route>
            <Route path="/uses">
                <Uses />
            </Route>
            <Footer />
        </div>
       )
};