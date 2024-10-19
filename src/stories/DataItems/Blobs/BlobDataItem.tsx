import React, { FunctionComponent, ReactElement } from "react";
//import documentService from "../../../services/documentService";
//import { throwError } from "../../../services/errorService/errors";
import Validation from "../../Input/Validation/Validation.tsx";
//import useStatefulDataItem from "../../../custom-hooks/DataItem/useStatefulDataItem";
import FileInput from "../../Input/File/FileInput.tsx";
import constants from "../../../GP4You/constants";
import { defaultProps, IDataItem } from "../../../app/models/IDataItem.ts";
import CustomFileLink from "./CustomFileLink.tsx";
import classnames from "classnames";

const BlobDataItem: FunctionComponent<IDataItem> = (props): ReactElement => {
  // const [value, onChange] = useStatefulDataItem(props);
  // const { onChangeSelect } = props;

  // const submit = (e: React.ChangeEvent) => {
  //   documentService
  //     .uploadFile(e, constants.ALLOWED_UPLOAD_TYPES)
  //     .then(path => {
  //       onChange(`blobpath:${path}`);
  //       onChangeSelect(path);
  //     })
  //     .catch(err => {
  //       throwError(err);
  //     });
  // };

  if (props.hidden || (props.hideIfNoValue && (!props.value || props.value === ""))) return <React.Fragment />;

  return (
    <React.Fragment>
      <div
        className={classnames(
          "input-container",
          // { "inline-grid": aligned },
          { "inline-grid": props.aligned },
          { "full-width": !props.smallSize && !props.aligned },
          { "half-width": props.mediumSize },
          { "third-width": props.smallSize || (props.aligned && !props.mediumSize) }
        )}
      >
        {!props.notUploadable && (
          <FileInput /*onChange={submit}*/ name={props.name} disabled={props.readOnly} text value={props.value} allowedTypes={constants.ALLOWED_UPLOAD_TYPES.join(", ")} />
        )}
        <div>
          {props.value && (
            <CustomFileLink
              downloadable={props.downloadable}
              isArchive={props.isArchive}
              datasection={props.datasection}
              dossier={props.dossier}
              nulign={props.nulign}
              file={props.value}
              text={!props.withoutLabel}
              showName
            />
          )}
        </div>
        <Validation readOnly={props.readOnly} type={props.type} value={props.value} required={props.required} regExp={props.regex} />
      </div>
    </React.Fragment>
  );
};

BlobDataItem.defaultProps = defaultProps;

export default BlobDataItem;
