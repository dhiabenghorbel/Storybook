import React, { Fragment, ReactNode } from 'react';
import './DraggableBody.scss';

interface DraggableBodyProps {
  minimized: boolean,
  children: ReactNode,
}

const DraggableBody = ({ minimized, children }: DraggableBodyProps) => (
  !minimized ? (
    <div className="draggable-body">
      {children}
    </div>
  ) : <Fragment />
);

DraggableBody.defaultProps = {
  minimized: false,
  children: <Fragment > {"Draggable body content"} </Fragment>
};

export default DraggableBody;
