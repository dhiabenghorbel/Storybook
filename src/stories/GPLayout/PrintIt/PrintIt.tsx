import React from "react";
//import { printer } from "../../infrastructure/printer";
import Print from "@material-ui/icons/Print";

interface PrintItProps {
  left?: boolean;
  right?: boolean;
}

const PrintIt = ({ left, right }: PrintItProps) => {
  const position = left ? { float: "left", cursor: "pointer" } : right ? { float: "right", cursor: "pointer" } : { float: "none", cursor: "pointer" };
  
  return (
    <div
      style={position}
      //onClick={() => {printer("imprime_m");}}
    >
      <Print style={{ width: "20px", height: "20px", marginBottom: "-4px" }} />
      Print
    </div>
  );
};

PrintIt.defaultProps = {
  left: false,
  right: false
};

export default PrintIt;
