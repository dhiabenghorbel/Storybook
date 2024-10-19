import React, { useState, ReactElement } from "react";
import GenericSearchInput from "../Search/Generic/GenericSearchInput.tsx";
import ButtonDefault from "../Button/DefaultButton/ButtonDefault.tsx";
import FloatingMenu from "../FloatingMenu/FloatingMenu.tsx";
import FloatingMenuItem from "../FloatingMenu/FloatingMenuItem/FloatingMenuItem.tsx";
import RoleListItem from "../RoleList/RoleListItem.tsx";
import { User, UserInterface } from "../../app/models/User.ts";

interface RoleListState {
  query: string;
  isOpen: boolean;
 
}
const initialState: RoleListState = { query: "", isOpen: false };

const iconButton = (isManager : boolean) => (isManager ? "user-friends" : "user");

const filterRoles = (query: string, roles: User[]) => {
  const labeledRoles: User[] = [];
  roles.forEach(role => {
    role.label = role.label == null ? "EMPLOYEE" : role.label;
    labeledRoles.push(role);
  });
  return labeledRoles;
};

interface RoleListProps {
  isManager : boolean;
  isMobile:boolean;
  roles:any;
  text:string
}

const RoleList = ({isManager, isMobile, roles} : RoleListProps): ReactElement => {
  const [state, setState] = useState(initialState);
  const [TextLabel, setTextLabel] = useState("D-RH");
  const filteredRoles = filterRoles(state.query, roles);

   const onClick = () => {
     setState(previous => ({ query: "", isOpen: !previous.isOpen }));
   };

   const selectUser = (user: UserInterface) => {
    setTextLabel(user.label);
    onClick();
  };

  return (
    <React.Fragment>
      <ButtonDefault onClick={() => onClick()} text={TextLabel} icon={iconButton(isManager)} isMenu dropdown={roles.length > 1} />
      {roles.length > 1 && (
        <FloatingMenu
          showing={state.isOpen}
          black
          onClose={() => onClick()}
          style={
            isMobile ? { width: "90%", right: "50%", transform: "translateX(50%)", maxHeight: "30rem", overflow: "auto" } : { width: "26rem", maxHeight: "50rem", overflow: "auto" }
          }
        >
          <GenericSearchInput value={state.query} onChange={ ()=> ({})}  />
          {filteredRoles.map(c => (
            <FloatingMenuItem whiteText key={c.name} onClick={() => selectUser(c)} >
              <RoleListItem {...c} />
            </FloatingMenuItem>
          ))}
        </FloatingMenu>
      )}
    </React.Fragment>
  );
};

RoleList.defaultProps = {
  isManager : true,
  roles : [{name : "role1" , label: "Employee" , category  :"SSEMP"},{name : "role2" , label: "Manager" , category  :"SSMNG"}],
}

export default RoleList;
