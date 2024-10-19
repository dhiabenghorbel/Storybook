import React, { FunctionComponent, ReactElement } from "react";
import { IRule } from "../../app/models/IRule.ts";
interface RuleSystemOptionsProps {
  options?: IRule[];
}
const RuleSystemOptions: FunctionComponent<RuleSystemOptionsProps> = ({ options }): ReactElement => {
  return (
    <React.Fragment>
      <option value="" />
      {options && options.map(item => (
        <option value={item["code"]} key={item["code"]}>{`${item["code"]} (${item["label"]||""})`}</option>
      ))}
    </React.Fragment>
  );
};

export default RuleSystemOptions;
