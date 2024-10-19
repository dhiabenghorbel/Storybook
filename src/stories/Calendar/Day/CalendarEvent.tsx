import React, { FunctionComponent, ReactElement } from "react";
import { IAbsence } from "../../../app/models/IAbsence.ts";
import "../Calendar.scss";
import { getColor, getColorByCode } from "./../Utils/color";
import { showModal } from "../../Modal/ModalListener.tsx";
import EventDetailsModal from "./EventDetailsModal.tsx";
import classnames from "classnames";
import constants from "../../../GP4You/constants";
import Tooltip from "../../Tooltip/Tooltip.tsx";

interface CalendarEventProps {
  absence: IAbsence;
  noText?: boolean;
  showCode: boolean;
  preventModal: boolean;
}

const CalendarEvent: FunctionComponent<CalendarEventProps> = ({ absence, noText, preventModal, showCode }): ReactElement => {
  if (!absence.reason && !absence.code) return <React.Fragment />;
  const text: string = absence.reason || absence.code || "default-absence";

  return (
    <React.Fragment>
      <Tooltip text={text} position="bottom">
        <div
          className={classnames(
            "calendar-event",
            { "pending-event": absence.isPending && constants.showPendingAbsences },
            { "half-day-morning": absence.halfDayType === "MORNING" },
            { "half-day-evening-large": absence.halfDayType === "EVENING" }
          )}
          style={{ backgroundColor: absence.style1 ? getColor(absence.style1) : getColorByCode(absence.code) }}
          onClick={() => {
            !preventModal && showModal(<EventDetailsModal absence={absence} />);
          }}
        >
          {!noText && (
            <React.Fragment>
              {absence.reason && !showCode && absence.reason !== "dayOff" && absence.reason !== "nationalDayOff" && absence.reason}
              {showCode && absence.code && <span style={{ fontSize: "0.7rem" }}>{absence.code}</span>}
            </React.Fragment>
          )}
        </div>
      </Tooltip>
    </React.Fragment>
  );
};

CalendarEvent.defaultProps = {
  preventModal: false,
  absence: {},
  showCode: false,
  noText: false
};

export default CalendarEvent;
