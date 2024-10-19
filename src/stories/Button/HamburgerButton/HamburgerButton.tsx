import React from 'react';
import TOPICS from '../../../app/services/topics';
import Icon from '../../Icon/Icon.tsx';
import Tooltip from '../../Tooltip/Tooltip.tsx';

interface HamburgerButtonProps {
  light : boolean
}

const HamburgerButton = ({light} : HamburgerButtonProps) => {
  return (
    <div className="flex-row-start cursor-pointer" >
      <Tooltip position="bottom" text="menu" >
        <Icon name="bars"  onClick={() => TOPICS.SIDEBAR_TOPIC.next('toggle')} light={light}/>
      </Tooltip>
    </div>
  );
};

HamburgerButton.defaultProps = {
  light : false
}

export default HamburgerButton;
