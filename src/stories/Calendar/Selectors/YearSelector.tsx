/* eslint-disable react/no-did-update-set-state */
import React, { useState } from "react";
import ButtonDefault from "../../Button/DefaultButton/ButtonDefault.tsx";
import FloatingMenu from "../../FloatingMenu/FloatingMenu.tsx";
import FloatingMenuItem from "../../FloatingMenu/FloatingMenuItem/FloatingMenuItem.tsx";

const yearsBack = 7;
const yearsForward = 2;

 const Currentyear = new Date().getFullYear();

const yearList = () => {
  const range = yearsBack + yearsForward + 1;
  return Array(...new Array(range)).map((e, i) => i - yearsBack + Currentyear);
};

const YearSelector = ({ currentYear, onChange }: { currentYear: number; onChange: Function }) => {

  const [open, setOpen] = useState(false);
  const [year , setNewDate] = useState(currentYear);
  const years = yearList();
  const select = (selected: number) => {
    if (onChange) {onChange(selected)
      setNewDate(selected)}
    else {setNewDate(selected);}
  };

  return (
    <div style={{ position: "relative" }}>
      <ButtonDefault text={onChange ? year.toString() : currentYear.toString()} onClick={() => setOpen(true)} dropdown info style={{ margin: "1rem", padding: "1rem" }} />
      <FloatingMenu showing={open} onClose={() => setOpen(false)} style={{ top: "5rem", left: "0.5rem", position: "absolute" }}>
        {years.map(y => (
          <FloatingMenuItem key={y} onClick={() => select(y)} uppercase>
            {y}
          </FloatingMenuItem>
        ))}
      </FloatingMenu>
    </div>
  );
};

YearSelector.defaultProps = {
  currentYear : 2023
};

export default YearSelector;
