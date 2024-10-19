import React from "react";
// import { withRouter } from "react-router-dom";
import GPListItem from "./GPListItem.tsx";
import { GpListValue } from "../../../app/models/HttpResponses/GpMenuResponse.ts";

interface GPListProps {
  gps: GpListValue[];
  externalElements: GpListValue[];
  location: any;
  collapseBar: boolean;
}

const GPList = ({ gps, externalElements, location, collapseBar }: GPListProps) => {
  const finalList: GpListValue[] = [...gps, ...externalElements];
  const gpItems = finalList.map((gp: GpListValue) => (
    <GPListItem
      key={gp.name}
      name={gp.name}
      implemented={gp.implemented}
      isActive={location.pathname === `/${gp.name}`}
      gp={gp}
      collapseBar={collapseBar}
      label={gp.apiLabel}
    />
  ));

  return <ul>{gpItems}</ul>;
};

GPList.defaultProps = {
  gps: [{apiLabel:"Hour natures", implemented :true , name : "AGD05LM0"},
  {apiLabel:"Activities schedule", implemented :true , name : "AGC05E00"},
  {apiLabel:"Counters", implemented :true , name : "AGC05CE0"}],
  externalElements: [],
  location: {pathname : "/AGD05LM0"},
  collapseBar : false
};

export default GPList;
