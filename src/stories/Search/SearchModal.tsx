import React, { useState } from "react";
import { MaterialSwitch } from "../Switch/MaterialSwitch.tsx";
import { TableField } from "../../app/models/ITableField.ts";
import DocSelectField from "../../app/pages/Documents/DocSelectField.tsx";
import ButtonDefault from "../Button/DefaultButton/ButtonDefault.tsx";
import TextField from "../Input/TextField/TextField.tsx";
import Modal from "../Modal/Modal.tsx";
import Select from "../Select/Select.tsx";
import DateRangePicker from "../DataItems/Time/DateRangePicker.tsx";

interface SearchModalProps {
  setQuery: Function;
  query: Object | string;
  searchParams: TableField[];
  
}


const SearchModal = ({ setQuery, query, searchParams }: SearchModalProps) => {

  const [state, setState] = useState(searchParams);
  const isMobile = false;
  const checked = false;

  const getFilterableFields = () => {
    const fields: TableField[]  = searchParams.filter((t: TableField) => t.filterable);
    const searchedFields : any = [];
    for (const f of fields) {
      switch (f.filterType) {
        case "boolean":
          searchedFields.push(
            <MaterialSwitch
              aligned
              mediumSize
              label={f.label}
              value={checked}
              onChange={(e: boolean) => {
                setState({ ...state, [f.label]: !checked });
              }}
            />
          );
          break;
        case "select-autocomplete":
          searchedFields.push(
            <DocSelectField mediumSize aligned label={f.label} search={f.urlKey} value={state[f.label]} onClick={val => setState({ ...state, [f.label]: val.name })} />
          );
          break;
       case "select":
          searchedFields.push(
            <Select mediumSize aligned onChange={val => setState({ ...state, [f.label]: val })} value={f.label} label={f.label}>
              {f.options && f.options.map(opt => (
                <option label={opt.label} value={opt.value} />
              ))}
            </Select>
          );
          break;

        case "date":
          searchedFields.push(
            <DateRangePicker/>
          );
          break;
        default:
          searchedFields.push(
            <TextField
              mediumSize={!isMobile}
              aligned={!isMobile}
              type={f.filterType ? f.filterType : "text"}
              label={f.label}
              value={state[f.label]}
              /*onChange={e => setState({ ...state, [f.label]: e.target.value })}*/
            />
          );
          break;
      }
    }
    return searchedFields;
    // setSearchedFields(searchedFields);
  };

  return (
    <div >
      <Modal >
        {getFilterableFields()}
        <div className="nudoss-selector-button-container">
          <ButtonDefault text="Clear" />
          <ButtonDefault text="Search"/>
        </div>
      </Modal>
    </div>
  );
};

SearchModal.defaultProps = {
  searchParams : [
  {
  filterType:"select-autocomplete",
  filterable:true,
  isDateValue:true,
  label:"Search",
  selectable:false,
  sortable:true,
  translatedHeader:true,
  translatedValue:false
  },
  {
  filterable:true,
  label:"Title",
  selectable:false,
  sortable:true,
  translatedHeader:true,
  translatedValue:false
  },
  {
  filterType:"boolean",
  filterable:true,
  isDateValue:true,
  label:"Switch",
  selectable:false,
  sortable:true,
  translatedHeader:true,
  translatedValue:false
  },
  {
  filterType:"date",
  filterable:true,
  isDateValue:true,
  label:"Date",
  selectable:false,
  sortable:true,
  translatedHeader:true,
  translatedValue:false
  },
 
  {
  filterType:"select",
  filterable:true,
  label:"language",
  selectable:false,
  sortable:true,
  translatedHeader:true,
  translatedValue:false,
  urlKey:"languages",
  options : [{value : "1", label: "Spanish"},{value : "2", label: "English"},{value : "3", label: "French"}]
  }
]
}
export default SearchModal;