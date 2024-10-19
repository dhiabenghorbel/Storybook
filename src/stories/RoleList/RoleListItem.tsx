import React, { FunctionComponent, ReactElement } from "react";

import Icon from "../Icon/Icon.tsx";
import { UserInterface } from "../../app/models/User.ts";

const iconItem = (category: string) => (category === "SSMNG" ? "user-friends" : "user");

const messageItem = (role: UserInterface) => {
 
  if (role.label !== undefined && role.label !== "") return role.label;

  if (role.category === "SSEMP") return  "EMPLOYEE" ;
  return role.name;
};

interface RoleListItemProps extends UserInterface {
  light: boolean;
  category:string;
}

const RoleListItem: FunctionComponent<RoleListItemProps> = (props): ReactElement => {
  const roleName = messageItem(props);

  return (
    <React.Fragment>
      <Icon name={iconItem(props.category)} light={props.light} />
      {roleName && roleName !== "" && <p>{roleName}</p>}
    </React.Fragment>
  );
};

RoleListItem.defaultProps = {
  light: false,
};

export default RoleListItem;
