import React from "react";
import myImage from "../images/045A0066.jpeg";

const Intro = () => {
  return (
    <div className="ui container">
      <h1>Hi, I'm Luis Juarez</h1>
      <p>
        I'm a developer, musician, and creator. I work as a Senior Analyst in
        the world of Services.
      </p>
      <div className="ui dividing header"></div>
      <div className="ui centered card">
        <div className="image">
          <img src={myImage} alt="Luis Juarez" />
        </div>
        <div className="content">
          <div className="header" href="/">
            Luis Juarez
          </div>
          <div className="meta">
            <span className="date">That's me</span>
          </div>
          <div className="description"></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
