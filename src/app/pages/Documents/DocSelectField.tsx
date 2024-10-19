import classnames from "classnames";
import PropTypes from "prop-types";
import React, { useState } from "react";
import FloatingMenu from "../../../stories//FloatingMenu/FloatingMenu.tsx";
import FloatingMenuItem from "../../../stories/FloatingMenu/FloatingMenuItem/FloatingMenuItem.tsx";
import GenericSearchInput from "../../../stories/Search/Generic/GenericSearchInput.tsx";
import isEmpty from "../../../infrastructure/processing/general/isEmpty.ts";

interface DocSelectFieldProps {
  value: string;
  onClick: Function;
  search: string;
  label: string;
  mediumSize: boolean;
  aligned: boolean;
  mediumHeight: boolean;
}

const DocSelectField = ({ value, onClick, search, label, mediumSize, aligned, mediumHeight }: DocSelectFieldProps) => {
  const [query, setQuery] = useState(value);
  const elements = [];
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      {/* {isEmpty(selected) || isEmpty(value) ? ( */}
      <div className={classnames("position-relative", { "inline half-width": mediumSize }, { "full-width": !mediumSize }, { inline: aligned })}>
        <GenericSearchInput
          value={query}
          onChange={q => {
            setQuery(q);
          }}
          onClick={() => setOpen(true)}
          label={label}
        />
        {isOpen && (
          <FloatingMenu
            formSize
            showing={isOpen}
            black
            mediumHeight={mediumHeight}
            scroll
            onClose={() => setOpen(false)}
            style={{ padding: "1rem", width: "100%rem", top: "auto" }}
          >
            {!isEmpty(elements) ? (
              <React.Fragment>
                {elements.map(c => {
                  return (
                    <FloatingMenuItem
                      whiteText
                      key={c.code}
                      onClose={() => setOpen(false)}
                      /*onClick={() => {
                        setQuery(c.name);
                        setSelectedElement(c);
                        onClick(c);
                      }}*/
                    >
                      <p>{c.name}</p>
                    </FloatingMenuItem>
                  );
                })}
              </React.Fragment>
            ) : (
              <FloatingMenuItem whiteText key="no-element" onClose={() => setOpen(false)}>
                {"No elements"}
              </FloatingMenuItem>
            )}
          </FloatingMenu>
        )}
      </div>
    </React.Fragment>
  );
};

DocSelectField.propTypes = {
  mediumSize: PropTypes.bool
};
DocSelectField.defaultProps = {
  mediumSize: false
};

export default DocSelectField;
