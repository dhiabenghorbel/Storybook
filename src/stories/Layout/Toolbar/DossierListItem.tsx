import React from "react";
import { Subordinate } from "../../../app/models/ISubordinate.ts";
import UserAvatar from "../../UserCard/UserAvatar/UserAvatar.tsx";
import UserDescription from "../../UserCard/UserDescription/UserDescription.tsx";

const DossierListItem = ({ dossierInfo }: { dossierInfo: Subordinate }) => {
  return (
    <React.Fragment>
      <UserAvatar itemList />
      <UserDescription numero={"0"} itemList matcle={dossierInfo["@matcle"]} nmpres={dossierInfo["@nmpres"]} />
    </React.Fragment>
  );
};

DossierListItem.defaultProps = {
  dossierInfo : {"@matcle" : "001078954" , "@nmpres" : "Fernando Torres"} ,
  light: true
};

export default DossierListItem;
