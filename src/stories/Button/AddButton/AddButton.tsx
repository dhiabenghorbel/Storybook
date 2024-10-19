import React from "react";
import Tooltip from "../../Tooltip/Tooltip.tsx";
import Icon from "../../Icon/Icon.tsx";

const AddButton = ({ onClick , light }: { onClick: Function , light : boolean}) => (
  <div className="flex-row-start cursor-pointer" >
    <Tooltip text="add" position="bottom">
      <Icon name="plus-circle" onClick={() => onClick()} light={light} />
    </Tooltip>
  </div>  
);
 
AddButton.defaultProps = {
  onClick: () => {},
  light : false
};

export default AddButton;
