import React, { Fragment } from "react";
import { IDiagnostic } from "../../app/models/IDiagnostic.ts";
import Typography from "@material-ui/core/Typography";

interface DiagnosticDialogBodyProps {
  content: IDiagnostic;
}

const DiagnosticDialogBody = ({ content }: DiagnosticDialogBodyProps) => {
  return (
    <Typography color="textSecondary">
      <Fragment>
        <div>
          <p>
            <strong>Mode: </strong>
            <span>{content.mode}</span>
          </p>
          <p>
            <strong>Action: </strong>
            <span>{content.action}</span>
          </p>
          <p>
            <strong>TimeStamp: </strong>
            <span>{content.timestamp}</span>
          </p>
        </div>
        {content.data ? (
          <div>
            <p>
              <strong>Data: </strong>
            </p>
            {content.data.map(d => (
              <p>
                <strong>{d.item}: </strong>
                <span>{d.value}</span>
              </p>
            ))}
          </div>
        ) : (
          <div>
            <p>
              <strong>Result: </strong>
              <span>{content.result}</span>
            </p>
          </div>
        )}
      </Fragment>
    </Typography>
  );
};

DiagnosticDialogBody.defaultProps = {
  content: {
  product:"GP4You-RD",
  version:"1.2.3-rc1",
  author:"SOPRA-HR-GP4You-RD-Team",
  mode:"NETWORK_MODE",
  action:"HTTP Request",
  timestamp:"05/05/2023 11:49:38",
  data:[
    {item: "Status", value: "Pending"},
    {item: "Method", value: "GET"}
  ]
}
};

export default DiagnosticDialogBody;
