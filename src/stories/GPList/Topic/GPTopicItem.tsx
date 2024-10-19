import React, { Fragment } from "react";
import Tooltip from "../../Tooltip/Tooltip.tsx";
import GPList from "../List/GPList.tsx";
import TopicIcon from "./TopicIcon.tsx";
import { GpListValue } from "../../../app/models/HttpResponses/GpMenuResponse.ts";

interface GPTopicProps {
  gps: GpListValue[];
  name: string;
  label: string;
  show: boolean;
  toggleShow: Function;
  collapseBar: boolean;
}

const GPTopicItem = ({ gps, name, label, show, toggleShow, collapseBar }: GPTopicProps) => {
  const  isDesktop  = true;
  return (
    <Fragment>
      {isDesktop ? (
        collapseBar === false ? (
          <li className="gp-topic-item" onClick={() => toggleShow(show ? "" : name)}>
            <TopicIcon name={name} />
            <span className="gp-topic-item-hover">
              {label}
            </span>
          </li>
        ) : (
          <Tooltip text={label} position="spaced-right">
            <li className="gp-topic-item" onClick={() => toggleShow(show ? "" : name)}>
              <TopicIcon name={name} />
            </li>
          </Tooltip>
        )
      ) : (
        <li className="gp-topic-item" onClick={() => toggleShow(show ? "" : name)}>
          <TopicIcon name={name} />
          <span className="gp-topic-item-hover">
            {label}
          </span>
        </li>
      )}
      {show ? <GPList  collapseBar={collapseBar} /> : <Fragment />}
    </Fragment>
  );
};

GPTopicItem.defaultProps = {
  gps: [],
  name: "",
  label: "My employee information",
  show: false,
  toggleShow: () => {},
  collapseBar: false
};

export default GPTopicItem;
