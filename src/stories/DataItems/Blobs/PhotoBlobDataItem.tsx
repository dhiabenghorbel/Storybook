import React, { FunctionComponent, ReactElement, useState } from "react";
import Photo from "./Photo.tsx";
import { IDataItem, defaultProps } from "../../../app/models/IDataItem.ts";

const PhotoBlobDataItem: FunctionComponent<IDataItem> = (props): ReactElement => {
  const [value , onChange] : [any , Function] = useState(props);
  const [path, setPath] = useState("1");

  if (props.hidden || (props.hideIfNoValue && (!value || value === ""))) return <React.Fragment />;
  return <Photo path={value} withImageStyle={props.withImageStyle} />;
};

PhotoBlobDataItem.defaultProps = defaultProps;

export default PhotoBlobDataItem;
