import React, { Fragment } from "react";
import GPListItemIcon from "./GPListItemIcon.tsx";
import * as constants from "../../../GP4You/constants";
import TOPICS from "../../../app/services/topics";
import "./GPList.scss";
import Tooltip from "../../Tooltip/Tooltip.tsx";
import isEmpty from "../../../infrastructure/processing/general/isEmpty.ts";
import RedirectionLinkItem from "./RedirectionLinkItem.tsx";

interface GPListItemProps {
  key: string;
  name: string;
  implemented: boolean;
  isActive: boolean;
  collapseBar: boolean;
  technologieName: string;
  portalAccessUrl: string;
  label:string;
}

const GPListItem = ({ isActive, implemented, name, key, collapseBar, technologieName, portalAccessUrl,label }: GPListItemProps) => {

  const isDesktop = false;
  const isMobile  = false;
  const isRedirectionLink = !isEmpty(portalAccessUrl);
  if (!implemented && !constants.showDisabledGps) return <Fragment />;
  const li = isMobile ? (
    <div key={key} className={isActive || !isDesktop ? "avatar-margin-left" : "text-black avatar-margin-left"} onClick={() => TOPICS.SIDEBAR_TOPIC.next(false)}>
      <GPListItemIcon key={key} name={name} />
      <span style={{ marginLeft: "1rem" }}>
        {label}
      </span>
    </div>
  ) : collapseBar === false ? (
    <div
      key={key}
      className={collapseBar ? "avatar-margin-left-collapsed" : isActive || !isDesktop ? "avatar-margin-left" : "text-black avatar-margin-left"}
      onClick={() => TOPICS.SIDEBAR_TOPIC.next(false)}
    >
      <span style={{ color: isActive ? "var(--colour-light)" : "var(--colour-primary)" }}>
        <GPListItemIcon key={key} name={name} />
      </span>
      <span style={{ marginLeft: "1rem" }}>
        {label}
      </span>
    </div>
  ) : (
    <div
      key={key}
      className={collapseBar ? "avatar-margin-left-collapsed" : isActive || !isDesktop ? "avatar-margin-left" : "text-black avatar-margin-left"}
      onClick={() => TOPICS.SIDEBAR_TOPIC.next(false)}
    >
      <Tooltip text={name} position="aligned-right">
        <span style={{ color: isActive ? "var(--colour-light)" : "var(--colour-primary)" }}>
          <GPListItemIcon key={key} name={name} />
        </span>
      </Tooltip>
    </div>
  );

  return (
    <li key={key} className=" gp-menu-list-label-container flex-row-start">
      {implemented ? (
        isRedirectionLink ? (
          <RedirectionLinkItem /*name={name}*/ portalAccessUrl={portalAccessUrl} technologieName={technologieName} isActive={isActive} li={li} />
        ) : (
          <div key={key} /*to={`/${name}`}*/ className={isActive ? "gp-menu-link gp-menu-list-item gp-menu-list-selected" : "gp-menu-link gp-menu-list-item"}>
            {li}
          </div>
        )
      ) : (
        <div key={key} className="gp-menu-list-item gp-menu-list-inactive">
          {li}
        </div>
      )}
    </li>
  );
};

GPListItem.defaultProps = {
  key: "gpListItem",  
  name:"AGC05E00",
  implemented: true,
  isActive: false,
  collapseBar:false,
  label : "Activities schedule"
};

export default GPListItem;
