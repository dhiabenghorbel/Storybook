import React from "react";
import isEmpty from "../../../infrastructure/processing/general/isEmpty.ts";
import GenericSearchInput from "../../Search/Generic/GenericSearchInput.tsx";
import Tooltip from "../../Tooltip/Tooltip.tsx";
import TextField from "../../Input/TextField/TextField.tsx";
import FloatingMenu from "../../FloatingMenu/FloatingMenu.tsx";
import FloatingMenuItem from "../../FloatingMenu/FloatingMenuItem/FloatingMenuItem.tsx";
import { showModal } from "../../Modal/ModalListener.tsx";
import DossierModal from "../../../app/pages/Dossiers/DossierModal.tsx";
import LoadingSpinner from "../../Loading/LoadingSpinner.tsx";
import DossierListItem from "./DossierListItem.tsx";
import "./dossierSearch.scss";

interface DossierSearchProps {
    isOpen : boolean;
    loading : boolean;
    isMobile: boolean;
    ExistedselectedSubordinates:boolean;
    dossiers: any;
}

const DossierSearch = ({isOpen , loading , isMobile , ExistedselectedSubordinates, dossiers} : DossierSearchProps) => {
  const LIMIT_SEARCH = 10;
  const dossiersNumber = LIMIT_SEARCH;
  const query = "";
  const selected : any = dossiers[0];

  return (
    <div className="dossier-search-container">
      {ExistedselectedSubordinates ? (
        <GenericSearchInput
          dossierFormat
          /*onChange={q => {
            setQuery(q);
            setLimit(LIMIT_SEARCH);
          }}
          onClick={() => {
            setOpen(true);
            subordinatesDispatch(SubordinatesContextActionCreators.searchSubordinatesAction());
          }}*/
          value={query}
          label="Search dossiers"
        />
      ) : (
        <Tooltip position="bottom" text={`${selected["@nmpres"]} - ${selected["@matcle"]}`}>
          <TextField
            readOnly
            withoutBorder
            dossierFormat={selected}
            value={selected ? `${selected["@nmpres"]} - ${selected["@matcle"]}` : ""}
            icon="times"
            /*onClick={() => subordinatesDispatch(SubordinatesContextActionCreators.setSelectedSubordinatesAction([]))}*/
          />
        </Tooltip>
      )}
      {isOpen && ExistedselectedSubordinates ? (
        <FloatingMenu
          showing={isOpen}
          black
          scroll
          /*onClose={() => setOpen(false)}*/
          style={isMobile ? { width: "90%", right: "50%", transform: "translateX(50%)" } : { padding: "1rem", width: "30rem" }}
        >
          <FloatingMenuItem specialFunction key="advanced-search"  onClick={() => showModal(<DossierModal />)}>
            Advanced search
          </FloatingMenuItem>
          {loading ? (
            <LoadingSpinner />
          ) : !isEmpty(dossiers) ? (
            <React.Fragment>
              {dossiers.map(c => (
                <FloatingMenuItem
                  whiteText
                  key={c["@matcle"]}
                  /*onClose={() => setOpen(false)}
                 /* onClick={() => subordinatesDispatch(SubordinatesContextActionCreators.setSelectedSubordinatesAction(c["@nudoss"]))}*/
                >
                  <DossierListItem dossierInfo={c} />
                </FloatingMenuItem>
              ))}
              {dossiersNumber > LIMIT_SEARCH && (
                <FloatingMenuItem specialFunction key="more" /*onClick={() => setLimit(prevState => prevState + LIMIT_SEARCH)}*/>
                  <i className="fas fa-arrow-alt-circle-down"></i>&nbsp;&nbsp;
                  Load more employees ...
                </FloatingMenuItem>
              )}
            </React.Fragment>
          ) : (
            <FloatingMenuItem whiteText key="no-element" /*onClose={() => setOpen(false)}*/>
              No elements
            </FloatingMenuItem>
          )}
        </FloatingMenu>
      ) : (
        <React.Fragment />
      )}
    </div>
  );
};

DossierSearch.defaultProps = {
  ExistedselectedSubordinates :true,
     dossiers :  [
        {"@matcle" : "00112233" , "@nmpres" : "Santi Cazorla"},
        {"@matcle" : "00236574" , "@nmpres" : "Fernando Torres"}
    ]
 
}

export default DossierSearch;
