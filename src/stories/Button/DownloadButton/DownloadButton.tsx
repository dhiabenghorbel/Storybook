import React from 'react';
import Tooltip from '../../Tooltip/Tooltip.tsx';
import Icon from '../../Icon/Icon.tsx';

interface DownloadButtonProps {
  onClick : Function,
  light : boolean
}

const DownloadButton = ({onClick , light} : DownloadButtonProps) => (
  <div className="flex-row-start cursor-pointer" >
    <Tooltip position="bottom" text="Download">
      <Icon onClick={onClick} name="cloud-download-alt" light={light}/>
    </Tooltip>
  </div>
);

DownloadButton.defaultProps = {
  onClick: () => {},
  light : false
};

export default DownloadButton;
