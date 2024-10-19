import React from "react";
import classNames from "classnames";

interface NoteProps {
  id: string;
  type: "" | "error" | "required" ;
  alignCenter: boolean;
  halfWith: boolean;
  smallNote: boolean;
  bold: boolean;
  center?: boolean;
}

const Note = ({ center, id, type, alignCenter, halfWith, smallNote, bold }: NoteProps) => (
  <div className={alignCenter ? "aligned-note inline-grid" : smallNote ? "small-note inline-grid" : halfWith ? "half-width inline-grid" : "full-width padding-top"}>
    <p className={classNames({ "text-red hover-red-text": type === "error" || type === "required" }, { "text-bold": bold }, { "text-center": center })}>
      {/* <FormattedMessage id={id} /> */}
      <span>{id}</span>
      {type === "required" && " *"}
    </p>
  </div>
);

Note.defaultProps = {
  id : "Note"
}

export default Note;
