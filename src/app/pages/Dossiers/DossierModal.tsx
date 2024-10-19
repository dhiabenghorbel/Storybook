import React, { useState } from "react";
import * as PropTypes from "prop-types";
import constants from "../../../GP4You/constants";
import ButtonDefault from "../../../stories/Button/DefaultButton/ButtonDefault.tsx";
import SubTitle from "../../../stories/Text/Subtitle/Subtitle.tsx";
import LoadingSpinner from "../../../stories/Loading/LoadingSpinner.tsx";
import { closeModal } from "../../../stories/Modal/ModalListener.tsx";
import "./dossierModal.scss";
import UserItemList from "../../../stories/UserCard/UserCard/UserCard.tsx";
import DossierSelectField from "./DossierSelectField.tsx";
import TextField from "../../../stories/Input/TextField/TextField.tsx";
import Modal from "../../../stories/Modal/Modal.tsx";

const initialState = { matcle: "", name: "", noiden: "", orgUnit: "", polyvalences: "", center: "", position: "" };
// const INITIAL_SEARCH_NUMBER = 10;

const DossierModal = ({ isModal }: { isModal: boolean }) => {
  const loading = false;
  const [dossier, setDossier] = useState({});
  // const [limit, setLimit] = useState(INITIAL_SEARCH_NUMBER);
  const subs =[];
  const [searchState, setSearchState] = useState(initialState);


  return (
    <Modal medium dossierModal>
      <div>
        <SubTitle id="subtitle.searchfields" />
        <div className="flex-column">
          {constants.isSearchMatcleEnabled && (
            <TextField type="text" label="MATCLE" value={searchState.matcle} onChange={(e: any) => setSearchState({ ...searchState, matcle: e.target.value })} />
          )}
          {constants.isSearchNmpresEnabled && (
            <TextField type="text" label="NOMEMP" value={searchState.name} onChange={e => setSearchState({ ...searchState, name: e.target.value })} />
          )}
          {constants.isSearchNoidenEnabled && (
            <TextField type="text" label="NOIDEN" value={searchState.noiden} onChange={e => setSearchState({ ...searchState, noiden: e.target.value })} />
          )}
          {constants.isSearchPolyvalenceEnabled && (
            <DossierSelectField label="IDJB000" search="polyvalences" value={searchState.polyvalences} onClick={e => setSearchState({ ...searchState, polyvalences: e.code })} />
          )}
          {constants.isSearchPositionEnabled && (
            <DossierSelectField label="IDJBNW" search="polyvalences" value={searchState.position} onClick={e => setSearchState({ ...searchState, position: e.code })} />
          )}
          {constants.isSearchCenterEnabled && (
            <DossierSelectField label="IDESNW2" search="workcenters" value={searchState.center} onClick={e => setSearchState({ ...searchState, center: e.code })} />
          )}
          {constants.isSearchUnitEnabled && (
            <DossierSelectField label="IDOUNW" search="orgunits" value={searchState.orgUnit} onClick={e => setSearchState({ ...searchState, orgUnit: e.code })} />
          )}
        </div>
        <div className="nudoss-selector-button-container">
          <ButtonDefault
            text="clearLabel"
            /*onClick={() => {
              setSearchState(initialState);
              subordinatesDispatch(SubordinatesContextActionCreators.searchSubordinatesAction(initialState));
            }}*/
          />
          <ButtonDefault text="Search" /*onClick={() => subordinatesDispatch(SubordinatesContextActionCreators.searchSubordinatesAction(searchState))}*/ loading={loading} />
          {isModal && (
            <ButtonDefault
              disabled={!dossier}
              text="apply"
              onClick={() => {
                //subordinatesDispatch(SubordinatesContextActionCreators.setSelectedSubordinatesAction(dossier["@nudoss"]));
                closeModal();
              }}
            />
          )}
        </div>
      </div>
      <div className="dossiers-container">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <React.Fragment>
            {subs.map(subordinate => (
              <UserItemList fullName userInfo={subordinate} loading={loading} defaultStyle selected={dossier === subordinate} onClick={() => setDossier(subordinate)} />
            ))}
            <div className="user-item text-disabled flex-row-center" /*onClick={() => setLimit(prevState => prevState + INITIAL_SEARCH_NUMBER)}*/>
              <div className="info">
                <i className="fas fa-arrow-alt-circle-down" />
                &nbsp;&nbsp;
                Load more employees ...
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </Modal>
  );
};

DossierModal.propTypes = {
  isModal: PropTypes.bool
};

DossierModal.defaultProps = {
  isModal: false
};

export default DossierModal;
