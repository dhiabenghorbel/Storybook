import { orderBy, process, SortDescriptor } from "@progress/kendo-data-query";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-default/dist/all.css";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Occurrence } from "../../app/models/IOcurrence.ts";
import LoadingSpinner from "../Loading/LoadingSpinner.tsx";
import { IMassiveGrid } from "./Interfaces/IMassiveGrid.ts";
import "./MassiveGrid.scss";
import { states } from "./StatesObjects.ts";
import { createColumns } from "./Utils/CreateColumns.ts";
import { addEventKeyUp } from "./Utils/Events.ts";
import { addModifiedData, addModifiedFields, checkValuesRow } from "./Utils/RowDataOperations.ts";
import data from "./data.json";

interface IDataState {
  sort: SortDescriptor[];
  take: number;
  skip: number;
}

interface MassiveGridProps {
  readOnly?: boolean;
  add?: boolean;
  checkValues?: any[];
  checkCell?: Function;
  height?: string;
  dataSections?: string[];
  sort?: SortDescriptor[];
  withManagerData?: boolean;
  paginatedBySubordinates?: boolean;
  selectable?: boolean;
  //added props for storybook component
  data : any;
}

/**
 * All states needed in this component
 */
export interface MassiveGridState {
  dataState: IDataState;
  originalData: Occurrence[];
  originalFormatData: IMassiveGrid[];
  formatedData: IMassiveGrid[];
  modifiedData: IMassiveGrid[];
  loading: boolean;
  stage: number;
  readOnly: boolean;
}

/**
 * Initial state of all states defined in this component
 */
const initialState: MassiveGridState = {
  dataState: {
    sort: [{ field: "DATAANOMES", dir: "desc" }],
    take: 200,
    skip: 0
  },
  originalData: [],
  originalFormatData: [],
  formatedData: [],
  modifiedData: [],
  loading: true,
  stage: 1,
  readOnly: false
};

const MassiveGrid = ({ selectable, readOnly, add, checkValues, checkCell, height, dataSections, sort, withManagerData, paginatedBySubordinates, data }: MassiveGridProps) => {
  const [state, setState] = useState(initialState);
  const MAX_ROWS = 99;
  // const { gpid, data } = useContext(GPContext);
  // const { subordinates, subordinatesDispatch } = useContext(SubordinatesContext);

  /**
   * Format data when Grid is rendered based on GP data in GPContext
   */
  useEffect(() => {
    // const formatedData = formatData(data);
    let formatedData: any = data;
    if (checkValues) {
      formatedData = checkValuesRow(formatedData, checkValues);
    }
    setState({
      ...state,
      formatedData,
      originalFormatData: formatedData,
      readOnly: readOnly,
      loading: false,
      dataState: {
        sort: sort ? sort : initialState.dataState.sort,
        take: 200,
        skip: 0
      }
    });
    states.originalFormatData = formatedData;
    states.formatedData = formatedData;
    // states.columns = useCreateGridColumns(gpid);
  }, [data]);

  const createDataState = (dataState: any) => {
    const p = process(state.originalFormatData.slice(0), dataState);
    states.formatedData = p.data;
    setState({ ...state, formatedData: p.data, dataState });
  };

  useEffect(() => {
    addEventKeyUp();
  }, [data]);

  useEffect(() => {
    if (!withManagerData || !paginatedBySubordinates) {
      setState({ ...state, loading: true });
      const ini = (state.stage - 1) * MAX_ROWS;
      const end = (state.stage - 1) * MAX_ROWS + MAX_ROWS;
      const dataPaginated = state.originalFormatData.slice(ini, end);
      setState({ ...state, formatedData: dataPaginated, loading: false });
      states.formatedData = dataPaginated;
    }
  }, [state.stage, state.originalFormatData]);
  /**
   * This method is called when data is filter by columns chechboxes or ordered by any column
   */
  const onDataStateChange = (e: any) => {
    createDataState(e.data);
  };

  /**
   * This function is called when there is any change on data
   */
  const onItemChange = (event: any) => {
    const itemModified = event.dataItem;
    itemModified[event.field] = event.value;
    states.modifiedData = addModifiedData(data, itemModified, states.modifiedData);
    states.fieldsModified = addModifiedFields(states.fieldsModified, itemModified, event.field);
  };

  const onSelectRow = (event: any) => {
    const id = event.dataItem.id;
    const formatedDataCopy: any = _.cloneDeep(data);
    const selectedValue = formatedDataCopy.find(d => d.id === id).selected;
    formatedDataCopy.find(d => d.id === id).selected = !selectedValue;

    states.modifiedData = addModifiedData(formatedDataCopy, event.dataItem, states.modifiedData);

    setState({ ...state, formatedData: formatedDataCopy });
  };

  const onSelectAllRows = (event: any) => {
    const checkboxElement = event.syntheticEvent.target;
    const checked = checkboxElement.checked;
    const formatedDataCopy: any = _.cloneDeep(data);
    formatedDataCopy.forEach(item => {
      item.selected = checked;
      states.modifiedData = addModifiedData(formatedDataCopy, item, states.modifiedData);
    });
    setState({ ...state, formatedData: formatedDataCopy });
  };

  const selecProps = selectable
    ? {
        selectedField: "selected",
        selectable: {
          enabled: true,
          drag: false,
          cell: false,
          mode: "multiple"
        },
        onSelectionChange: onSelectRow,
        onHeaderSelectionChange: onSelectAllRows
      }
    : {};
  /**
   * Render method. While data is being formatting, loading component is redered. Once data loaded, the Grid is shown
   */
  if (state.loading) return <LoadingSpinner />;
  return (
    <React.Fragment>
      <Grid
        sortable
        editField="disabled"
        columnVirtualization={false}
        style={{ height: height ? height : "auto" }}
        onItemChange={onItemChange}
        {...selecProps}
        data={orderBy(data, state.dataState.sort)}
        {...state.dataState}
        onDataStateChange={onDataStateChange}
      >
        {selectable && <GridColumn field="selected" width="50px" headerSelectionValue={data.findIndex(item => !item.selected) === -1} />}
        {createColumns(states.columns, state.readOnly)}
      </Grid>
      <div className="flex-row-space-between result-container">
        {data && (
          <p style={{ color: "var(--colour-disabled)" }}>
            {data.length}
            {" records of "}
            {data.length}
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

MassiveGrid.defaultProps = {
  data : data
}

export default React.memo(MassiveGrid);
