import React, { useEffect, ReactElement, useState } from "react";
import "../../Input/Input.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import classNames from "classnames";
import "../SelectStyle.scss";
import { makeStyles } from "@mui/styles";
import SimpleTextField from "../../Input/TextField/TextField.tsx";

interface SelectCompleteComponentProps {
  label: string;
  onChange: Function;
  children: ReactElement | ReactElement[];
  name?: string;
  value: string;
  readOnly?: boolean;
  backgroundDark?: boolean;
  iconName?: string;
  nulign?: string;
  domain?: string;
  population?: string;
  datasection?: string;
  aligned?: boolean;
  extraSmallSize?: boolean;
  marginLeft?: boolean;
  smallSize?: boolean;
  mediumSize?: boolean;
  bigSize?: boolean; 
  //added props for storybook component
  SelectOptions : any;
}

const MaterialAutocomplete = ({
  children,
  onChange,
  label,
  name,
  value,
  readOnly,
  nulign,
  domain,
  population,
  datasection,
  aligned,
  extraSmallSize,
  marginLeft,
  smallSize,
  mediumSize,
  bigSize, 
  SelectOptions
}: SelectCompleteComponentProps) => {
  
 
  const [currentSelectLabel , setSelectLabel] = useState(SelectOptions[0].children);
  const checkValue = (inputValue: string) => {
    if (inputValue !== value) {
      const find: any | undefined = SelectOptions.find((e: ReactElement) => e.children === inputValue || e.value === inputValue);
      const val: string = find ? find.value : value;
      // onChange(val);
      setSelectLabel( find.children); 
      return val;
    }
  };
  const useStyles = makeStyles({
    root: {
      "& .MuiInputLabel-outlined.Mui-disabled": {
        color: "black"
      }
    }
  });
  const dataList = () => {
    let valuex = SelectOptions.map(option => option.value);
    let labelx = SelectOptions.map(option => option.children);

    let selectList = [];
    for (var i = 0; i < valuex.length; i++) {
      selectList.push({ label: labelx[i], value: valuex[i] });
    }
    selectList = selectList.filter((value, index, self) => index === self.findIndex(t => t.label === value.label));
    return selectList;
  };
  
  let selectedValue = [];
  selectedValue.push(dataList().filter(option => option.value === value));
  let currentLabel: string = selectedValue[0].map(option => option.label).toString();

//   //const getValueText = () => (currentLabel ? currentLabel : occurrenceProcessing.findValueFromGP(data, population, domain, undefined, datasection, `${name}_EXT`, nulign));
//   const getValueText = () => (currentLabel);



//   useEffect(() => {
//     const currentOptionAvailable = SelectOptions.find(option => option.children === value || option.value === value);
//     const currentValueText = getValueText();
//     if (!currentOptionAvailable && currentValueText) {
//       currentLabel = currentValueText;
//     }
// }, [SelectOptions]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <div
        className={classNames(
          "input-container",
          { "inline-grid": aligned },
          { "full-width": !smallSize && !aligned },
          { "doble-third-width": bigSize },
          { "half-width": mediumSize },
          { "third-width": smallSize || (aligned && !mediumSize) },
          { "fourth-width": extraSmallSize },
          { "margin-left": marginLeft },
          { "text-disabled": readOnly }
        )}
      >
        {readOnly ? (
          <SimpleTextField type="text" readOnly label={currentLabel}  />
        ) : (
          <Stack spacing={1} sx={{ width: "100%" }}>
            <Autocomplete
              className={classes.root}
              options={dataList().map(option => option.label)}
              disabled={readOnly}
              id="disable-close-on-select"
              includeInputInList
              value={currentSelectLabel}
              autoHighlight
              blurOnSelect
              onChange={(e, newValue) => {
                checkValue(newValue || "");
              }}
              renderInput={params => <TextField {...params} className="select-field" variant="standard"  label={label}  />}
              noOptionsText={"No options"}
              isOptionEqualToValue={(option, value) => option.id === value.id}
            />
          </Stack>
        )}
      </div>
    </React.Fragment>
  );
};

MaterialAutocomplete.defaultProps = {
  children: "",
  label: "Select",
  value: "1",
  readOnly: false,
  backgroundDark: false,
  iconName: undefined,
  SelectOptions: [{value :"1" , children : "option 1"},{value :"2" , children : "option 2"},{value :"3" , children : "option 3"}]
};

export default MaterialAutocomplete;
