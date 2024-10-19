import React from "react";
import { IDataItem } from "../../../app/models/IDataItem.ts";
import { Occurrence } from "../../../app/models/IOcurrence.ts";
import Checkbox from "../../DataItems/Boolean/Checkbox.tsx";
import Icon from "../../Icon/Icon.tsx";
import LoadingSpinner from "../../Loading/LoadingSpinner.tsx";

interface TableOccurrenceValueProps {
  occurrence?: Occurrence | Occurrence[];
  dataItem: IDataItem;
  noValueFallOff?: string;
  // added props for storybook controls
  loading : boolean,
  val : string | number
}

const TableOccurrenceValue = ({ occurrence, dataItem, noValueFallOff, loading, val }: TableOccurrenceValueProps) => {  
  if (loading) return <LoadingSpinner type="small" />;

  if (dataItem.type === "boolean") {
    return (
      <div style={{ color: dataItem.color }}>
        <Checkbox readOnly checked={dataItem.or ? val === dataItem.or[1] : false} />
      </div>
    );
  } else if (dataItem.type === "report" && val !== 0) {
    return (
      <div style={{ color: dataItem.color }}>
        <Icon name="file-download" disabled />
      </div>
    );
  } else if (dataItem.type === "file" && val !== 0 && val !== null && val !== "") {
    return (
      <div style={{ color: dataItem.color }}>
        <Icon name="file" disabled />
      </div>
    );
  } else if (dataItem.type === "file" && val === 0) {
    return <div> </div>;
  } else if (dataItem.type === "year" && val) {
    return <div style={{ color: dataItem.color }}>{new Date(val).getFullYear()}</div>;
  }

  if (!val && noValueFallOff) {
    return <React.Fragment>{noValueFallOff}</React.Fragment>;
  }
  if (!val) return <React.Fragment />;
  return <React.Fragment>{dataItem.name === "updateStatus" ? <div style={{ color: "red" }}>{val}</div> : <div style={{ color: dataItem.color }}>{val}</div>}</React.Fragment>;
};

TableOccurrenceValue.defaultProps = {
  val:"",
  loading : false,
  dataItem : { type: 'boolean',or: ['X', ''],color:"red",name:""},
}


export default TableOccurrenceValue;

