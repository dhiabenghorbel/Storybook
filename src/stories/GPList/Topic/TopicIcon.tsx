import React from "react";
import CastForEducationIcon from "@material-ui/icons/Cast";
import ListIcon from "@material-ui/icons/List";
import TimeLanpsIcon from "@material-ui/icons/Timelapse";
import CompareIcon from "@material-ui/icons/CompareArrows";
import IndeterminateIcon from "@material-ui/icons/IndeterminateCheckBox";
import InfoIcon from "@material-ui/icons/Info";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { Layers } from "@material-ui/icons";

interface TopicItemProps {
  name: string;
}

const TopicIcon = ({ name }: TopicItemProps) => {
  const classname: string = "gp-topic-icon";
  switch (name) {
    case "PAD":
      return <InfoIcon className={classname} />;
    case "ABS":
      return <CopyrightIcon className={classname} />;
    case "GTA":
      return <TimeLanpsIcon className={classname} />;
    case "GAF":
      return <CastForEducationIcon className={classname} />;
    case "RSK":
      return <InfoIcon className={classname} />;
    case "SKL":
      return <ListIcon className={classname} />;
    case "TRA":
      return <CastForEducationIcon className={classname} />;
    case "SRQ":
      return <CompareIcon className={classname} />;
    case "ASS":
      return <IndeterminateIcon className={classname} />;
    default:
      return <Layers className={classname} />;
  }
};

TopicIcon.defaultProps = {
  name: ""
};

export default TopicIcon;
