import React, { FunctionComponent, ReactElement } from "react";
import ButtonDefault from "../../../../stories/Button/DefaultButton/ButtonDefault.tsx";
import GenericLoadingBar from "../../../../stories/Loading/Bar/GenericLoadingBar.tsx";
import "../Report.scss";

interface ReportLinkProps {
  id: string;
  label?: string;
  population: string;
  domain: string;
  items: [];
  isModal?: boolean;
  button?: boolean;
  action?: string;
  outputs:any;
  executed : boolean;
  showOutputs: boolean;
}

const ReportLink: FunctionComponent<ReportLinkProps> = ({ id, label, domain, items, isModal, button, population, action, showOutputs, outputs, executed }): ReactElement => {
  
  const setShowOutputs = () => {
    outputs = !outputs;
  }

  const onShowsOutputs = e => {
    if (outputs.length > 1) setShowOutputs();
    //else onSubmit(e, outputs[0]);
  };

  return (
    <React.Fragment>
      <div className="margin-top flex-row-start align-items-start">
        {!button && (
          <div  /*onClick={onSubmit}*/>
            {label}
          </div>
        )}
        {button && (
          <div id="button">
            <ButtonDefault disabled={outputs.length === 0} text={label} onClick={e => onShowsOutputs(e)} />
          </div>
        )}
        {showOutputs && (
          <div className="options-selector" id="outputs-box">
            {outputs.map(out => {
              return <ButtonDefault text={out.label} /*onClick={e => onSubmit(e, out)}*/ style={{ minHeight: "auto" }} />;
            })}
          </div>
        )}
        </div>
      <div>{executed && <GenericLoadingBar />}</div>
    </React.Fragment>
  );
};

ReportLink.defaultProps = {
  outputs : [{label : "output 1"}, {label : "output 2"}]
}

export default ReportLink;
