import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import classNames from "classnames";
import React, { FunctionComponent, ReactElement } from "react";
import constants from "../../../GP4You/constants";
import { localeMap } from "../../Calendar/PickerHelper/LanguageSelector.ts";
import { formatMoment } from "../../DataValue/StateSanitizers.ts";
import Validation from "../../Input/Validation/Validation.tsx";
import "./DatePicker.scss";

interface MaterialDatePickerProps {
  value: any;
  label?: string;
  onChange: Function;
  readOnly?: boolean;
  required?: boolean;
  yearsLowerMargin?: number;
  yearsUpperMargin?: number;
  isModal?: boolean;
  aligned?: boolean;
  extraSmallSize?: boolean;
  marginLeft?: boolean;
  smallSize?: boolean;
  mediumSize?: boolean;
  bigSize?: boolean;
}

const MaterialDatePicker: FunctionComponent<MaterialDatePickerProps> = (props): ReactElement => {
 

  const theme = createTheme({
    palette: {
      primary: {
        main: "#f07c00",
        light: "#f07c00",
        dark: "#f07c00"
      }
    },
    components: {
      MuiPickersDay: {
        styleOverrides: {
          root: {
            // Some CSS
            fontSize: "0.9rem"
          }
        }
      }
    }
  });
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap["en"]}>
      <div
        className={classNames(
          "input-container",
          { "inline-grid": props.aligned },
          { "full-width": !props.smallSize && !props.aligned },
          { "doble-third-width": props.bigSize },
          { "half-width": props.mediumSize },
          { "third-width": props.smallSize || (props.aligned && !props.mediumSize) },
          { "fourth-width": props.extraSmallSize },
          { "margin-left": props.marginLeft }
        )}
      >
        <ThemeProvider theme={theme}>
          <DatePicker
            disabled={props.readOnly}
            inputFormat="dd/MM/yyyy"
            value={props.value ? formatMoment(props.value, constants.DATE_FORMAT) : null}
            readOnly={props.readOnly}
            label={props.label}
            onChange={newValue => {
              props.onChange(newValue);
            }}
            renderInput={params => {
              return (
                <React.Fragment>
                  <TextField className="date-box" {...params} disabled={props.readOnly} />
                  <Validation type="text" value={props.value} required={props.required} />
                </React.Fragment>
              );
            }}
          />
        </ThemeProvider>
      </div>
    </LocalizationProvider>
  );
};

MaterialDatePicker.defaultProps = {
  readOnly: false,
  required: false,
  yearsLowerMargin: 65,
  yearsUpperMargin: 5
};

export default MaterialDatePicker;
