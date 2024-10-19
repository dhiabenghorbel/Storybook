import React from 'react';
import constants from '../../../GP4You/constants';
import CloseButton from './CloseButton.tsx';

export default {
    title: `${constants.menuPath}/Button/CloseButton`,
    component: CloseButton,
    argTypes : {
        onClick : {
            table : {disable : true}
        },
        light : {
            table : {disable : true}
        }
    }
};

export const _CloseButton_ = (args) => <CloseButton {...args} />;

_CloseButton_.bind({});
_CloseButton_.args = {}