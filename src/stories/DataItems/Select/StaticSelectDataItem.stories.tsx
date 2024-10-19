import React from 'react';
import constants from '../../../GP4You/constants';
import StaticSelectDataItem from './StaticSelectDataItem.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Select/StaticSelectDataItem`,
    component: StaticSelectDataItem,
    argTypes : {
        label : {
            control : {type : "text"}
        },
        readOnly : {
            control : {type : "boolean"}
        },
        bold : {
            control : {type : "boolean"}
        },
        required : {
            control : {type : "boolean"}
        },
        hidden : {
            control : {type : "boolean"}
        },
        hideIfNoValue : {
            table : {disable : true}
        },
    }
};

export const _StaticSelectDataItem_ = (args) => <StaticSelectDataItem {...args} />;

_StaticSelectDataItem_.bind({});
_StaticSelectDataItem_.args = {}