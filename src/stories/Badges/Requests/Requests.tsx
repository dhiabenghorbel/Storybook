import React from "react";
import CircularButton from "./../CircularButton/CircularButton.tsx";
import LoadingSpinner from '../../Loading/LoadingSpinner.tsx'

interface RequestsProps {
  /**
   * Number of elements
   */
  requests: number,
  /**
   * Loading action while component finishing load
   */
  loading: boolean
}

const Requests = ({ requests, loading }: RequestsProps) => {

  let content = false;
  if (requests > 0) {
    content = loading ? <LoadingSpinner type="badge" /> : requests;
  }

  return (
    <div>
      <CircularButton
        content={content}
        icon="location-arrow"
        value="label.task"
      />
    </div>
  );
};

Requests.defaultProps = {
  requests: 0,
  loading: false
}

export default Requests;
