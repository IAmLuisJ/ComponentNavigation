import React from 'react';

const Uses = () => {

    const hardware = [
        {
            icon: 'laptop',
            header: 'Laptop',
            description: 'Macbook Pro 15 inch (2017)'
        },
        {
            icon: 'desktop',
            header: 'Monitors',
            description: 'LG 24" IPS Monitors x3'
        }
    ];

    const usesListRendered = hardware.map((item) => {

        return (<div className="item">
                <i className={ item.icon + " icon"}></i>
                    <div className="content">
                        <div className="header">{item.header}</div>
                        <div className="description">{item.description}</div>
                    </div>
                </div>);
    })

    return (
        <div className="ui container">
            <div className="ui list">
               {usesListRendered}
            </div>
        </div>
    )
}

export default Uses;