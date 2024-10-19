import { FormControlLabel, FormGroup } from '@mui/material';
import Switch from '@mui/material/Switch';
import classNames from 'classnames';
import React, { useState } from 'react';
interface IMaterialSwitchProps {
  label: string,
  disabled?: boolean,
  position?: "top" | "start" | "bottom" | "end",
  value?: any,
  aligned?: boolean,
  smallSize?: boolean,
  mediumSize?: boolean,
  extraSmallSize?: boolean,
  onChange: Function
  
}

export const MaterialSwitch = ({ disabled, label, position, value, onChange, aligned, extraSmallSize, mediumSize, smallSize }: IMaterialSwitchProps) => {

  const [checked, setChecked] = useState(value);

  const handleChange = (e: any) => {
    setChecked(e.target.checked);
    onChange(e.target.checked);
  }

  return (
    <div
      className={classNames(
        "input-container",
        "full-width",
        { inline: aligned },
        { "full-width": !smallSize && !aligned },
        { "half-width": mediumSize },
        { "third-width": smallSize },
        { "fourth-width": extraSmallSize }
      )}
    >
      <FormGroup sx={{ display: 'flex', flexDirection: 'row', alignItems: 'left' }}>
        <FormControlLabel
          sx={{ flexDirection: "flex" , alignItems : "center"}}
          disabled={disabled}
          control={<Switch checked={checked} onChange={handleChange} />}
          /*label={useTranslatedMessagesString(label)}*/
          label={label}
          labelPlacement={position}
        />
      </FormGroup>
    </div>
  )
};

MaterialSwitch.defaultProps = {
  position: "start",
  aligned: false,
  label: "Switch",
  value:false
  
};


export default MaterialSwitch ;
