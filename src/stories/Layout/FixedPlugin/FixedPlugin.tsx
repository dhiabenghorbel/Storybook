import Forum from "@material-ui/icons/Forum";
import React, { useState } from "react";
import constants from "../../../GP4You/constants";
import DocsHomeView from "../../../app/pages/Documents/DocsHomeView.tsx";
import GPCard from "../../GPLayout/GPCard/GPCard.tsx";
import LoadingSpinner from "../../Loading/LoadingSpinner.tsx";
import GenericSearchInput from "../../Search/Generic/GenericSearchInput.tsx";
import Tooltip from "../../Tooltip/Tooltip.tsx";
import "./FixedPlugin.scss";

interface FixedPluginProps {
    loading : boolean
}

const FixedPlugin = ({loading}  : FixedPluginProps) => {
  const [fixedClasses, setFixedClasses] = useState("fixed-plugin-dropdown");
  const [query, setQuery] = useState("");
  //const { loading, cms } = useContext(DocumentsContext);
  //const filteredDocuments = filterDocumentsByQuery(cms, query, "@title");

  const handleFixedClick = () => {
    if (fixedClasses === "fixed-plugin-dropdown") {
      setFixedClasses("fixed-plugin-dropdown-show");
    } else {
      setFixedClasses("fixed-plugin-dropdown");
    }
  };

  return (
    <React.Fragment>
      {constants.isFixedPluginEnabled ? (
        <div className={fixedClasses === "fixed-plugin-dropdown" ? "fixed-plugin-root-hover  fixed-plugin-root " : "fixed-plugin-root "}>
          <div>
            {fixedClasses === "fixed-plugin-dropdown" ? (
              <Tooltip position="left" text="Documents">
                <div onClick={handleFixedClick} style={{ cursor: "pointer" }}>
                  <Forum style={{ fontSize: "35px", marginTop: "8px" }} />
                </div>
              </Tooltip>
            ) : (
              <div onClick={handleFixedClick} style={{ cursor: "pointer" }}>
                <Forum style={{ fontSize: "35px", marginTop: "8px" }} />
              </div>
            )}
            <ul className={`fixed-plugin-dropdown-menu ${fixedClasses}`}>
              <GPCard title="CommunicationRH" showRefreshButton fitContent>
                <GenericSearchInput value={query} onChange={q => setQuery(q)} />
                {loading ? <LoadingSpinner /> : <DocsHomeView type="cms"  />}
              </GPCard>
            </ul>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};



export default FixedPlugin;
