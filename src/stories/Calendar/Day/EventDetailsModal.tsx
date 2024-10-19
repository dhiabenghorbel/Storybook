import React from "react";
import { IAbsence } from "../../../app/models/IAbsence.ts";
import "../Calendar.scss";
import ButtonDefault from "../../Button/DefaultButton/ButtonDefault.tsx";
import Modal from "../../Modal/Modal.tsx";
import Table from "../../Table/Table.tsx";
import TableBody from "../../Table/Body/TableBody.tsx";
import { closeModal } from "../../Modal/ModalListener.tsx";
import TableCell from "../../Table/Row/TableCell.tsx";
import TableRow from "../../Table/Row/TableRow.tsx";
import Checkbox from "../../DataItems/Boolean/Checkbox.tsx";

interface EventDetailsModalProps {
  absence: IAbsence;
}

const EventDetailsModal = ({ absence }: EventDetailsModalProps) => {
  const isDesktop  = true ;
  return (
    <Modal medium={isDesktop} small={!isDesktop}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
             <div>{"Absence Reason"}</div> 
            </TableCell>
            <TableCell>
              <div>{absence.reason && absence.reason}</div>
              </TableCell>
          </TableRow>
          {absence.startDate && (
            <TableRow>
              <TableCell>
                <div>{absence.endDate ? "Start date" : "Date"}</div>
              </TableCell>
              <TableCell>
                <div>{absence.startDate}</div>
                </TableCell>
            </TableRow>
          )}
          {absence.endDate && (
            <TableRow>
              <TableCell>
              <div>{"End date"}</div>
              </TableCell>
              <TableCell>
              <div>{absence.endDate}</div>
                </TableCell>
            </TableRow>
          )}
          {absence.code && (
            <TableRow>
              <TableCell>
                <div>{'Status'}</div>
              </TableCell>
              {absence.isPending ? (
                <TableCell>
                  <div>{'Pending'}</div>
                </TableCell>
              ) : (
                <TableCell>
                  <div>{"Approved"}</div> 
                </TableCell>
              )}
            </TableRow>
          )}
          <TableRow>
            <TableCell>
            <div>{"Half day"}</div>
            </TableCell>
            <TableCell>
              <Checkbox checked={absence.isHalfDay} />
              {absence.halfDayType && absence.halfDayType}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex-row-end">
        <ButtonDefault text="close" onClick={() => closeModal()} />
      </div>
    </Modal>
  );
};

EventDetailsModal.defaultProps = {
  absence: {reason : "Holiday absence" , startDate : "2022/03/12" , endDate : "2022/03/13", isPending : true , isHalfDay : false , halfDayType : null}
};

export default EventDetailsModal;
