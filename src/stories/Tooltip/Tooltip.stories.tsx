import React from 'react';
import constants from '../../GP4You/constants';
import Tooltip from './Tooltip.tsx';

export default {
    title: `${constants.menuPath}/Tooltip`,
    component: Tooltip,
    argTypes : {
        withoutTranslation : {
            table : { disable : true}
        }
    }
};

export const _Tooltip_ = (args) => (
    <div className="page-container">
      <Tooltip {...args} />
    </div>
  );
  
_Tooltip_.bind({});
_Tooltip_.args = {}