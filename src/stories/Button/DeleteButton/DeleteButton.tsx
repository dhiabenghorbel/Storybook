import React from "react";
import Tooltip from "../../Tooltip/Tooltip.tsx";
import Icon from "../../Icon/Icon.tsx";

interface DeleteButtonProps {
  onClick : Function,
  light : boolean
}

const DeleteButton = ({onClick , light} : DeleteButtonProps) => (
  <div className="flex-row-start cursor-pointer" >
    <Tooltip text="delete" position="bottom">
      <Icon name="trash" onClick={() => onClick()} light={light}/>
    </Tooltip>
  </div>
);

DeleteButton.defaultProps = {
  onClick: () => {},
  light : false
};

export default DeleteButton;
