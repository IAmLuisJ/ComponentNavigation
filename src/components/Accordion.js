import React, { useState } from 'react';

const Accordion = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        console.log("Title Clicked", index);
        setActiveIndex(index);
    }

    const renderedItems = props.items.map((query, index) => {
        const active = index === activeIndex ? 'active' : '';

    return (
        <div className="AccordionClass" key={query.title}>
        <div className={"title " + active} onClick={() => onTitleClick(index)}> 
            <i className="dropdown icon"></i>
            {query.title}
        </div>
        <div className={`content ${active}`}>
            <p>{query.content}</p>
        </div>
        </div>
        )
    });

return <div className="ui styled accordion">
    {renderedItems}
</div>
};

export default Accordion;