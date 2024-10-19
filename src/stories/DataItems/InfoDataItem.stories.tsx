import React from 'react';
import constants from '../../GP4You/constants';
import InfoDataItem from './InfoDataItem.tsx';

export default {
    title: `${constants.menuPath}/DataItems/InfoDataItem`,
    component: InfoDataItem,
    argTypes : {
        value : {
            control : {type : 'text'},
            defaultValue : "info"
        },
        bold : {
            control : {type : 'boolean'}
        },
        red : {
            control : {type : 'boolean'}
        },
    } 
};

export const _InfoDataItem_ = (args) => <InfoDataItem {...args} />;

_InfoDataItem_.bind({});
_InfoDataItem_.args = {}