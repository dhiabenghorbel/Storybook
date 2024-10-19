import React, { Fragment, ReactNode } from "react";
import CardBody from "../../Card/CardBody/CardBody.tsx";
import GPHeader from "../GPHeader/GPHeader.tsx";
import Card from "../../Card/Card.tsx";
import LoadingSpinner from "../../Loading/LoadingSpinner.tsx";
import isEmpty from "../../../infrastructure/processing/general/isEmpty.ts";

interface DummyGPprops {
  title: string;
  showRefreshButton: boolean;
  showDmsButton: boolean;
  fitContent: boolean;
  children: ReactNode;
  fillWidth: boolean;
  noPadding: boolean;
  isSmallCard: boolean;
  alignHeader: boolean;
  overflowCard?: boolean;
  loading?: boolean;
  dmsCard?: boolean;
  documents?: object[];
}

const GPCard = ({
  children,
  title,
  showRefreshButton,
  showDmsButton,
  fitContent,
  fillWidth,
  noPadding,
  isSmallCard,
  alignHeader,
  overflowCard,
  loading,
  dmsCard,
  documents
}: DummyGPprops) => (
  <Card fullHeight={!fitContent} fitContent={fitContent} fullWidth alignHeader dmsCard={dmsCard} isSmallCard={!isSmallCard}>
    {!dmsCard && isEmpty(documents) ? <GPHeader title={title} showRefreshButton={showRefreshButton} showDmsButton={showDmsButton} isSmallCard={isSmallCard} /> : <React.Fragment />}
    {!isEmpty(documents) ? <GPHeader title={title} showDmsButton={showDmsButton} isSmallCard={isSmallCard} documents={documents} /> : <React.Fragment />}
    {loading && (
      <div className="loading-wrapper">
        <LoadingSpinner type="big" />
      </div>
    )}
    <CardBody overflowCard={overflowCard} fillWidth={fillWidth} noPadding={noPadding} isSmallCard={isSmallCard}>
      {children}
    </CardBody>
  </Card>
);

GPCard.defaultProps = {
  title: "Card title",
  fillWidth: false,
  showRefreshButton: false,
  showDmsButton: false,
  fitContent: false,
  noPadding: false,
  isSmallCard: false,
  children: <Fragment />,
  alignHeader: false,
  overflowCard: false,
  loading: false,
  dmsCard: false
};

export default GPCard;
