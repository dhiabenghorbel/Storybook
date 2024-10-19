import React from "react";
import classNames from "classnames";
import SidebarContent from "./SidebarContent.tsx";
import "./Sidebar.scss";

interface SidebarProps {
  direction: "left" | "right";
}

const Sidebar = ({ direction }: SidebarProps) => {

  return (
    <div
      className={classNames(
        "sidebar-container",
         "sidebar-open" ,
        { "sidebar-close-left": direction === "left" },
        { "sidebar-close-right": direction !== "left" }
      )}
    >
      <SidebarContent />
    </div>
  );
};

Sidebar.defaultProps = {
  direction: "left"
};

export default Sidebar;
