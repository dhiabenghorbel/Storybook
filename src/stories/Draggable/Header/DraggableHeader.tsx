import React, { Fragment, ReactNode } from "react";
import "./DraggableHeader.scss";
import CloseButton from "../../Button/CloseButton/CloseButton.tsx";
import MinimizeButton from "../../Button/MinimizeButton/MinimizeButton.tsx";

interface DraggableHeaderProps {
  title: string;
  minimized: boolean;
  handleMinimize?: Function;
  handleClose?: Function;
  extraButtons?: ReactNode;
}


const DraggableHeader = ({ title, minimized, handleMinimize, handleClose, extraButtons }: DraggableHeaderProps) => {
  
  return (
    <div className="draggable-handler flex-row-space-between">
      <div className="flex-row-space-between">
        <h3>{title}</h3>
      </div>
      <div className="flex-row-space-between">
        {extraButtons || <Fragment />}
        <MinimizeButton minimized={minimized} onClick={handleMinimize}/> 
        {handleClose ? <CloseButton  onClick={() => handleClose} /> : <Fragment />}
      </div>
    </div>
  );
};

DraggableHeader.defaultProps = {
  title: "Draggable Window",
  minimized: false,
  handleMinimize: () => {},
  handleClose: undefined,
  extraButtons: undefined
};

export default DraggableHeader;
