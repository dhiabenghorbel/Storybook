import React from 'react';
import constants from '../../../GP4You/constants';
import FixedPlugin from './FixedPlugin.tsx';

export default {
    title: `${constants.menuPath}/Layout/FixedPlugin`,
    component: FixedPlugin,
    
};

export const _FixedPlugin_ = (args) => <FixedPlugin {...args} />;

_FixedPlugin_.bind({});
_FixedPlugin_.args = {

}