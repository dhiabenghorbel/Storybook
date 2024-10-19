import React from "react";
import ButtonDefault from "../../Button/DefaultButton/ButtonDefault.tsx";
import { IDataItem } from "../../../app/models/IDataItem.ts";

const RegisterButton = ({ population, domain, action, datasection, dossier, name, color, value, label }: IDataItem) => {

  let icon;
  if (color === "green") icon = "caret-square-down";
  if (color === "red") icon = "caret-square-up";

  return <ButtonDefault icon={icon} success={color === "green"} danger={color === "red"} text={label} register />;
};

RegisterButton.defaultProps = {
  name: "SENS",
  value: "I",
  label: "send",
  color: "green"
};

export default RegisterButton;
