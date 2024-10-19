// import React, { useState, useEffect } from "react";
// // import { getIdentity, isManager } from "../../services/userService/user";
// import MonthCalendar from "./Monthly/MonthCalendar";
// import CheckboxRadioInput from "../Input/CheckboxRadioInput";
// import LoadingSpinner from "../Loading/Spinner/LoadingSpinner";
// import MonthSelector from "./Selectors/MonthSelector";
// import YearSelector from "./Selectors/YearSelector";
// import absenceService from "../../services/absenceService";
// import AnnualCalendar from "./Annual/AnnualCalendar";
// import LegendItem from "./Legend/LegendItem";
// import TextField from "../Input/TextField";
// import SubTitle from "../Text/Subtitle/Subtitle";
// import planningColors from "../../styles/Colors/planningColors";
// import { throwError } from "../../services/errorService/errors";

// const viewOptions = {
//   MONTH: "month",
//   YEAR: "year"
// };

// interface CalendarGPProps {
//   gpid: string;
//   subordinates: Array<string>;
//   dossier: string;
// }

// const CalendarGP = ({ gpid, dossier, subordinates }: CalendarGPProps) => {
//   const [loading, setLoading] = useState(false);
//   const [absences, setAbsences] = useState([]);
//   const [month, setMonth] = useState(new Date().getMonth());
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [planningType, setPlanningType] = useState(viewOptions.MONTH);

//   useEffect(() => {
//     setLoading(true);
//     if (dossier && dossier !== "") {
//       absenceService
//         .getAbsences(gpid, year, dossier, getIdentity())
//         .then(abs => {
//           setAbsences(abs);
//           setLoading(false);
//         })
//         .catch(err => {
//           throwError(err.message || err.label || "default-error");
//           setLoading(false);
//         });
//     } else setLoading(false);
//   }, [dossier, year]);

//   const checkboxes = (
//     <div className="flex-row-start checkboxes-container">
//       <CheckboxRadioInput
//         id={viewOptions.MONTH}
//         type="radio"
//         value={viewOptions.MONTH}
//         onChange={() => setPlanningType(viewOptions.MONTH)}
//         label="monthView"
//         checked={planningType === viewOptions.MONTH}
//       />
//       <CheckboxRadioInput
//         id={viewOptions.YEAR}
//         type="radio"
//         value={viewOptions.YEAR}
//         onChange={() => setPlanningType(viewOptions.YEAR)}
//         label="yearView"
//         checked={planningType === viewOptions.YEAR}
//       />
//     </div>
//   );

//   const selectors = (
//     <div className="flex-row-end selectors-container">
//       {planningType === viewOptions.MONTH && <MonthSelector currentMonth={month} onChange={v => setMonth(v)} withArrows />}
//       <YearSelector onChange={(v: number) => setYear(v)} />
//     </div>
//   );

//   const legend = (
//     <span className="legend-container">
//       <LegendItem pendingBorder label="legend.waiting" />
//       <LegendItem bgColor={planningColors.DAYOFF} label="dayOff" />
//     </span>
//   );

//   let content = <React.Fragment />;
//   if (planningType === viewOptions.MONTH)
//     content = (
//       <div className="month-calendar-container">
//         {checkboxes}
//         <MonthCalendar absences={absences} month={month} year={year} />
//         {legend}
//       </div>
//     );
//   if (planningType === viewOptions.YEAR) {
//     content = (
//       <React.Fragment>
//         {checkboxes}
//         <AnnualCalendar absences={absences} year={year} />
//         {legend}
//       </React.Fragment>
//     );
//   }

//   if (isManager() && (!dossier || dossier === "")) content = <React.Fragment />;

//   const employee = subordinates.find(e => e["@nudoss"] === dossier);

//   return (
//     <React.Fragment>
//       {isManager() && (
//         <React.Fragment>
//           <SubTitle id="subtitle.employee" />
//           <TextField readOnly label="NMPRES" value={employee ? employee["@nmpres"] : ""} />
//           <TextField readOnly label="MATCLE" value={employee ? employee["@matcle"] : ""} />
//         </React.Fragment>
//       )}
//       {selectors}
//       {!loading && content}
//       {loading && (
//         <div className="flex-row-center">
//           <LoadingSpinner />
//         </div>
//       )}
//     </React.Fragment>
//   );
// };

// export default CalendarGP;
