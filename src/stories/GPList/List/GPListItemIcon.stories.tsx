import React from 'react';
import constants from '../../../GP4You/constants';
import GPListItemIcon from './GPListItemIcon.tsx';

export default {
    title: `${constants.menuPath}/GPList/List/GPListItemIcon`,
    component: GPListItemIcon,
    argTypes : {
        name : {
            control : { type : 'radio'},
            options : ["AGD05LM0","AGC05E00","AGC05CE0"]
        }
    }

};

export const _GPListItemIcon_ = (args) => <GPListItemIcon  {...args} />;

_GPListItemIcon_.bind({}); 

_GPListItemIcon_.args = {
}