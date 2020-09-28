import React from 'react';

const Intro = () => {
    return (
        <div className="ui container">
            <h1>Hi, I'm Luis Juarez</h1>
            <p>I'm a developer, musician, and creator. I work as a Senior Analyst in the world of Services.</p>
            <div className="ui dividing header"></div>
            <div className="ui centered card">
                <div className="image">
                    <img src="images/IMG_2974.jpeg" alt="me" />
                </div>
                <div className="content">
                    <a className="header" href="/">Luis Juarez</a>
                    <div className="meta">
                        <span className="date">That's me</span>
                    </div>
                    <div className="description">
                        More info
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;