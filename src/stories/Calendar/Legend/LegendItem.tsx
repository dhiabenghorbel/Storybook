import React, { Fragment } from "react";
import "./Legend.scss";
import FloatingMenuItem from "../../FloatingMenu/FloatingMenuItem/FloatingMenuItem.tsx";

interface LegendItemProps {
  bgColor?: string;
  pendingBorder?: boolean;
  label?: string;
  title?: boolean;
  borderRight?: boolean;
  border?: boolean;
}

const LegendItem = ({ bgColor, pendingBorder, label, title, borderRight, border, ...rest }: LegendItemProps) => {
  let text = <Fragment />;
  if (label) {
    if (title) {
      text = (
        <h5 className="margin-top-bottom">
          {label}
        </h5>
      );
    } else {
      text = (
        <div className="legend-icon-text">
          {label}
        </div>
      );
    }
  }

  const style = (bgColor: string, bRight: boolean = false, border: boolean = false) => {
    const s = {
      backgroundColor: bgColor
    };
    if (border) s["border"] = "1px solid";
    if (bRight) s["borderRight"] = "2px solid";
    return s;
  };

  return (
    <FloatingMenuItem noPadding {...rest}>
      {bgColor && <div className="legend-cube" style={style(bgColor, borderRight, border)} />}
      {pendingBorder && <div className="legend-cube" style={{ border: "dashed" }} />}
      {text}
    </FloatingMenuItem>
  );
};

LegendItem.defaultProps = {
  bgColor: undefined,
  borderRight: false,
  border: false,
  label: undefined,
  title: false
};

export default LegendItem;
