/* eslint-disable react/no-unused-prop-types,no-undef */
import React from "react";
import * as PropTypes from "prop-types";
import TextField from "../Input/TextField/TextField.tsx";
import Icon from "../Icon/Icon.tsx";

export interface CodeListSourceProps {
  population: string | undefined;
  domain: string | undefined;
  datasection: string | undefined;
  name: string | undefined;
  label: string | undefined;
  reference?: string | string[];
  source: string | undefined;
  nuStep: string | undefined;
  idTask: string | undefined;
  labelKey: string | undefined;
  defaultValue?: string | number;
  required?: boolean;
  onChange?: Function;
  value: string;
  correspondence?: string;
  sourceDataItem?: string;
  delay?: number;
  filterBySubordinate?: boolean;
  labels?: object;
  itemGpid?: string;
  itemDossier?: string;
  types?: any;
}

const CodeListSource = ({
  population,
  domain,
  datasection,
  name,
  label,
  source,
  nuStep,
  idTask,
  labelKey,
  reference,
  defaultValue,
  required,
  onChange,
  value,
  delay,
  correspondence,
  sourceDataItem,
  labels,
  types
}: CodeListSourceProps) => {

  return (
    <React.Fragment>
      <div className="flex-row-start">
        <TextField type="text" label={name} value={value} required={required} mediumSize/>
        <Icon name="search" light={false} />
      </div>
    </React.Fragment>
  );
};

CodeListSource.propTypes = {
  noEmptyOption: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labels: PropTypes.object,
  types: PropTypes.object,
  datasection: PropTypes.string,
  population: PropTypes.string,
  domain: PropTypes.string,
  source: PropTypes.string,
  nuStep: PropTypes.string,
  labelKey: PropTypes.string,
  reference: PropTypes.string | PropTypes.arrayOf(PropTypes.string),
  defaultValue: PropTypes.string,
  sourceDataItem: PropTypes.string,
  newValue: PropTypes.string
};
CodeListSource.defaultProps = {
  datasection: undefined,
  population: undefined,
  domain: undefined,
  source: "codesfromlink",
  nuStep: "1",
  labelKey: "ZE00IDOU00",
  reference: undefined,
  defaultValue: undefined,
  sourceDataItem: undefined,
  newValue: undefined,
  delay: undefined
};

export default CodeListSource;
