import React from 'react';
import constants from '../../../GP4You/constants';
import ReportDataItem from './ReportDataItem.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Report/ReportDataItem`,
    component: ReportDataItem,
    argTypes : {
        label : {
            control : {type : 'text'}
        },
        button : {
            control : {type : 'boolean'}
        },
        showOutputs : {
            control : {type : 'boolean'}
        },
        executed : {
            control : {type : 'boolean'}
        },
        outputs : {
            control : {type : 'object'},
            defaultValue : [{label : "output 1"}, {label : "output 2"}]
        },
    } 
};

export const _ReportDataItem_ = (args) => <ReportDataItem {...args} />;

_ReportDataItem_.bind({});
_ReportDataItem_.args = {}