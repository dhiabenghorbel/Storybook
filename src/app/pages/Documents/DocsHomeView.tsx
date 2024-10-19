import React from "react";
import Bookmark from "@material-ui/icons/Bookmark";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import "./Documents.scss";
import Icon from "../../../stories/Icon/Icon.tsx";

interface DocsHomeViewProps {
  documents: any[];
  type: string | "cms" | "dms";
  onRightSwitch?: Function;
  onLeftSwitch?: Function;
}

const DocsHomeView = ({ documents, type, onRightSwitch, onLeftSwitch }: DocsHomeViewProps) => {

  return (
    <React.Fragment>
      <div className="dms-wrapper">
        <div className="dms-switcher flex-row-space-between" style={{ paddingBottom: "0.5rem" }}>
          <div className="circular-button" style={{ color: "#252d3a", fontSize: "20px", alignItems: "inherit" }}>
            <Icon name="chevron-left" style={{ color: "inherit", fontSize: "inherit" }} onClick={onLeftSwitch && onLeftSwitch} />
          </div>
          <div className="circular-button" style={{ color: "#252d3a", fontSize: "20px", alignItems: "inherit" }}>
            <Icon name="chevron-right" style={{ color: "inherit", fontSize: "inherit" }} onClick={onRightSwitch && onRightSwitch} />
          </div>
        </div>
        <List>
          {documents.slice(0, 3).map(item => (
            <React.Fragment key={item["@nudoss"]}>
              <ListItem value={item["@nudoss"]} divider disableGutters dense button className="dms-list-item" /*onClick={() => showModal(<DocumentModal dms={item} type={type} />)} */>
                <Bookmark style={{ fontSize: "30px" }} />
                <ListItemText primary={`${item["@title"]}`} style={{ fontSize: "15px" }} />
              </ListItem>
            </React.Fragment>
          ))}
          <div  style={{ fontSize: "15px", float: "right", padding: "1rem" }}>
            {"Consult the other elements"}
          </div>
        </List>
        <br />
      </div>
    </React.Fragment>
  );
};

DocsHomeView.defaultProps = {
  documents: [],
  type: "cms"
};

export default DocsHomeView;
