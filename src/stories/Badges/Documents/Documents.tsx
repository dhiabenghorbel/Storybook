import React from "react";
import CircularButton from "./../CircularButton/CircularButton.tsx";
import LoadingSpinner from '../../Loading/LoadingSpinner.tsx'

interface DocumentsProps {
  /**
   * Number of elements with type DMS
   */
  dms: number,
  /**
   * Number of elements with type CMS
   */
  cms: number,
  /**
   * Loading action while component finishing load
   */
  loading?: boolean
}

const Documents = ({ dms, cms, loading }: DocumentsProps) => {

  let content = null;
  if (dms > 0 || cms > 0) {
    content = loading ? <LoadingSpinner type="badge" /> : dms + cms;
  }

  return (
    <div>
      <CircularButton
        content={content}
        icon="bookmark"
        value="DMS" />
    </div>
  );
};

Documents.defaultProps = {
  dms: 0,
  cms: 0,
  loading: false
}

export default Documents;
