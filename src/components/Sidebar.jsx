// Sidebar.js
import React, { useState } from "react";
import "./styles.css";

const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const sidebarItems = [
    { id: 1, label: "Item 1", children: ["Child 1"] },
    { id: 2, label: "Item 2" },
    { id: 3, label: "Item 1", children: ["Child 2", "Child 3"] },
    // ... more sidebar items
  ];

  return (
    <div className="sidebar">
      {sidebarItems.map((item) => (
        <div
          key={item.id}
          className="sidebar-item"
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          {item.label}
          {item.children &&
            item.children.length > 0 &&
            hoveredItem === item.id && (
              <div className="submenu">
                {item.children.map((child, index) => (
                  <p key={index}>{child}</p>
                ))}
              </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
