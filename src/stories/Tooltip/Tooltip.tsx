import React, { Fragment, ReactElement, FunctionComponent } from "react";
import "./Tooltip.scss";
import "../storybook.scss";
interface TooltipProps {
  position: "left" | "right" | "top" | "bottom" | "close-right" | "spaced-right" | "aligned-right";
  text?: string;
  withoutTranslation?: boolean;
  children?: ReactElement | ReactElement[];
}

const Tooltip: FunctionComponent<TooltipProps> = ({ position, text, withoutTranslation, children }): ReactElement => {

  return  (
    <Fragment >
      <div className={`tooltip tooltip-align-center`}>
        {children}
        <span className={`tooltip-text tooltip-text-${position}`}>{text}</span>
      </div>
    </Fragment>
  )
};

Tooltip.defaultProps = {
  position: "bottom",
  text: "text",
  children: <Fragment >{"Mouse over here to show the tooltip description !"}</Fragment>,
  withoutTranslation:false
};

export default Tooltip;
