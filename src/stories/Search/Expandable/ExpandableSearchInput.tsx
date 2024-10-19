import _ from "lodash";
import moment from "moment";
import React, { FunctionComponent, ReactElement, useState } from "react";
import constants from "../../../GP4You/constants";
import { TableField } from "../../../app/models/ITableField.ts";
import { isValidArrayDate } from "../../../app/validators/fieldValidator.ts";
import isEmpty from "../../../infrastructure/processing/general/isEmpty.ts";
import Icon from "../../Icon/Icon.tsx";
import "./ExpandableSearchInput.scss";

interface ExpandableSearchInputProps {
  onChange: (s: string) => void;
  onClick?: () => void;
  value: string;
  tableFields: TableField[];
  label?: string;
  withBubbles?: boolean;
}

const ExpandableSearchInput: FunctionComponent<ExpandableSearchInputProps> = ({ onChange, value, tableFields, label, onClick, withBubbles }): ReactElement => {
  const [expanded, setExpanded] = useState(false);
  // const [query, setQuery] = useState(value);
  const bubbles : any = [];

  const removeFilter = (filter: any, filterName: string) => {
    const filterCopy = _.cloneDeep(filter);
    filterCopy[filterName] = "";
    onChange(filterCopy);
    // setQuery(filterCopy);
  };


  const filterBubbles = (value: any) => {
    if (typeof value === "object") {
      return Object.keys(value).map(q => {
        let hasFilterValue = false;
        if (!isEmpty(value[q])) {
          if (Array.isArray(value[q])) {
            if (isValidArrayDate(value[q])) {
              hasFilterValue = true;
            }
          } else hasFilterValue = true;
        }
        if (hasFilterValue && tableFields) {
          const val = Array.isArray(value[q]) ? [moment(value[q][0]).format(constants.DATE_FORMAT), moment(value[q][1]).format(constants.DATE_FORMAT)].join("-") : value[q];
          // const tableField = tableFields.find(t => t.label === `@${q}`);
          const finalValue = val ;
          return (
            <span className="bubble-filter-item">
              <div>
                <i>
                  {q} 
                </i>
                : <b>{finalValue}</b>
              </div>
              <Icon small onClick={() => removeFilter(value, q)} name="times" />
            </span>
          );
        }
        return null;
      });
    }
  };
  // useEffect(() => {
  //   const bubbles = filterBubbles(value);
  //   setBubbles(bubbles);
  // }, [value, query]);
  return (
    <div>
      <div className="search-box">
        <input
          type="text"
          name=""
          className={`buscar-txt ${expanded ? "expanded" : ""}`}
          placeholder={label}
          onChange={(e: any) => onChange(e.target.value)}
        />
        <div className="advanced-btn" onClick={onClick}>
          {/*<p className="advanced-text">Advanced</p>*/}
          <i className="fas fa-ellipsis-v" />
        </div>
        <div className="buscar-btn" onClick={() => setExpanded(prev => !prev)}>
          <i className="fas fa-search" />
        </div>
      </div>
      {withBubbles && (
        <div className="flex-row-start margin-top">
          {/* {filterBubbles(query)} */}
          {bubbles}
        </div>
      )}
    </div>
  );
};

ExpandableSearchInput.defaultProps = {
  onChange: s => {},
  value: "",
  label: "Search...",
  withBubbles: true,
};

export default ExpandableSearchInput;
