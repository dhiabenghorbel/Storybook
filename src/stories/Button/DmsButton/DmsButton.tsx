import React, { CSSProperties, Fragment, useState } from "react";
import Icon from "../../Icon/Icon.tsx";
import FloatingMenu from "../../FloatingMenu/FloatingMenu.tsx";
import FloatingMenuItem from "../../FloatingMenu/FloatingMenuItem/FloatingMenuItem.tsx";

interface DmsButtonProps {
  left: boolean;
  right: boolean;
  documents: string[];
  light : boolean
}

const DmsButton = ({ left, right, documents, light }: DmsButtonProps) => {
  const [open, setOpen] = useState(false);
  const position: CSSProperties = left ? { float: "left", cursor: "pointer" } : right ? { float: "right", cursor: "pointer" } : { float: "left", cursor: "pointer" };

  return (
    <div style={position}>
      <Icon name="folder-open" onClick={() => setOpen(prev => !prev)} style={{ margin: "0", fontSize: "20px", verticalAlign: "middle" }}  light={light}/>
      <FloatingMenu showing={open} black onClose={() => setOpen(false)} style={{  position: "fixed" }}>
        {Array.isArray(documents) ? documents.map((element , idx) => (
          <FloatingMenuItem whiteText key={idx} >
            <span>{element}</span>
          </FloatingMenuItem>)) 
          : (<Fragment/>)
        }
      </FloatingMenu>
    </div>
  );
};

DmsButton.defaultProps = {
  left: false,
  right: false,
  documents:["English" , "Frensh"],
  light : false
};

export default DmsButton;
