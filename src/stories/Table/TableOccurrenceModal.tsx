import React, { ReactElement } from "react";
import Modal from "../Modal/Modal.tsx";
import DataSubmit from "../../app/GP/Components/DataSubmit.tsx";
import { closeModal } from "../Modal/ModalListener.tsx";
import ButtonDefault from "../Button/DefaultButton/ButtonDefault.tsx";
import MaterialAutocomplete from "../Select/MaterialAutocomplete/MaterialAutocomplete.tsx";

interface TableOccurrenceModalProps {
  children: ReactElement;
  DetailForm: any;
  modalTag?: string;
  population?: string;
  domain?: string;
  dossier?: string;
  canAdd?: boolean;
  canEdit?: boolean;
  isDossierOccurrence: boolean;
}

const TableOccurrenceModal = ({ children, DetailForm, modalTag, canAdd, canEdit, population, domain, dossier, isDossierOccurrence }: TableOccurrenceModalProps) => {


  const onApply = () => {
    closeModal();
  };

  const onClose = () => {
    closeModal();
  };

  return  (

    <Modal>
      <div className="full-height full-width">
        <MaterialAutocomplete/>     
        </div>
      <div className="full-width flex-row-end">
        {canAdd && <DataSubmit label="add"  onSubmit={onApply} />}
        {canEdit && <DataSubmit label="edit" onSubmit={onApply} />}
        <ButtonDefault text="close" onClick={onClose} />
      </div>
    </Modal>
  );
};

TableOccurrenceModal.defaultProps = {
  children : []
}

export default TableOccurrenceModal;
