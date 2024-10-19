import React, { useState } from "react";
import isEmpty from "../../../infrastructure/processing/general/isEmpty.ts";
import GenericSearchInput from "../../../stories/Search/Generic/GenericSearchInput.tsx";
import TextField from "../../../stories/Input/TextField/TextField.tsx";
import FloatingMenu from "../../../stories/FloatingMenu/FloatingMenu.tsx";
import FloatingMenuItem from "../../../stories/FloatingMenu/FloatingMenu.tsx";

const LIMIT_SEARCH = 7;
interface DossierSelectFieldProps {
  value: string;
  onClick: Function;
  search: string;
  label: string;
}
const DossierSelectField = ({ value, onClick, search, label }: DossierSelectFieldProps) => {
  // const [limit, setLimit] = useState(LIMIT_SEARCH);
  const elementsNumber = LIMIT_SEARCH;
  const query = "";
  const elements = [];
  const [selected, setSelectedElement] = useState("");
  const [isOpen, setOpen] = useState(false);
  const  isMobile = false;

  // const filterItems = (q: string, lim: number, data: any[]) => {
  //   const filtered = data.filter(e => e.name.toLowerCase().indexOf(q.toLowerCase()) > -1 || e.code.toLowerCase().indexOf(q.toLowerCase()) > -1);
  //   setelementsNumber(filtered.length);
  //   setElements(filtered.slice(0, lim));
  // };

  return (
    <React.Fragment>
      {isEmpty(selected) || isEmpty(value) ? (
        <GenericSearchInput
          value={query}
          // onChange={q => {
          //   //setQuery(q);
          //   setLimit(LIMIT_SEARCH);
          // }}
          onClick={() => setOpen(true)}
          label={label}
        />
      ) : (
        <TextField
          label={label}
          readOnly
          withoutBorder
          value={selected ? `${selected.code} - ${selected.name}` : ""}
          icon="times"
          onClick={() => {
            setSelectedElement("");
            onClick("");
            //setQuery("");
          }}
        />
      )}
      {isOpen && (
        <FloatingMenu
          formSize
          showing={isOpen}
          black
          scroll
          onClose={() => setOpen(false)}
          style={isMobile ? { width: "90%", right: "50%", transform: "translateX(50%)" } : { padding: "1rem", width: "30rem", top: "auto" }}
        >
          {!isEmpty(elements) ? (
            <React.Fragment>
              {elements.map(c => (
                <FloatingMenuItem
                  whiteText
                  key={c.code}
                  onClose={() => setOpen(false)}
                  onClick={() => {
                    onClick(c);
                    setSelectedElement(c);
                  }}
                >
                  <p>{c ? `${c.code} - ${c.name}` : ""}</p>
                </FloatingMenuItem>
              ))}
              {elementsNumber > LIMIT_SEARCH && (
                <FloatingMenuItem specialFunction key="more" /*onClick={() => setLimit(prevState => prevState + LIMIT_SEARCH)}*/>
                  <i className="fas fa-arrow-alt-circle-down" />
                  &nbsp;&nbsp;
                  Load more
                </FloatingMenuItem>
              )}
            </React.Fragment>
          ) : (
            <FloatingMenuItem whiteText key="no-element" onClose={() => setOpen(false)}>
              No elements
            </FloatingMenuItem>
          )}
        </FloatingMenu>
      )}
    </React.Fragment>
  );
};

export default DossierSelectField;
