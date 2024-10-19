import * as PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { asArray } from "../../infrastructure/processing/asArray.ts";
import Tab from "./Tab.tsx";
import "./tabSelector.scss";

interface TabSelectorProps {
  noMargin?: boolean;
  options?: object;
  children?: object;
}

const TabSelector = ({ children, options, noMargin } : TabSelectorProps) => {

  const [value, setValue] = useState(0);
  const handleChange = val => setValue(val);
  const tabs = asArray(options).map((e, index) => <Tab key={index} index={index} label={e} active={value === index} onClick={handleChange} />);

  return (
    <Fragment >
      <div className={`tab-selector full-width flex-row-center ${noMargin ? "no-margin" : ""}`}>{tabs}</div>
      <div className={`tabs-card full-width flex-row-center ${noMargin ? "no-margin" : ""}`}>{asArray(children)[value]}</div>
    </Fragment>
  );
};


TabSelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.any,
  noMargin: PropTypes.bool
};

TabSelector.defaultProps = {
  options: ["Tab 1" ,"Tab 2"],
  children: ["Welcome, you have selected Tab 1." , "Welcome, you moved to Tab 2."],
  noMargin: false
};

export default TabSelector;
