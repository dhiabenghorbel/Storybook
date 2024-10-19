import React from 'react';
import constants from '../../../GP4You/constants';
import Sidebar from './Sidebar.tsx';

export default {
    title: `${constants.menuPath}/Layout/Sidebar`,
    component: Sidebar
};

export const _Sidebar_ = (args) => <Sidebar {...args} />;

_Sidebar_.bind({});
_Sidebar_.args = {}