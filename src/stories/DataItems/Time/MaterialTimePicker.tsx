import React, { FunctionComponent, ReactElement } from "react";
import TextField from "@mui/material/TextField";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {TimePicker} from "@mui/x-date-pickers/TimePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./DatePicker.scss";
import Validation from "../../Input/Validation/Validation.tsx";
import { TimeToMoment } from "../../DataValue/StateSanitizers.ts";
import { minutesToTime } from "../../../infrastructure/processing/general/time.ts";
import classNames from "classnames";
import { localeMap } from "../../Calendar/PickerHelper/LanguageSelector.ts";

interface MaterialTimePickerProps {
  value: any;
  label?: string;
  focused: boolean;
  onChange: Function;
  setFocused: Function;
  readOnly?: boolean;
  required?: boolean;
  yearsLowerMargin?: number;
  yearsUpperMargin?: number;
  isModal?: boolean;
  aligned?: boolean;
  smallSize?: boolean;
  extraSmallSize?: boolean;
  marginLeft?: boolean;
  bigSize?: boolean;
  mediumSize?: boolean;
}

const innerTheme = createTheme({
  palette: {
    primary: {
      main: "#f07c00"
    }
  }
});

const MaterialTimePicker: FunctionComponent<MaterialTimePickerProps> = (props): ReactElement => {

  let getTime = minutesToTime(props.value);
  let datetime = new Date("1970-01-01T" + getTime);

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
        <ThemeProvider theme={innerTheme}>
          <TimePicker
            value={datetime}
            disabled={props.readOnly}
            label={props.label}
            onChange={newValue => {
              props.onChange(newValue !== null ? TimeToMoment(newValue) : newValue);
            }}
            renderInput={params => {
              return (
                <React.Fragment>
                  <TextField className="date-box" disabled={props.readOnly} {...params} />
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

MaterialTimePicker.defaultProps = {
  readOnly: false,
  required: false,
  yearsLowerMargin: 65,
  yearsUpperMargin: 5
};

export default MaterialTimePicker;
