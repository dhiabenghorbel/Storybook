import React, { FunctionComponent, ReactElement } from "react";
import ButtonDefault from "../../Button/DefaultButton/ButtonDefault.tsx";

interface AddCellProps {
  onClick: Function;
}

const AddCell: FunctionComponent<AddCellProps> = (props: AddCellProps): ReactElement => {
  return <ButtonDefault text="" icon="plus-square" onClick={() => props.onClick()} />;
};

export default AddCell;
