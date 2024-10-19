import React, { useState } from "react";
import Tooltip from "../../Tooltip/Tooltip.tsx";
import Icon from "../../Icon/Icon.tsx";
import FloatingMenu from "../../FloatingMenu/FloatingMenu.tsx";
import FloatingMenuItem from "../../FloatingMenu/FloatingMenuItem/FloatingMenuItem.tsx";
import '../../../app/styles/commons.scss';

interface SwitchLanguageProps {
  options : any;
  light : boolean
}

const SwitchLanguage = ({options , light} : SwitchLanguageProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex-row-start cursor-pointer" >
      <Tooltip position="bottom" text="language">
        <Icon onClick={() => setOpen(prev => !prev)} name="flag" light={light}/>
        <FloatingMenu showing={open} black onClose={() => setOpen(false)}>
          {options.map(option => (
            <FloatingMenuItem whiteText key={option.key}>
              {option.value}
            </FloatingMenuItem>
          ))}
        </FloatingMenu>
      </Tooltip>
    </div>
  );
};

SwitchLanguage.defaultProps = {
  options : [{key : "fr", value : "Frensh"},{key : "eng", value : "English"},{key : "sp", value : "Spanish"}],
  light : false
}

export default SwitchLanguage;
