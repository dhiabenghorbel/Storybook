import constants from "../../GP4You/constants";
import { TableField } from "./ITableField";

export interface ITask {
  "@id": string;
  "@subject": string;
  "@gpId": string;
  "@nustep": string;
  "@label": string;
  "@recipient": string;
  "@requester": string;
  "@priority": string;
  "@isLow": string;
  "@isMedium": string;
  "@isHigh": string;
  "@startDate": string;
  "@endDate": string;
  "@isQuickvalidable": string;
  "@isTransmittable": string;
  "@isRejectable": string;
  "@detail": string;
  "@quickValidate": string;
  "@draft": string;
  "@forwardReceiver"?: string;
}
export const tableFields: TableField[] = constants.isDelegationEnabled
  ? [
      /*       {
        selectable: true,
        label: "validate",
        sortable: false,
        translatedHeader: true,
        translatedValue: false,
        size: "small",
        isElementDisabled: (n: ITask) => n["@isQuickvalidable"] !== "true"
      }, */
      {
        selectable: false,
        label: "@draft",
        sortable: false,
        translatedHeader: true,
        translatedValue: false,
        size: "small",
        withDraftIcon: (n: ITask) => n["@draft"] === "1",
        filterable: true,
        filterType: "boolean",
        options: [
          { label: "yes", value: "1", bool: true },
          { label: "no", value: "0", bool: false }
        ],
        translatedFilter: true
      },
      /*       { selectable: false, label: "@subject", sortable: true, translatedHeader: true, translatedValue: true, size: "medium", filterable: true }, */
      { selectable: false, label: "@label", sortable: true, translatedHeader: true, translatedValue: false, filterable: true },
      { selectable: false, label: "@requester", sortable: true, translatedHeader: true, translatedValue: false, size: "big", filterable: true },
      { selectable: false, label: "@recipient", sortable: true, translatedHeader: true, translatedValue: false, size: "big", filterable: true },
      {
        selectable: false,
        label: "@priority",
        sortable: true,
        translatedHeader: true,
        translatedValue: false,
        size: "small",
        withColor: (n: ITask) => (n["@priority"] === "High" ? "red" : n["@priority"] === "Low" ? "green" : n["@priority"] === "Medium" ? "orange" : ""),
        filterable: true,
        filterType: "select",
        options: [
          { label: " ", value: "" },
          { label: "High", value: "High" },
          { label: "Medium", value: "Medium" },
          { label: "Low", value: "Low" }
        ],
        translatedFilter: true
      },
      {
        selectable: false,
        label: "@startDate",
        sortable: true,
        translatedHeader: true,
        translatedValue: false,
        isDateValue: true,
        size: "medium",
        filterable: true,
        filterType: "date"
      }
      /*  {
        selectable: false,
        label: "@endDate",
        sortable: true,
        translatedHeader: true,
        translatedValue: false,
        isDateValue: true,
        size: "small",
        filterable: true,
        filterType: "date"
      } */
    ]
  : [
      /*       {
      selectable: true,
      label: "validate",
      sortable: false,
      translatedHeader: true,
      translatedValue: false,
      size: "small",
      isElementDisabled: (n: ITask) => n["@isQuickvalidable"] !== "true"
    }, */
      { selectable: false, label: "@draft", sortable: false, translatedHeader: true, translatedValue: false, size: "small", withDraftIcon: (n: ITask) => n["@draft"] === "1" },
      { selectable: false, label: "@label", sortable: true, translatedHeader: true, translatedValue: false },
      { selectable: false, label: "@requester", sortable: true, translatedHeader: true, translatedValue: false, size: "small" },
      { selectable: false, label: "@forwardReceiver", sortable: true, translatedHeader: true, translatedValue: false, size: "small" }
      /*  { selectable: true, label: "reject", sortable: false, translatedHeader: true, translatedValue: false, size: "small", isElementDisabled: (n: ITask) => n["@draft"] !== "1" } */
    ];
export const customtableFields = () => {
  const mytable: TableField[] = [
    {
      selectable: false,
      label: "DTEFCL",
      sortable: true,
      translatedHeader: true,
      isOccurrence: true,
      dataItem: {
        type: "date",
        name: "DTEFCL",
        readOnly: true
      }
    },
    {
      selectable: false,
      label: "DTENCL",
      sortable: true,
      translatedHeader: true,
      isOccurrence: true,
      dataItem: {
        type: "time",
        name: "DTENCL",
        readOnly: true
      }
    },
    {
      selectable: false,
      label: "IDLO00",
      sortable: true,
      translatedHeader: true,
      isOccurrence: true,
      dataItem: {
        type: "time",
        name: "IDLO00",
        readOnly: true
      }
    },
    {
      selectable: false,
      label: "IDROOM",
      sortable: true,
      translatedHeader: true,
      isOccurrence: true,
      dataItem: {
        type: "text",
        name: "IDROOM",
        readOnly: true
      }
    }
  ];
  return mytable;
};

export const customtableFieldsZDHB = () => {
  const mytable: TableField[] = [
    // {
    //   selectable: false,
    //   label: "NBOR00",
    //   sortable: true,
    //   translatedHeader: true,
    //   isOccurrence: true,
    //   dataItem: {
    //     type: "text",
    //     name: "NBOR00",
    //     readOnly: true,
    //   }
    // },
    {
      selectable: false,
      label: "IDCR00_stages",
      sortable: true,
      translatedHeader: true,
      isOccurrence: true,
      dataItem: {
        type: "text",
        name: "IDCR00",
        readOnly: true
      }
    },
    {
      selectable: false,
      label: "IDCR00_EXT",
      sortable: true,
      translatedHeader: true,
      isOccurrence: true,
      dataItem: {
        type: "text",
        name: "IDCR00_EXT",
        readOnly: true
      }
    },
    {
      selectable: false,
      label: "FLIMPO",
      sortable: true,
      translatedHeader: true,
      isOccurrence: true,
      dataItem: {
        type: "text",
        name: "FLIMPO_EXT",
        readOnly: true
      }
    }
  ];
  return mytable;
};
export const customtableFieldsZDHD = () => {
  const mytable: TableField[] = [
    {
      selectable: false,
      label: "IDSK00_EXT",
      sortable: true,
      translatedHeader: true,
      isOccurrence: true,
      dataItem: {
        type: "text",
        name: "IDSK00",
        readOnly: true
      }
    },
    {
      selectable: false,
      label: "LVPROF",
      sortable: true,
      translatedHeader: true,
      isOccurrence: true,
      dataItem: {
        type: "text",
        name: "LVPROF",
        readOnly: true
      }
    }
  ];
  return mytable;
};

export const columnDataForClosedTasks: TableField[] = [
  {
    selectable: false,
    label: "@subject",
    size: "big",
    sortable: true,
    translatedHeader: true,
    translatedValue: false,
    filterable: true
  },
  {
    selectable: false,
    label: "@label",
    sortable: true,
    translatedHeader: true,
    translatedValue: false,
    filterable: true
  },
  {
    selectable: false,
    label: "@actor",
    size: "medium",
    sortable: true,
    translatedHeader: true,
    translatedValue: false,
    filterable: true
  },
  {
    selectable: false,
    label: "@recipient",
    sortable: true,
    size: "medium",
    translatedHeader: true,
    translatedValue: false,
    filterable: true
  },

  /*   {
    selectable: false,
    label: "@deadline",
    sortable: true,
    size: "small",
    translatedHeader: true,
    translatedValue: false,
    isDateValue: true
  }, */
  {
    selectable: false,
    label: "@creationDate",
    sortable: true,
    size: "medium",
    translatedHeader: true,
    translatedValue: false,
    isDateValue: true,
    filterable: true,
    filterType: "date"
  },
  {
    selectable: false,
    label: "@endDate",
    size: "medium",
    sortable: true,
    translatedHeader: true,
    translatedValue: false,
    isDateValue: true,
    filterable: true,
    filterType: "date"
  },
  { selectable: true, label: "delete", sortable: false, translatedHeader: true, translatedValue: false, size: "small" }
];
