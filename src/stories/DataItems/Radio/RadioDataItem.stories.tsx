import React from 'react';
import constants from '../../../GP4You/constants';
import RadioDataItem from './RadioDataItem.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Radio/RadioDataItem`,
    component: RadioDataItem,
    argTypes : {
        readOnly : {
            control : {type : 'boolean'},
        },
        RadioDataItemOptions : {
            control : {type : 'object'},
            defaultValue : [{value : "rad1" , label :"Radio 1"},{value : "rad2" , label :"Radio 2"}]
        },
        label : {
            control : {type : 'text'},
        },
    }
};

export const _RadioDataItem_ = (args) => <RadioDataItem {...args} />;

_RadioDataItem_.bind({});
_RadioDataItem_.args = {}