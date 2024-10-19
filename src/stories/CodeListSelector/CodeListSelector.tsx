import React, { FunctionComponent, ReactElement, useState } from "react";
import Modal from "../Modal/Modal.tsx";
import { closeModal } from "../Modal/ModalListener.tsx";
import ButtonDefault from "../Button/DefaultButton/ButtonDefault.tsx";
import Select from "../Select/Select.tsx";
import RuleSytemOptions from "./RuleSystemOptions.tsx";
import CodeListTable from "./CodeListTable.tsx";
import { IRule } from "../../app/models/IRule.ts";

interface CodeListSelectorProps {
  nudoss: string;
  directory: string;
  onClick: Function;
  index: number;
  elements : any;
}

const CodeListSelector: FunctionComponent<CodeListSelectorProps> = ({ nudoss, directory, index, onClick, elements }): ReactElement => {
  const [rule, setRule] = useState("");

  const getRuleValues = (rule: string) => {
    setRule(rule);
  };

  const selectedValue = (val: IRule) => {
    onClick(val["code"], index);
    closeModal();
  };

  return (
    <Modal medium>
      <Select name={"props.name"} label="Rule system" value={rule} onChange={(e: any) => getRuleValues(e)}>
        <RuleSytemOptions  />
      </Select>
      <CodeListTable elements={elements} onClick={selectedValue} />
      <div className="flex-row-end">
        <ButtonDefault text="close" onClick={() => closeModal()} />
      </div>
    </Modal>
  );
};

CodeListSelector.defaultProps = {
  elements : [{code: "HA" , label: "Holiday absence"},{code: "SA" , label: "Sickness"},{code: "ACC" , label: "Accident"}]
}

export default CodeListSelector;
