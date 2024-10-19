import React from 'react';
import constants from '../../../GP4You/constants';
import HamburgerButton from './HamburgerButton.tsx';

export default {
    title: `${constants.menuPath}/Button/HamburgerButton`,
    component: HamburgerButton,
    argTypes : {
        onClick : {
            table : {disable : true}
        },
        light : {
            table : {disable : true}
        }
    }
};

export const _HamburgerButton_ = (args) => <HamburgerButton {...args} />;

_HamburgerButton_.bind({});
_HamburgerButton_.args = {}