import React, { FunctionComponent, ReactElement } from "react";
import * as PropTypes from "prop-types";
import ButtonDefault from "../../Button/DefaultButton/ButtonDefault.tsx";

const unixSep = "/";
const windowsSep = "\\";

const split = (filename: string) => {
  const unixParts = filename.split(unixSep);
  if (unixParts.length > 1) return unixParts;
  return filename.split(windowsSep);
};

interface FileLinkProps {
  downloadable?: boolean;
  isArchive?: boolean;
  datasection?: string | undefined;
  dossier?: string | undefined;
  nulign?: string | undefined;
  file?: string | undefined;
  text?: boolean;
  showName?: boolean;
  url:string;
}

const CustomFileLink: FunctionComponent<FileLinkProps> = ({ file, isArchive, nulign, dossier, datasection, downloadable, text, showName,url }): ReactElement => {

  // no file link
  if (!file || file.length < 8) return <React.Fragment />;

  // get filename
  const name : any = typeof file === "object" ? Object.values(file)[1] : split(file).slice(-1)[0];

  // just display filname
  if (!downloadable) {
    return <React.Fragment>{name}</React.Fragment>;
  }

  // file not yet downloaded
  if (!url) return <React.Fragment />;

  return (
    <div className="flex-row-start">
      {text && (
        <div style={{ marginRight: "3rem" }}>
          You can download your file here
        </div>
      )}
      <div style={{ display: "inline" }}>
        {isArchive ? (
          <div download={name}>
            <ButtonDefault /*onClick={() => handleDownload()}*/ success icon="download" style={{ width: "64px", margin: "0" }} />
          </div>
        ) : (
          <div href={url} download={name}>
            <ButtonDefault success icon="download" style={{ width: "64px", margin: "0" }} />
          </div>
        )}

        {showName && name}
      </div>
    </div>
  );
};

CustomFileLink.propTypes = {
  file: PropTypes.string.isRequired,
  downloadable: PropTypes.bool,
  showName: PropTypes.bool
};

CustomFileLink.defaultProps = {
  file:"filetext",
  url:"https://www.google.com/",
  text:true,
  downloadable: true,
  showName: false
};

export default CustomFileLink;
