import { DropDownList } from "@progress/kendo-react-dropdowns";
import { GridCellProps } from "@progress/kendo-react-grid";
import React, { FunctionComponent, ReactElement, useState } from "react";
// import { IDataFromDirectory } from "../Interfaces/IDataFromDirectory";
import { getColumnsIndex } from "../Utils/Events.ts";

const DropDownCell: FunctionComponent<GridCellProps> = ({ props, columnProps }): ReactElement => {
  // const gpid  = "";
  const options = [];
  const [newClass, setNewClass] = useState("");
  const option = {};
  const [openClass, setOpenClass] = useState("");
  const { dataIndex } = props;

  // const getOptionsList = () => {
  //   const dataFromDirectory: IDataFromDirectory = columnProps.datafromdirectory;
  //   if (dataFromDirectory) {
  //     // const { datasection, name, population, domain, label, source } = dataFromDirectory;
  //     // getOptions({ datasection, name, population, domain, label, gpid, source })
  //     //   .then(res => {
  //     //     const opts = res.map(o => {
  //     //       return { text: o.label, value: o.value };
  //     //     });
  //     //     setOptions(opts);
  //     //   })
  //     //   .catch(err => {
  //     //     throwError(err);
  //     //   });
  //   } else {
  //     try {
  //       const module = require(`../../../../GP4You/gp/${gpid}/grid/options.ts`);
  //       const opts = module.optionsList[props.field];
  //       setOptions(opts);
  //     } catch (err) {}
  //   }
  // };

  // useEffect(() => {
  //   getOptionsList();
  // }, []);


  const handleChange = e => {
    if (e.target.actionElement.ariaExpanded === "true") {
      //updateOption(e.target.value.value);
      setNewClass("cell-modified");
      props.onChange({
        dataItem: props.dataItem,
        field: props.field,
        syntheticEvent: e.nativeEvent,
        value: e.target.value.value
      });
    }
  };

  // const updateOption = (value: string) => {
  //   const option = options.find(o => o.value === value);
  //   option ? setOption(option) : options[0];
  // };

  const onOpen = (e: any) => {
    setOpenClass("opened");
  };

  const onClose = (e: any) => {
    setOpenClass("");
  };


  return (
    <td>
      {props.dataItem.inEdit && columnProps.editor !== "disabled" ? (
        <div row={dataIndex} column={getColumnsIndex(props.field)} className="on-move">
          <DropDownList
            onChange={handleChange}
            className={`${newClass} ${openClass}`}
            value={option}
            data={options}
            textField="text"
            onOpen={(e: any) => onOpen(e)}
            onClose={(e: any) => onClose(e)}
          />
        </div>
      ) : (
        <input className={`k-textbox`} value={option ? option.text : ""} disabled />
      )}
    </td>
  );
};

export default DropDownCell;
