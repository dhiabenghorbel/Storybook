import React from "react";
import "../Subtitle/Subtitle.scss";
import classnames from "classnames";


interface SmallTitleProps {
  id: string;
  medium?: boolean;
}

const SmallTitle = ({id, medium} : SmallTitleProps) => (
  <div
    className={classnames("small-title", {
      "half-width": medium
    })}
  >
    {/* <FormattedMessage id={id} /> */}
    <span>{id}</span>
  </div>
);

SmallTitle.defaultProps = {
  id : "Title"
}

export default SmallTitle;
