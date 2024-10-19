import React, { Fragment } from "react";
import { Timeline } from "react-twitter-widgets";
import WidgetFrame from "../WidgetFrame.tsx";


interface WidgetTwitterProps  {
  params : any
}

const WidgetTwitter = ({params} : WidgetTwitterProps) => {
  
  const  { active = true, sourceType = "profile", screenName = "", username = "" } = params;
  if (!active) return <Fragment />;
  

  return (
    <WidgetFrame >
      <Timeline
        dataSource={{
          sourceType,
          screenName
        }}
        options={{
          username,
          height: "500%",
          width: "100%"
        }}
        onLoad={() => {}}
      />
    </WidgetFrame>
  );
};

WidgetTwitter.defaultProps = {
  params: {
    active: true,
    sourceType: 'web',
    screenName: 'screen',
    username: 'Dhia'
  }
}

export default WidgetTwitter;
