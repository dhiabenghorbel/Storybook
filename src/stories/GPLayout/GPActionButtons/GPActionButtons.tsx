import React, { Fragment } from "react";
import DataSubmit from "../../../app/GP/Components/DataSubmit.tsx";
import ButtonDefault from "../../Button/DefaultButton/ButtonDefault.tsx";

interface GPActionButtonsProps {
  submits: boolean;
  submitAndDownloadFile: boolean;
  back: boolean;
  submitDisabled: boolean;
  onSubmit: Function;
  onBack: Function;
  drafts: boolean;
  onDraft: Function;
  delegates: boolean;
  onDelegate: Function;
  deletes: boolean;
  onDelete: Function;
  cancels: boolean;
  onCancel: Function;
  searchs: boolean;
  onSearch: Function;
  previous: boolean;
  onPrevious: Function;
  next: boolean;
  onNext: Function;
  show: boolean;
}

const GPActionButtons = ({
  back,
  submits,
  submitAndDownloadFile,
  submitDisabled,
  onBack,
  onSubmit,
  drafts,
  onDraft,
  delegates,
  onDelegate,
  deletes,
  onDelete,
  cancels,
  onCancel,
  searchs,
  onSearch,
  previous,
  onPrevious,
  next,
  onNext,
  show
}: GPActionButtonsProps) => {
  const backbtn = back ? <DataSubmit onSubmit={onBack} disabled={submitDisabled} label="back" /> : <Fragment />;
  const previousBtn = previous ? <ButtonDefault text="previous" onClick={() => onPrevious()} /> : <Fragment />;
  const delegateBtn = delegates ? <DataSubmit onSubmit={onDelegate} label="transmit" /> : <Fragment />;
  const draftBtn = drafts ? <DataSubmit onSubmit={onDraft} label="draft" /> : <Fragment />;
  const delBtn = deletes ? <DataSubmit onSubmit={onDelete} label="delete" /> : <Fragment />;
  const cancelBtn = cancels ? <DataSubmit onSubmit={onCancel} label="annuler" /> : <Fragment />;
  const submitBtn = submits ? <DataSubmit onSubmit={onSubmit} disabled={submitDisabled} label="submit" /> : <Fragment />;
  const submitAndDownloadFileBtn = submitAndDownloadFile ? <DataSubmit onSubmit={onSubmit} disabled={submitDisabled} label="Submit And Download File" /> : <Fragment />;

  const searchBtn = searchs ? <DataSubmit onSubmit={onSearch} label="search" /> : <Fragment />;
  const nextBtn = next ? <ButtonDefault text="next" onClick={() => onNext()} /> : <Fragment />;

  return show ? (
    <div className="full-width flex-row-end">
      {previousBtn}
      {backbtn}
      {delegateBtn}
      {draftBtn}
      {delBtn}
      {cancelBtn}
      {submitBtn}
      {submitAndDownloadFileBtn}
      {searchBtn}
      {nextBtn}
    </div>
  ) : (
    <Fragment />
  );
};

GPActionButtons.defaultProps = {
  gpstore: { getData: () => {}, gpid: "" },
  submits: false,
  submitDisabled: false,
  onBack: () => {},
  back: false,
  onSubmit: () => {},
  drafts: false,
  onDraft: () => {},
  delegates: false,
  onDelegate: () => {},
  deletes: false,
  onDelete: () => {},
  cancels: false,
  onCancel: () => {},
  searchs: false,
  onSearch: () => {},
  previous: false,
  onPrevious: () => {},
  next: false,
  onNext: () => {},
  show: true
};

export default GPActionButtons;
