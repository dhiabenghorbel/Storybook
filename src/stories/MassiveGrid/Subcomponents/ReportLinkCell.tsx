import React, { FunctionComponent, ReactElement } from "react";
import ReportLink from "../../../app/pages/Report/components/ReportLink.tsx";

interface ReportLinkCellProps {
  props: any;
  id: string;
  items: [];
  population: string;
  domain: string;
}

const ReportLinkCell: FunctionComponent<ReportLinkCellProps> = ({ props, id, items, population, domain }): ReactElement => {
  return <ReportLink button label={props.label} id={id} items={items} population={population} domain={domain} />;
};

export default ReportLinkCell;
