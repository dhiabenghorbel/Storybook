import React, { CSSProperties } from 'react';
import Icon from '../../Icon/Icon.tsx';

interface RefreshButtonProps {
  left: boolean,
  right: boolean,
  light : boolean
}


const RefreshButton = ({ left, right, light }: RefreshButtonProps) => {
  const position: CSSProperties = left
    ? { float: 'left', cursor: 'pointer' }
    : right
      ? { float: 'right', cursor: 'pointer' }
      : { float: 'left', cursor: 'pointer' };

  return (
    <div style={position}>
      <Icon  name="redo" style={{margin: '0', fontSize: '16px', verticalAlign: 'middle'}}light={light}/>
    </div>
  );
};

RefreshButton.defaultProps = {
  left: false,
  right: false,
  light : false
};

export default RefreshButton;
