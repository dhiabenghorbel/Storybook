import React from "react";
import constants from "../../../GP4You/constants";
import WidgetTwitter from "./Types/WidgetTwitter.tsx";
import "./Widgets.scss";

const Widgets = () => {
  const config = constants.widgetsConfig;
  return <div className="full-width full-height flex-column-start margin-top">{ <WidgetTwitter params={config.TWITTER} />}</div>;
};

export default Widgets;
