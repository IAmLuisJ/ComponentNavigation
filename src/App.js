import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

        const items = [
            {
                title: "What is React",
                content: "React is a front end framework"
            },
            {
                title: "Why use React",
                content: "React is a favorite JS library among engineers"
            },
            {
                title: "How do you use React",
                content: 'You use React by creating components'
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
    console.log(selected);

    return (
        <div>
            <Accordion items={items}/>
            <Search />
            <Dropdown options={options} selection={selected} onSelectedChange={setSelected}/>
        </div>
       )
};