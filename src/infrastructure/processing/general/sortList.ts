import { Sort } from "../../../app/models/ISort.ts";
import occurrenceProcessing from "../occurrences";

export function sortAlphabetically(list: any[]) {
  return list?.sort((a, b) => {
    if (a.label < b.label) return -1;
    else if (a.label > b.label) return 1;
    return 0;
  });
}

export function sortList(list: any[], sorting: Sort) {
  return list?.sort((a, b) => {
    let valueA;
    let valueB;
    if (a.data && b.data) {
      valueA = occurrenceProcessing.findValueFromOccurrence(a, sorting.label);
      valueB = occurrenceProcessing.findValueFromOccurrence(b, sorting.label);
    } else {
      valueA = a[sorting.label];
      valueB = b[sorting.label];
    }
    if (sorting.direction === "asc" && valueA < valueB) return -1;
    else if (sorting.direction === "asc" && valueA > valueB) return 1;
    else if (sorting.direction === "desc" && valueB < valueA) return -1;
    else if (sorting.direction === "desc" && valueB > valueA) return 1;
    return 0;
  });
}

export function sortDescendant(list: any[], field: string) {
  list?.sort((a, b) => {
    return parseInt(b[field]) - parseInt(a[field]);
  });

  return list;
}

export function sortAscendant(list: any[], field: string) {
  return list?.sort((a, b) => parseInt(a[field]) - parseInt(b[field]));
}
