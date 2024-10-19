import React from 'react';
import constants from '../../../GP4You/constants';
import HeaderToolbar from './HeaderToolbar.tsx';

export default {
    title: `${constants.menuPath}/Layout/Toolbar/HeaderToolbar`,
    component: HeaderToolbar,
      argTypes : {
        isMobile : {
            table : {disable : true}
        }
    }    
};

export const _HeaderToolbar_ = (args) => <HeaderToolbar {...args} />;

_HeaderToolbar_.bind({});
_HeaderToolbar_.args = {}