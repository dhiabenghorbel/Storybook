import React, { ReactElement , useState } from "react";
import Select from "../../Select/Select.tsx";
import Icon from "../../Icon/Icon.tsx";

interface TablePaginationProps {
  length: number;
  rowsPerPage: number;
  page: number;
  handleChangePage: Function;
  handleChangeRowsPerPage: Function;
  paginationAmounts: number[] | any;
}

const TablePagination = ({ length, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, paginationAmounts }: TablePaginationProps) => {

  const [currentPage, setCurrentPage] = useState(page);

  const handleChangePageFunc = (newPage: number) => {
      setCurrentPage(newPage);
  };
  // useEffect(() => {
  //   setCurrentPage(page);
  // }, [page]);
  
  const lastPage = Number(Math.ceil(length / rowsPerPage));

  if (length === 0) {
    return (
      <div className="flex-row-center full-width">
        {/* <FormattedMessage id="label-no-elements" /> */}
        No elements
      </div>
    );
  } else if (length <= Math.min(...paginationAmounts)) return <React.Fragment />;

  const options: ReactElement[] = paginationAmounts.map(e => (
    <option key={e} value={e}>
      {e}
    </option>
  ));
  return (
    <div className="flex-row-center full-width">
      <div>
        {/* <FormattedMessage id="rowsPerPage" /> */}
        Rows per page
      </div>
      <div>
        <Select onChange={()=>{}} value={30}>
          {options}
        </Select>
      </div>
      <div className="flex-row-center">
        <Icon name="chevron-left" onClick={() => handleChangePageFunc(currentPage - 1)} light={false} disabled={currentPage === 0} />
        <span>{`${currentPage + 1}/${lastPage === 0 ? lastPage + 1 : lastPage}`}</span>
        <Icon name="chevron-right" onClick={() => handleChangePageFunc(currentPage + 1)} light={false} disabled={currentPage + 1 === lastPage || lastPage === 1} />
      </div>
    </div>
  );
};

TablePagination.defaultProps = {
  paginationAmounts: [5, 10, 15],
  rowsPerPage:4,
  page: 0,
  length:9
};

export default TablePagination;
