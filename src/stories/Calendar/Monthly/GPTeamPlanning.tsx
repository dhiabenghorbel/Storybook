import React, { useState, ReactNode } from "react";
import GPCard from "../../GPLayout/GPCard/GPCard.tsx";
import MonthSelector from "../Selectors/MonthSelector.tsx";
import YearSelector from "../Selectors/YearSelector.tsx";
import TeamPlanningCalendar from "./TeamPlanningCalendar.tsx";
import CalendarLegend from "../Legend/CalendarLegend.tsx";

interface GPTeamPlanningProps {
  gpid: string;
  dossier?: string;
  noText?: boolean;
  type: "absences" | "T&A" | "PIF";
  children: ReactNode;
  showCode: boolean;
}

const GPTeamPlanning = ({ gpid, dossier, noText, type, children, showCode }: GPTeamPlanningProps) => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <GPCard fitContent fillWidth title={gpid} >
      <div className="flex-row-end margin-top-bottom">
        <MonthSelector currentMonth={month} onChange={v => setMonth(v)} />
        <YearSelector  currentYear={year} onChange={v => setYear(v)} />
      </div>
        <React.Fragment>
          <TeamPlanningCalendar gpid={gpid} year={year} month={month + 1}  noText={noText} showCode={showCode} type={type} />
          <CalendarLegend type={type} gpid={gpid} />
        </React.Fragment>
      {children}
    </GPCard>
  );
};

GPTeamPlanning.defaultProps = {
  // dossier: getNudoss(),
  gpid: "Team Schedule",
  noText: false,
  type: "absences",
  children: <React.Fragment />,
  showCode: false
};

export default GPTeamPlanning;
