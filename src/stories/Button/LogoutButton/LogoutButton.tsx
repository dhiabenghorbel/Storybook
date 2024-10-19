import React from "react";
import Icon from "../../Icon/Icon.tsx";
import Tooltip from "../../Tooltip/Tooltip.tsx";

const LogoutButton = ({ light }:{ light : boolean}) => (
    <div className="flex-row-start cursor-pointer">
      <Tooltip position="bottom" text="logout">
        <Icon name="power-off" style={{  fontSize: "20px" }} light={light}/>
      </Tooltip>
    </div>
);

LogoutButton.defaultProps = {
  light : false
}

export default LogoutButton;
