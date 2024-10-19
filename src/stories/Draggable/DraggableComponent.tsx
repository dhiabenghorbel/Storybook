import React, { Fragment, ReactNode, useState } from "react";
import Draggable, { DraggableData, DraggableEventHandler } from "react-draggable";
import DraggableHeader from "./Header/DraggableHeader.tsx";
import DraggableBody from "./Body/DraggableBody.tsx";
import "./DraggableComponent.scss";

interface DraggableComponentProps {
  children: ReactNode;
  title: string;
  headerButtons?: ReactNode;
  handleClose?: Function;
  onStart?: DraggableEventHandler;
  onStop?: DraggableEventHandler;
}

const DraggableComponent = ({ title, headerButtons, handleClose, onStart, onStop, children }: DraggableComponentProps) => {
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const [minimized, setMinimized] = useState(false);

  const handleDrag: DraggableEventHandler = (e, ui) => {
    const { x, y } = deltaPosition;
    setDeltaPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
  };

  const handleMinimize = () => {
    setMinimized(previous => !previous);
  };

  return (
    <Draggable defaultPosition={{ x: 200, y: 200 }} grid={[1, 1]} position={deltaPosition} onDrag={handleDrag} onStart={onStart} onStop={onStop}>
      <div className="draggable-container">
        <DraggableHeader extraButtons={headerButtons} handleMinimize={handleMinimize} handleClose={handleClose} minimized={minimized} title={title} />
        <DraggableBody minimized={minimized}>{children}</DraggableBody>
      </div>
    </Draggable>
  );
};

DraggableComponent.defaultProps = {
  children: <Fragment />,
  title: "Draggable Window",
  headerButtons: undefined,
  handleClose: undefined,
  onStart: (e: any, data: DraggableData) => {},
  onStop: (e: any, data: DraggableData) => {}
};

export default DraggableComponent;
