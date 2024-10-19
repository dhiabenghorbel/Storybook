import classnames from "classnames";
import React, { useState } from "react";
import { GpListValue, GpTopic } from "../../../app/models/HttpResponses/GpMenuResponse.ts";
import "./GPTopic.scss";
import GPTopicItem from "./GPTopicItem.tsx";

interface GPTopicListProps {
  gps: GpListValue[];
  externalElements: GpListValue[];
  collapseBar: boolean;
  topicList : any;
}

const GPTopicList = ({ gps, externalElements, collapseBar,topicList }: GPTopicListProps) => {
  const [showGps, setShowGps] = useState("");

  const topicItems = topicList.map((topic: GpTopic) => (
    <GPTopicItem key={topic.name} gps={topic.gps} name={topic.name} label={topic.label} show={showGps === topic.name} toggleShow={setShowGps} collapseBar={collapseBar} />
  ));

  return <ul className={classnames({ "gp-list-collapse": collapseBar }, "full-width")}>{topicItems}</ul>;
};

GPTopicList.defaultProps = {
  gps: [],
  externalElements: [],
  topicList: [{name:"PAD",label :"My employee information", 
  gps : [
    {apiLabel:"Hour natures", implemented :true , name : "AGD05LM0"},
    {apiLabel:"Activities schedule", implemented :true , name : "AGC05E00"},
    {apiLabel:"Counters", implemented :true , name : "AGC05CE0"}
  ]},
  {name:"ABS",label :"My absences", 
  gps : [
    {apiLabel:"Absence request", implemented :true , name : "ASW0AGE0"},
    {apiLabel:"cancel absence request", implemented :true , name : "ASW0AGE1"},
    {apiLabel:"My absence schedule", implemented :true , name : "ASCSALE5"}
  ]},
  {name:"SKL",label :"My skills", 
  gps : [
    {apiLabel:"Update my skills", implemented :true , name : "ASW03DE0"},
    {apiLabel:"Compare skills", implemented :true , name : "ASCSALE2"}
  ]}]
};

export default GPTopicList;
