import { GridColumnMenuCheckboxFilter } from "@progress/kendo-react-grid";
import React from "react";
import { states } from "../StatesObjects.ts";
// import { SearchBox } from "./SearchBox";

const CheckboxFilter = (props: any) => {
  const filterData = states.originalFormatData;

  return (
    <div>
      <GridColumnMenuCheckboxFilter {...props} data={filterData} /*searchBox={searchBox}*/ expanded={true} />
    </div>
  );
};

export default CheckboxFilter;
