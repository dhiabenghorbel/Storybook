import React from "react";
import Icon from "../../Icon/Icon.tsx";
import Tooltip from "../../Tooltip/Tooltip.tsx";

interface DelegationProps {
  light : boolean
}

const Delegation = ({light} : DelegationProps) => {
  return (
    <div className="flex-row-start cursor-pointer" >
      <Tooltip position="bottom" text="delegation">
        <Icon name="user-friends" light={light}/>
      </Tooltip>
    </div>
  );
};

Delegation.defaultProps = {
  light : false
}

export default Delegation;
