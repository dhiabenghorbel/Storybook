import React, { useState } from "react";
import BooleanDataItem from "./Boolean/BooleanDataItem.tsx";
import DateDataItem from "./Time/DateDataItem.tsx";
import RadioDataItem from "./Radio/RadioDataItem.tsx";
import StaticSelectDataItem from "./Select/StaticSelectDataItem.tsx";
import TextDataItem from "./Text/TextDataItem.tsx";
import BlobDataItem from "./Blobs/BlobDataItem.tsx";
import PhotoBlobDataItem from "./Blobs/PhotoBlobDataItem.tsx";
import RegisterButtonDataItem from "./Time/RegisterButton.tsx";
import YearOptions from "./Time/YearOptions.tsx";
import FloatDataItem from "./Number/FloatDataItem.tsx";
import TextAreaDataItem from "./Text/TextAreaDataItem.tsx";
import InfoDataItem from "./InfoDataItem.tsx";
import ReportDataItem from "./Report/ReportDataItem.tsx";
import RangeDateDataitem from "./Time/RangeDateDataitem.tsx";
import TimePickerDataItem from "./Time/TimePickerDataItem.tsx";
import { defaultProps, IDataItem } from "../../app/models/IDataItem.ts";
import MonthOptions from "./Time/MonthOptions.tsx";
import YearMonthOptions from "./Time/YearMonthOptions.tsx";

const DataItemImpl = (props: IDataItem) => {
  const [referenceValue, setReferenceValue] = useState("");
  const { allowFor, forbidFor, reference, isModal, hiddenInModal, requiredFor } = props;
  const propsCopy: IDataItem = { ...props };

  if (isModal && !hiddenInModal) propsCopy.hidden = false;
  if (reference) {
    const allowForOptions = allowFor && allowFor.length > 0 ? allowFor : undefined;
    if (isModal && allowForOptions && allowForOptions.indexOf("") === -1) allowForOptions.push("");
    if (Array.isArray(requiredFor) && requiredFor.indexOf(referenceValue) !== -1) {
      propsCopy.required = true;
    }
    if (Array.isArray(allowForOptions) && allowForOptions.indexOf(referenceValue) === -1) {
      propsCopy.hidden = true;
      propsCopy.required = false;
    }
    if (Array.isArray(forbidFor) && forbidFor.indexOf(referenceValue) !== -1) {
      propsCopy.hidden = true;
      propsCopy.required = false;
    } else if (typeof forbidFor === "object" && !Array.isArray(forbidFor)) {
      if (forbidFor.test(referenceValue)) {
        propsCopy.hidden = true;
        propsCopy.required = false;
      }
    }
  }

  switch (props.type) {
    case "text":
    case "number":
    case "float":
    case "integer":
    case "email":
    case "password":
    case "currency":
    case "percent":
    case "time":
      return <TextDataItem {...propsCopy} />;
    case "timePicker":
      return <TimePickerDataItem {...propsCopy} />;
    case "textarea":
      return <TextAreaDataItem {...propsCopy} />;
    case "customFloat":
      return <FloatDataItem {...propsCopy} />;
    case "date":
      return <DateDataItem {...propsCopy} />;
    case "rangeDate":
      return <RangeDateDataitem {...propsCopy} />;
    case "select":
      //return props.params.type === "dynamic" ? <DynamicSelectDataItem {...propsCopy} /> : <StaticSelectDataItem {...propsCopy} />;
      return <StaticSelectDataItem {...propsCopy} />;
    // case "codes":
    //   return <CodeListDataItem {...propsCopy} />;
    case "boolean":
      return <BooleanDataItem {...propsCopy} />;
    case "file":
      return <BlobDataItem {...propsCopy} />;
    case "month":
      return (
        <StaticSelectDataItem {...propsCopy}>
          <MonthOptions inclusiveCounting />
        </StaticSelectDataItem>
      );
    case "year":
      return (
        <StaticSelectDataItem {...propsCopy}>
          <YearOptions upperMargin={propsCopy.upperMargin} lowerMargin={propsCopy.lowerMargin} numberValues={propsCopy.numberValues} />
        </StaticSelectDataItem>
      );
    case "yearMonth":
      return (
        <StaticSelectDataItem {...propsCopy}>
          <YearMonthOptions />
        </StaticSelectDataItem>
      );
    case "report":
      return <ReportDataItem />;
    case "photo":
      return <PhotoBlobDataItem {...propsCopy} />;
    case "radio":
      // return props.params.type === "dynamic" ? <RadioDynamicDataItem {...propsCopy} /> : <RadioDataItem {...propsCopy} />;
      return <RadioDataItem {...propsCopy} />;
    case "register":
      return <RegisterButtonDataItem {...propsCopy} />;
    case "info" :
      return <InfoDataItem {...propsCopy} />;
    default:
      return <TextDataItem {...propsCopy} />;
  }
};

DataItemImpl.defaultProps = defaultProps;

export default DataItemImpl;
