import React from 'react';
import constants from '../../../GP4You/constants';
import Checkbox from './Checkbox.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Boolean/Checkbox`,
    component: Checkbox,
      argTypes : {
        id : {
            table : {disable : true}
        },
        onChange : {
            table : {disable : true}
        }
    } 
};

export const _Checkbox_ = (args) => <Checkbox {...args} />;

_Checkbox_.bind({});
_Checkbox_.args = {}