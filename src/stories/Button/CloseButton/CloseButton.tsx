import React from 'react';
import Tooltip from '../../Tooltip/Tooltip.tsx';
import Icon from '../../Icon/Icon.tsx';

interface CloseButtonProps  {
  onClick: Function, 
  disabled: boolean,
  light : boolean
}

const CloseButton = ({onClick , disabled , light} : CloseButtonProps) => (
  <div className="flex-row-start cursor-pointer" >
    <Tooltip position="bottom" text="cancel">
      <Icon onClick={onClick} disabled={disabled} name="times"  light={light} />
    </Tooltip>
  </div>
);


CloseButton.defaultProps = {
  onClick: () => {},
  disabled: false,
  light : false
};

export default CloseButton;
