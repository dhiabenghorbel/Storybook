import React from "react";
import Icon from "../../Icon/Icon.tsx";
import "./Subtitle.scss";

interface SubtitleProps {
  id: string;
  help?: boolean;
  onClick?: Function;
  showElement?: boolean;
  notTranslated?: boolean;
}

const Subtitle = ({ id, help, onClick, showElement, notTranslated }: SubtitleProps) => {
  return (
    <div className="subtitle-container">
      <div className="subtitle-main flex-row-start">
        {help && <Icon name="lightbulb" light={false}/>}
        {/* {notTranslated ? <span>{id}</span> : <FormattedMessage id={id} />} */}
        <span>{id}</span>
        {help && (
          <div className="flex-row-end" style={{ paddingLeft: "1rem" }}>
            {!showElement && <Icon name="chevron-down" onClick={onClick} light={false} />}
            {showElement && <Icon name="chevron-up" onClick={onClick} light={false}/>}
          </div>
        )}
      </div>
      <span className="subtitle-line" />
    </div>
  );
};

Subtitle.defaultProps = {
  id : "Subtitle"
}

export default Subtitle;
