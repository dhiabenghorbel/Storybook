import React from 'react';
import constants from '../../../GP4You/constants';
import Tasks from './Tasks.tsx';

export default {
    title: `${constants.menuPath}/Badges/Tasks`,
    component: Tasks
};

export const _Tasks_ = (args) => <Tasks {...args} />;

_Tasks_.bind({});