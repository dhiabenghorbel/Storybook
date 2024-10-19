import React, { useState } from "react";
import "./Legend.scss";
import ButtonDefault from "../../Button/DefaultButton/ButtonDefault.tsx";
import FloatingMenu from "../../FloatingMenu/FloatingMenu.tsx";
import LegendItem from "./LegendItem.tsx";

interface LegendProps {
  items: Array<any>;
  visible: boolean;
}
const Legend = ({ items, visible }: LegendProps) => {
  const [visbl, setVisible] = useState(visible);

  const toggleVisibility = () => {
    setVisible(prevState => !prevState);
  };

  return (
    <div className="flex-row-space-between" style={{ position: "relative" }}>
      <ButtonDefault info onClick={() => toggleVisibility()} text="legend" />
      <FloatingMenu  showing={visbl} onClose={() => setVisible(false)} style={{ top: "3.7rem", left: "1rem" }}>
        <LegendItem title label="Absences" />
        {items.map(e => (
          <LegendItem bgColor={e.bgColor} label={e.reason} />
        ))}
        <LegendItem title label="Status" />
        <LegendItem pendingBorder label="Waiting" />
      </FloatingMenu>
    </div>
  );
};

Legend.defaultProps = {
  items: [{bgColor : "#677FE7" , reason :"Holiday absence"} , {bgColor : "#00FFFF" , reason :"Sickness"}],
  visible: false
};

export default Legend;
