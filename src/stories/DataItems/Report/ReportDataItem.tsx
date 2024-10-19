import React, { FunctionComponent, ReactElement } from "react";
import { IDataItem } from "../../../app/models/IDataItem.ts";
import ReportLink from "../../../app/pages/Report/components/ReportLink.tsx";

const ReportDataItem: FunctionComponent<IDataItem> = (props): ReactElement => {
  return (
    <div className="full-width">
      <ReportLink label={props.label} id={props.name} population={props.population} domain={props.domain} items={props.items} isModal={props.isModal} button={props.button} executed={props.executed} showOutputs={props.showOutputs} outputs={props.outputs}/>
    </div>
  );
};

ReportDataItem.defaultProps = {
  label : "report",
  button : true
};

export default ReportDataItem;
