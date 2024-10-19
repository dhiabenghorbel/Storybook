import React from "react";
import defaultPhoto from "../../../media/user.png";
import classNames from "classnames";

interface PhotoProps {
  path: string;
  withImageStyle: boolean;
  source : string;
}

const Photo = ({ path, withImageStyle, source }: PhotoProps) => {

  if (source === defaultPhoto && withImageStyle) return <React.Fragment />;

  return (
    <div>
      <img className={classNames("imgCircle", { "far-right-photo": withImageStyle })}  src={source} alt="" />
    </div>
  );
};

Photo.defaultProps = {
  withImageStyle: false,
  path: undefined,
  source : defaultPhoto,
};

export default Photo;
