import React, { Fragment } from "react";
import Select from "react-select";
import ButtonDefault from "../../Button/DefaultButton/ButtonDefault.tsx";
import PaginatedTable from "../../Table/Pagination/PaginatedTable.tsx";
import { autocompleteStyles } from "./AutocompleteStyle";
import "./NudossSelector.scss";

interface NudossSelectorProps {
  gpid: string;
  show: boolean;
  multipleSelector: boolean;
  disableNudossSelector: boolean;
  loaded?: Function;
  // added prop for storybook documentation
  SubordinatesValues : object | any;
}

const NudossSelector = ({ disableNudossSelector, gpid, show, multipleSelector, loaded , SubordinatesValues}: NudossSelectorProps) => {
 
  const dossierArray = () => {
    const label = SubordinatesValues.map(e => e.data.label);
    const code = SubordinatesValues.map(e => e.data.value);
    const dossiers : any = [];
    for (let i = 0; i < code.length; i++) {
      dossiers.push({ value: code[i], label: label[i], color: "#253858" });
    }
    return dossiers;
  };

  if (!show) return <Fragment />;
  return multipleSelector ? (
    <Fragment>
      <PaginatedTable   />
      <div className="flex-row-end full-width">
        <ButtonDefault info  text="apply" />
      </div>
    </Fragment>
  ) : (
    <Fragment>
       <br />
      <Select
        isDisabled={disableNudossSelector}
        className="basic-single"
        styles={autocompleteStyles}
        classNamePrefix="select"
        onChange={() => {}}
        options={dossierArray()}
        placeholder={"Select an employee record"}
      />
      <div style={{ width: "100%", textAlign: "right", fontSize: "smaller", marginTop: "1%", color: "#596577" }}>
        {SubordinatesValues.length} 
        {" records"}
      </div> 
    </Fragment>
  );
};

NudossSelector.defaultProps = {
  show: true,
  disableNudossSelector: false,
  SubordinatesValues : [
  {data : {label : "record number 1", value : 1}},
  {data : {label : "record number 2", value : 2}},
  {data : {label : "record number 3", value : 3}}
]
};

export default NudossSelector;
