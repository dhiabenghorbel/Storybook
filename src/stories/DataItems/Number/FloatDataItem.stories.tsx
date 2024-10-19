import React from 'react';
import constants from '../../../GP4You/constants';
import FloatDataItem from './FloatDataItem.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Number/FloatDataItem`,
    component: FloatDataItem,
    argTypes : {
        name : {
            control : {type : "text"}
        },
        value : {
            control : {type : "text"}
        },
        readOnly : {
            control : {type : "boolean"}
        },
        required : {
            control : {type : "boolean"}
        },
        hidden : {
            control : {type : "boolean"}
        },
        hideIfNoValue : {
            control : {type : "boolean"}
        },
    }
};

export const _FloatDataItem_ = (args) => <FloatDataItem {...args} />;

_FloatDataItem_.bind({});
_FloatDataItem_.args = {}