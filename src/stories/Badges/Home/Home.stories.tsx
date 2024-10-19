import React from 'react';
import constants from '../../../GP4You/constants';
import Home from './Home.tsx';

export default {
    title: `${constants.menuPath}/Badges/Home`,
    component: Home
};

export const _Home_ = (args) => <Home {...args} />;

_Home_.bind({});