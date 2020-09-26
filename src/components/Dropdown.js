import React from 'react';

const Dropdown = (props) => {
    
    const renderedOptions = props.options.map((option) => {
        return (
        <option key={option.value} value={option.value}>{option.label}</option>
        )
    }
    )

    return (
        <div className="ui form">
            <label>Please select one of the following</label>
            <select className="select" onChange={(e) => props.onSelectedChange(e.target.value)}>
            {renderedOptions}
            </select>
        </div>
    )
}

export default Dropdown;