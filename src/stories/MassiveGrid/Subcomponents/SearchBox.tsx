import React from "react";

interface SearchBoxProps {
  onChange: Function;
  value: string;
}

const SearchBox = ({ onChange, value }: SearchBoxProps) => {
  return (

    <div className="k-textbox k-space-right">
      <input autoFocus onChange={onChange} value={value} />
      <span className="k-icon k-i-zoom"></span>
    </div>
  );
};

export default SearchBox;