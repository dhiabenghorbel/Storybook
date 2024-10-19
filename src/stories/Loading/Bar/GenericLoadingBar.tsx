import React from 'react';
import './genericLoadingBar.scss';

const GenericLoadingBar = () => {
  return (
      <div className="progress-bar">
        <div className="progress-status"></div>
      </div>
  );
};

export default GenericLoadingBar;
