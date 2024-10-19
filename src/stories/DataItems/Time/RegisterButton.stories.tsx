import React from 'react';
import constants from '../../../GP4You/constants';
import RegisterButton from './RegisterButton.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Time/RegisterButton`,
    component: RegisterButton,
    argTypes : {
        color : {
            control : { type : 'radio'},
            options : ["green","red"]
        },
        label : {
            control : {type : 'text'}
        }
    }
};

export const _RegisterButton_ = (args) => <RegisterButton {...args} />;

_RegisterButton_.bind({});
_RegisterButton_.args = {}