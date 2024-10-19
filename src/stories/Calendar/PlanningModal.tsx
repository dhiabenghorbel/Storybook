// import React from "react";
// import SubTitle from "../Text/Subtitle/Subtitle.tsx";
// import Modal from "../Modal/Modal.tsx";
// import TextField from "../Input/TextField/TextField.tsx";
// import constants from "../../GP4You/constants";
// import moment from "moment";
// import PlanningModalLinks from "./PlanningModalLinks.tsx";
// import { IAbsenceUserInfo } from "../../app/models/IAbsence.ts";

// const PlanningModal = (user: IAbsenceUserInfo, day: number, gpid: string) => {
//   // const { subordinatesDispatch } = useContext(SubordinatesContext);
//   // const { gpDispatch } = useContext(GPContext);

//   // useEffect(() => {
//   //   subordinatesDispatch(SubordinatesContextActionCreators.setSelectedSubordinatesAction([user.dossier]));
//   //   gpDispatch(GPContextReducerActionCreators.setCurrentDateAction(day));
//   // }, []);

//   return (
//     <Modal small>
//       <SubTitle id="Available actions" />
//       <TextField label="name" value={user.name} type="text" readOnly />
//       <div className="flex-row-center">
//         <TextField label="@matcle" value={user.matcle} type="text" readOnly />
//         <TextField label="date" value={moment(day).format(constants.DATE_FORMAT)} type="text" readOnly />
//       </div>
//       {/* <PlanningModalLinks /> */}
//     </Modal>
//   );
// };

// export default PlanningModal;
