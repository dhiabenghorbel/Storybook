import React from "react";
import CircularButton from "./../CircularButton/CircularButton.tsx";
import LoadingSpinner from '../../Loading/LoadingSpinner.tsx'

interface ReportsProps {
  /**
   * Number of elements
   */
  reports: number,
  /**
   * Loading action while component finishing load
   */
  loading: boolean
}

const Reports = ({ reports, loading }: ReportsProps) => {

  let content = false;
  if (reports > 0) {
    content = loading ? <LoadingSpinner type="badge" /> : reports;
  }

  return (
    <div>
      <CircularButton
        content={content}
        icon="file-alt"
        value="label.task"
      />
    </div>
  );
};

Reports.defaultProps = {
  reports: 0,
  loading: false
}

export default Reports;
