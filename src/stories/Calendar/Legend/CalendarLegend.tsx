import React from "react";
import LegendItem from "./LegendItem.tsx";
import planningColors from "../../../app/styles/Colors/planningColors";
import constants from "../../../GP4You/constants";

interface CalendarLegendProps {
  type: "absences" | "T&A" ;
  gpid: string;
}

const CalendarLegend = ({ type, gpid }: CalendarLegendProps) => {
  return (
    <React.Fragment>
      {type === "T&A" && (
        <span className="legend-container" style={{ height: "6rem" }}>
          <div className="flex-column-space-between">
          General
            <LegendItem bgColor={planningColors.TAPLGRED01} label="Today" />
          </div>
          <div className="flex-column-space-between">
            Activity
            <br />
            <LegendItem bgColor={planningColors.GTANOWORK} label="not worked" />
            <LegendItem bgColor={planningColors.GTALESS} label="Actual < Scheduled" />
            <LegendItem bgColor={planningColors.GTAEQUAL} label="Actual = Scheduled" />
            <LegendItem bgColor={planningColors.GTAMORE} label="Actual > Scheduled" />
          </div>
        </span>
      )}
      {type === "absences" && (
        <span className="legend-container" style={{ height: "6rem" }}>
          <div className="flex-column-space-between">
            <b>
            General
            </b>
            {/* CURDAYTEAM  AUJOURDHUI  */}
            <LegendItem bgColor={planningColors.TAPLGRED01} label="Today" />
            <LegendItem bgColor={planningColors.ENDOFWEEK} borderRight label="Weekend" />
          </div>

          <div className="flex-column-space-between">
            <b>
            Day type
            </b>
            <LegendItem bgColor={planningColors.WORKEDDAY} label="Worked" border />
            <LegendItem bgColor={planningColors.DAYOFF} label="Not worked" />
            <LegendItem bgColor={planningColors.NOTINCORP} label="Termination" />
          </div>

          <div className="flex-column-space-between">
            <b>
            Absences
            </b>
            <LegendItem bgColor={planningColors.HOLIDAYS} label="Leave" />
            <LegendItem bgColor={planningColors.SICKNESS} label="Sickness" />
            <LegendItem bgColor={planningColors.MISCABS}  label="Other absences" />
            <LegendItem bgColor={planningColors.PARENTAL} label="Maternity" />
          </div>

          {/* testt legend tlw GTALESS */}
          {constants.TELEWORKING_GPs.includes(gpid) && (
            <div className="flex-column-space-between">
              <b>
              Remote work
              </b>
              <LegendItem bgColor={planningColors.GTALESS} label="Flexible" />
              <LegendItem bgColor={planningColors.CET} label="Occasional" />
              <LegendItem bgColor={planningColors.TAPLGGREE2} label="Regular" />
              <LegendItem bgColor={planningColors.TAPLGORAN2} label="Misc telewoPrk" />
            </div>
          )}
          {/* ************ */}

          <div className="flex-column-space-between">
            <b>
            Process
            </b>
            <LegendItem label="Waiting" pendingBorder />
            <LegendItem bgColor={planningColors.CANCELSTS} label="Cancellation" />
            {/* ANULATION  CANCELSTS */}
          </div>
        </span>
      )}

      {type === "PIF" && (
        <span className="legend-container">
          <LegendItem bgColor={planningColors.TAPLGRED01} label="Today" />
          <LegendItem bgColor={planningColors.GTANOWORK} label="not worked" />
          <LegendItem bgColor={planningColors.GTALESS} label="legend.ferieUsate" />
          <LegendItem bgColor={planningColors.GTAEQUAL} label="legend.pianificateNonUsate" />
          <LegendItem bgColor={planningColors.GTAMORE} label="legend.pianoFerieNonValidato" />
        </span>
      )}
    </React.Fragment>
  );
};

CalendarLegend.defaultProps = {
  type: "absences"
};

export default CalendarLegend;
