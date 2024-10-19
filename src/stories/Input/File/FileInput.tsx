import React, { useState } from "react";
import classnames from "classnames";

interface FileInputProps {
  name: string;
  onChange: Function;
  allowedTypes: string;
  value?: string;
  disabled?: boolean;
  text?: boolean;
}

const FileInput = ({ value, name, onChange, allowedTypes, disabled, text }: FileInputProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <React.Fragment>
      <div style={{ display: "none" }}>
        <input
          name={name}
          id={name}
          type="file"
          accept={allowedTypes}
          disabled={disabled}
          onChange={e => {
            setLoading(true);
            onChange(e);
            setLoading(false);
          }}
          value=""
        />
      </div>
      <div className="flex-row-start">
        {text && (
          <div style={{ marginRight: "3rem" }}>
            {/* <FormattedMessage id="upload-file" /> */}
            Upload your file here
          </div>
        )}
        <label
          className={classnames(
            "flex-row-center",
            "standard-button",
            "padding-button",
            { "standard-button-disabled": disabled },
            { "button-success": !!value && !disabled },
            { "standard-button-loading": loading },
            "default-button-width"
          )}
          htmlFor={name}
        >
          <i className="icon-default fas fa-upload" />
        </label>
      </div>
    </React.Fragment>
  );
};

FileInput.defaultProps = {
  value: undefined,
  disabled: false
};

export default FileInput;
