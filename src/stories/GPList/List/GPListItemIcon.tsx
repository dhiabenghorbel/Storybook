/* eslint-disable import/no-dynamic-require,global-require */
import React from "react";
import Lock from "@material-ui/icons/Lock";

interface GPListItemIconProps {
  name: string;
}

const GPListItemIcon = ({ name }: GPListItemIconProps) => {
  if (name) {
    let icon = null;
    icon = require(`../../../GP4You/gp/${name}/icon`).default;
    return icon;
  }
  return <Lock />;
};

export default GPListItemIcon;
