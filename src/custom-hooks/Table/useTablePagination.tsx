import { useEffect, useState } from "react";
import { sortList } from "../../infrastructure/processing/general/sortList.ts";

const useTablePagination: Function = (objects: Object[], selected: any, tableFields: Object[], handleMassSelection: Function, defaultRowsPerPage: number, initialPage: number) => {
  const [sort, setSort] = useState({ label: "", direction: "asc" });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage || 5);
  const handleChangeRowsPerPage = (rows: number) => setRowsPerPage(Number(rows));
  const handleChangePage = (pag: number) => setPage(pag);
  const handleSort = (label: string) => {
    if (sort.label === label) {
      setSort(previous => {
        const newSort = { ...previous };
        newSort.direction = previous.direction === "asc" ? "desc" : "asc";
        return newSort;
      });
    } else {
      setSort({ label, direction: "asc" });
    }
  };

  const showingElements = sortList(objects, sort).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  
  useEffect(() => {
    setPage(initialPage ? 0 : page);
  }, [initialPage, rowsPerPage, page]);

  const selectAll = (label: string) => {
    if (selected[label] && selected[label].length > 0) {
      handleMassSelection([], label);
    } else {
      const toAdd: Object[] = [];
      showingElements.forEach(n => {
        const field = tableFields.find(e => e.label === label);
        const isDisabled = field && field.isElementDisabled && field.isElementDisabled(n);
        if (!isDisabled) toAdd.push(n);
      });
      handleMassSelection(toAdd, label);
    }
  };
  const selectedLabels = () => {
    return Object.keys(selected).filter(k => selected[k].length > 0);
  };

  return [showingElements, sort, handleSort, page, handleChangePage, rowsPerPage, handleChangeRowsPerPage, selectAll, selectedLabels()];
};

export default useTablePagination;
