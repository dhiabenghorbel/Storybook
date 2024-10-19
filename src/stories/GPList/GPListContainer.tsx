import React, { useState } from "react";
import constants from "../../GP4You/constants";
import GPList from "./List/GPList.tsx";
import GPTopicList from "./Topic/GPTopicList.tsx";
import Icon from "../Icon/Icon.tsx";
import GenericSearchInput from "../Search/Generic/GenericSearchInput.tsx";
import Tooltip from "../Tooltip/Tooltip.tsx";
import "./List/GPList.scss";

const GPListContainer = () => {
  const  isDesktop  = true;
  const [query, setQuery] = useState("");
  const [collapseBar , collapseBarHandling] = useState(false);
  const tooltip = collapseBar ? "Expand menu" : "Collapse menu";

  return (
    <React.Fragment>
        <div className="gp-list-container-display">
          <div className="full-width full-height flex-column-start-copy">
            {!collapseBar ? (
              isDesktop && (
                <div style={{ display: "flex" , marginLeft : "55px" }}>
                  <GenericSearchInput onChange={q => setQuery(q)} black={!isDesktop} value={query} />
                  <Tooltip text={tooltip} position="aligned-right">
                    <Icon
                      onClick={() => {collapseBarHandling(!collapseBar)}}
                      name="caret-square-left"
                      style={{ color: "var(--colour-primary)", marginTop: "25px", fontSize: "24px" }}
                    />
                  </Tooltip>
                </div>
              )
            ) : (
              <div style={{ display: "flex", justifyContent: "left", marginLeft: "28px"}} >
                 <Tooltip text={tooltip} position="aligned-right">
                    <Icon
                      onClick={() => {collapseBarHandling(!collapseBar)}}
                      name="caret-square-right"
                      style={{ color: "var(--colour-primary)", marginTop: "25px", fontSize: "24px" }}
                    />  
                </Tooltip>
              </div>
            )}
            <div>
              {constants.Grouped && query.trim().length === 0 ? (
                <GPTopicList  collapseBar={collapseBar}  />
              ) : (
                <GPList collapseBar={collapseBar} />
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
  );
}

export default GPListContainer ;
