import React, { FunctionComponent, ReactElement } from "react";
import "./GenericSearchInput.scss";
import TextField from "../../Input/TextField/TextField.tsx";

interface GenericSearchInputProps {
  onChange: (s: string) => void;
  onClick?: () => void;
  black?: boolean;
  value: string;
  label?: string;
  regExp?: string;
  dossierFormat?: boolean;
}

const GenericSearchInput: FunctionComponent<GenericSearchInputProps> = ({ onChange, black, value, regExp, label, onClick, dossierFormat }): ReactElement => (
  <TextField
    onChange={(e: any) => onChange(e.target.value)}
    onClick={onClick}
    icon="search"
    type="text"
    label={label}
    backgroundDark={black}
    value={value}
    regExp={regExp}
    dossierFormat={dossierFormat}
  />
);

GenericSearchInput.defaultProps = {
  onChange: s => {},
  black: false,
  value: "",
  regExp: undefined,
  label: "Search",
  dossierFormat: false
};

export default GenericSearchInput;
