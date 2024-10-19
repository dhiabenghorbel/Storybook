import React, { Fragment, useState } from "react";
import { getHistory, GP_INSPECTION_MODE } from "../../app/services/diagnosticService/diagnostic.ts";
import TOPICS from "../../app/services/topics";
import DownloadButton from "../Button/DownloadButton/DownloadButton.tsx";
import DiagnosticModeSelector from "./DiagnosticModeSelector.tsx";
import DraggableComponent from "../Draggable/DraggableComponent.tsx";
import DiagnosticDialogBody from "./DiagnosticDialogBody.tsx";

const Diagnostic = () => {
  
  const active = true;
  const [mode, setMode] = useState(GP_INSPECTION_MODE);

  const handleDownload = () => {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(getHistory(), null, 4))}`;
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    const date = new Date();
    downloadAnchorNode.setAttribute("download", `Diagnostic${date.getDate()}${date.getMonth()}${date.getFullYear()}${date.getHours()}${date.getMinutes()}.json`);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const headerButtons = (
    <Fragment>
      <DownloadButton onClick={handleDownload} />
      <DiagnosticModeSelector onChange={e => setMode(e)} />
    </Fragment>
  );
  //const diagnosticWindowContent = content.reverse().find(e => e.mode === mode);

  return active ? (
    <DraggableComponent headerButtons={headerButtons} title={mode} handleClose={() => TOPICS.DIAGNOSTIC_TOPIC.next(false)}>
      <DiagnosticDialogBody  />
    </DraggableComponent>
  ) : (
    <Fragment />
  );
};

export default Diagnostic;
