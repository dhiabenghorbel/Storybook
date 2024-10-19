import classnames from "classnames";
import React, { useState } from "react";
import Icon from "../../Icon/Icon.tsx";
import "../../Input/Input.scss";

interface CheckboxProps {
  type?: "checkbox" | "radio";
  checked?: boolean;
  readOnly?: boolean;
  onChange?: Function;
  id?: string;
  transparent?: boolean;
}

const Checkbox = ({ type, checked, onChange, readOnly, id, transparent }: CheckboxProps) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <Icon
      name={classnames(
        { square: type === "checkbox" && !checked },
        { "check-square": type === "checkbox" && checked },
        { circle: type === "radio" && !checked },
        { "check-circle": type === "radio" && checked },
        { "text-disabled": !checked && !onChange && readOnly },
        { "text-colourful": checked && onChange },
        { "text-black": checked && !onChange },
        { "text-transparent": transparent }
      )}
      grey
      disabled={readOnly}
      regular={!checked}
      onClick={
        onChange && !readOnly
          ? (e: any) => {
              setChecked(prev => !prev);
              onChange(!isChecked);
            }
          : () => {}
      }
      id={id}
    />
  );
};

Checkbox.defaultProps = {
  readOnly: false,
  onChange: undefined,
  id: undefined,
  checked: false,
  type: "checkbox"
};

export default Checkbox;
