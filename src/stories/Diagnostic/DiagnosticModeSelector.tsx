import React, { Fragment, useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton/IconButton";
import List from "@material-ui/icons/List";
import { NETWORK_MODE, GP_INSPECTION_MODE, APPLICATION_MODE } from "../../app/services/diagnosticService/diagnostic.ts";
import Tooltip from "../Tooltip/Tooltip.tsx";

const DiagnosticModeSelector = (onChange: Function) => {
  const [anchor, setAnchor] = useState(undefined);

  const handleChange = (e: any) => {
    //onChange(e);
    setAnchor(undefined);
  };

  return (
    <Fragment>
      <Tooltip position="bottom" text="Options">
        <IconButton aria-owns={anchor ? "simple-menu" : undefined} aria-haspopup="true" onClick={e => setAnchor(e.currentTarget)}>
          <List color="inherit" />
        </IconButton>
      </Tooltip>
      <Menu id="simple-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(undefined)}>
        <MenuItem onClick={() => handleChange(GP_INSPECTION_MODE)}>GP Inspection</MenuItem>
        <MenuItem onClick={() => handleChange(NETWORK_MODE)}>Network</MenuItem>
        <MenuItem onClick={() => handleChange(APPLICATION_MODE)}>Application</MenuItem>
      </Menu>
    </Fragment>
  );
};

DiagnosticModeSelector.defaultProps = {
  onChange: () => {}
};

export default DiagnosticModeSelector;
