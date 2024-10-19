import React from 'react';
import constants from '../../../GP4You/constants';
import LogoutButton from './LogoutButton.tsx';

export default {
    title: `${constants.menuPath}/Button/LogoutButton`,
    component: LogoutButton,
    argTypes : {
        light : {
            table : {disable : true}
        }
    }
};

export const _LogoutButton_ = (args) => <LogoutButton {...args} />;

_LogoutButton_.bind({});
_LogoutButton_.args = {}