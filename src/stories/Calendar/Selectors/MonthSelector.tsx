/* eslint-disable react/no-did-update-set-state */
import React, { useState } from "react";
import * as PropTypes from "prop-types";
import ButtonDefault from "../../Button/DefaultButton/ButtonDefault.tsx";
import FloatingMenu from "../../FloatingMenu/FloatingMenu.tsx";
import FloatingMenuItem from "../../FloatingMenu/FloatingMenuItem/FloatingMenuItem.tsx";
import Icon from "../../Icon/Icon.tsx";
import "./monthSelector.scss";

const MonthSelector = ({ currentMonth,  onChange , withArrows, months }) => {
  const [open, setOpen] = useState(false);
  const [month , setMonth] = useState(currentMonth);
  const select = selected => {
    if (onChange) {onChange(selected)}
    else {setMonth(selected);}
  };

  return (
    <div className="month-selector">
      {withArrows && <Icon name="chevron-left" light={false} solid onClick={() => select(month - 1)} disabled={month === 0} />}
      <ButtonDefault text={onChange ? months[currentMonth] : months[month]} onClick={() => setOpen(true)} dropdown info style={{ margin: "1rem", padding: "1rem" }} />
      <FloatingMenu showing={open} onClose={() => setOpen(false)} style={{ top: "5rem", left: "2.5rem", position: "absolute" }}>
        {months.map((month, i) => (
          <FloatingMenuItem onClick={() => select(i)} key={month} uppercase>
            {month}
          </FloatingMenuItem>
        ))}
      </FloatingMenu>
      {withArrows && <Icon name="chevron-right" light={false} solid onClick={() => select(month + 1)} disabled={month === 11} />}
    </div>
  );
};

MonthSelector.propTypes = {
  currentMonth: PropTypes.number.isRequired,
  withArrows: PropTypes.bool,
  months: PropTypes.arrayOf(PropTypes.string)
};

MonthSelector.defaultProps = {
  currentMonth: 0,
  withArrows: false,
  months: [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
};

export default MonthSelector;
