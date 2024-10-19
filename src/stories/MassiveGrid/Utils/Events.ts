import { IGridColumn } from "../Interfaces/IGridColumn";
import { states } from "../StatesObjects.ts";

export const getElementByIndex = (row: number, column: number, keyCode: number) => {
  if (row >= 0) {
    const divList = Array.from(document.getElementsByTagName("div")).filter(e => e.hasAttribute("row") && e.hasAttribute("column"));
    const inputs = Array.from(document.getElementsByTagName("input"));
    const textAreas = Array.from(document.getElementsByTagName("textarea"));
    const allInputs = inputs.concat(textAreas);
    const inputList = allInputs.filter(e => {
      return e.hasAttribute("row") && e.hasAttribute("column") && e.hasAttribute("class") && e.attributes.class.value.includes("on-move");
    });
    const divElement = divList.find((e: any) => parseInt(e.getAttribute("row"), 10) === row && parseInt(e.getAttribute("column"), 10) === column);
    const inputElement = inputList.find((e: any) => {
      return parseInt(e.getAttribute("row"), 10) === row && parseInt(e.getAttribute("column"), 10) === column;
    });
    if (divElement) {
      const span = divElement.querySelectorAll("span.k-dropdown-wrap.k-state-default")[0];
      let class_ = span.className;
      class_ += "k-state-focused";
      span.className = class_;
      divElement.querySelectorAll("select")[0].focus();
    } else if (inputElement) {
      inputElement.focus();
      inputElement.select();
    } else {
      const firstColumn = getColumnsIndex(states.columns.find(e => e.editable).field);
      const lastColumn = getColumnsIndex(states.columns[getLastColumnsIndex(states.columns)].field);
      switch (keyCode) {
        case 37:
          if (column - 1 >= firstColumn) {
            getElementByIndex(row, column - 1, keyCode);
          } else {
            getElementByIndex(row - 1, lastColumn, keyCode);
          }
          break;
        case 38:
          if (row - 1 >= 0) {
            getElementByIndex(row - 1, column, keyCode);
          }
          break;
        case 39:
          if (column + 1 <= lastColumn) {
            getElementByIndex(row, column + 1, keyCode);
          } else {
            getElementByIndex(row + 1, firstColumn, keyCode);
          }
          break;
        case 40:
          if (row + 1 <= states.formatedData.length) {
            getElementByIndex(row + 1, column, keyCode);
          }
          break;
        default:
          break;
      }
    }
  }
};

export const getColumnsIndex = (fieldName: string): number => {
  return states.columns.findIndex((e: IGridColumn) => {
    return e["field"] === fieldName;
  });
};

export const getLastColumnsIndex = (array: IGridColumn[]): number => {
  let lastIndex = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i].editable) {
      lastIndex = i;
      break;
    }
  }
  return lastIndex;
};

const getExpanded = (element: HTMLElement) => {
  if (element.tagName === "SELECT") return element.parentNode.parentElement.className.includes("opened");
  else if (element.tagName === "SPAN") return element.parentNode.className.includes("opened");
  return false;
};

export const moveByArrows = (event: any, row: number, column: number) => {
  if (!getExpanded(event.target)) {
    switch (event.keyCode) {
      case 37:
        getElementByIndex(row, column - 1, event.keyCode);
        break;
      case 38:
        getElementByIndex(row - 1, column, event.keyCode);
        break;
      case 39:
        getElementByIndex(row, column + 1, event.keyCode);
        break;
      case 40:
        getElementByIndex(row + 1, column, event.keyCode);
        break;
    }
  }
};

export const addEventKeyUp = () => {
  const selectContainerList = document.querySelectorAll(`.on-move`);

  selectContainerList.forEach((element: any) => {
    const row = parseInt(element.getAttribute("row"), 10);
    const column = parseInt(element.getAttribute("column"), 10);

    element.addEventListener("keyup", function(event: any) {
      moveByArrows(event, row, column);
    });
  });
};
