import React from 'react';
import classnames from 'classnames';
/*
interface TabProps {
  index: number,
  label: string,
  active: boolean,
  onClick: Function,
} */

const Tab = ({ index, label, active, onClick }) => {
  return (
    <div className="tab-container">
    <div
      className={classnames(
        "tab",
        { "text-disabled": !active },
        { "text-black": active },
      )}
      onClick={() => onClick(index)}
    >
      {label}
    </div>
      <div
        className={classnames(
        "tab-indicator",
        { "tab-indicator-active": active },
        )}
      />
    </div>
  );
};

export default Tab;
