import React from 'react';
import Tooltip from '../../Tooltip/Tooltip.tsx';
import Icon from '../../Icon/Icon.tsx';

interface MinimizeButtonProps {
  minimized:boolean,
  onClick: Function,
  light : boolean
}

const MinimizeButton = ({minimized, onClick , light} : MinimizeButtonProps) => (
  <div className="flex-row-start cursor-pointer" >
    <Tooltip position="bottom" text={minimized ? "Full View" : "Minimized View"}>
      <Icon onClick={onClick} name={minimized ? "window-maximize" : "minus"} light={light}/>
    </Tooltip>
  </div>
);

MinimizeButton.defaultProps = {
  minimized: false,
  onClick: null,
  light : false
};

export default MinimizeButton;
