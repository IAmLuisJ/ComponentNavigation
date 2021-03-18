import React from "react";

const Uses = () => {
  const hardware = [
    {
      icon: "laptop",
      header: "Laptop",
      description: "Macbook Pro 15 inch (2017)",
    },
    {
      icon: "desktop",
      header: "Monitors",
      description: 'LG - 24" IPS LED FHD FreeSync Monitor - Black x3',
    },
    {
      icon: "code",
      header: "IDE",
      description: "Visual Studio Code/JetBrains PHPStorm",
    },
    {
      icon: "sitemap",
      header: "Dock",
      description: "j5create - USB Type-C Triple Display Docking Station",
    },
    {
      icon: "keyboard",
      header: "Keyboard",
      description: "Razer - Blackwidow Ultimate V3 - Green Switches",
    },
    {
      icon: "sound",
      header: "Speakers",
      description: "Razer - Nommo Chroma 2.0 Gaming Speakers (2-Piece) - Black",
    },
    {
      icon: "keyboard",
      header: "Mouse",
      description:
        "Razer - DeathAdder Elite Wired Optical Gaming Mouse with Chroma Lighting - Black",
    },
    {
      icon: "keyboard",
      header: "Mousepad",
      description: "Razer Goliathus Extended Chroma",
    },
    {
      icon: "home",
      header: "Chair",
      description: "Staples Hyken Mesh Task Chair, Black",
    },
    {
      icon: "headphones",
      header: "Headset",
      description: "Logitech G933 Wireless Headset 7.1 surround",
    },
  ];

  const usesListRendered = hardware.map((item) => {
    return (
      <div className="item">
        <i className={item.icon + " icon"}></i>
        <div className="content">
          <div className="header">{item.header}</div>
          <div className="description">{item.description}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="ui container">
      <div className="ui huge list">{usesListRendered}</div>
    </div>
  );
};

export default Uses;
