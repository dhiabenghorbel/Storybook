import React, { Fragment } from "react";
import CardHeader from "../../Card/CardHeader/CardHeader.tsx";
import RefreshButton from "../../Button/RefreshButton/RefreshButton.tsx"
import DmsButton from "../../Button/DmsButton/DmsButton.tsx";

interface GPHeaderProps {
  title: string;
  showRefreshButton: boolean;
  showDmsButton: boolean;
  isSmallCard: boolean;
  documents?: string[];
}

const GPHeader = ({ title, showRefreshButton, showDmsButton, isSmallCard, documents }: GPHeaderProps) => (
  
  <CardHeader isSmallCard={isSmallCard}>
    <h4>
      {title}
      {showRefreshButton ? <RefreshButton right light/> : <Fragment />}
      {showDmsButton ? <DmsButton right documents={documents} light/> : <Fragment />}
    </h4>
  </CardHeader>
  
);

GPHeader.defaultProps = {
  title: "GP4You Documentation",
  isSmallCard: false,
  showRefreshButton: false,
  showDmsButton: false,
};

export default GPHeader;