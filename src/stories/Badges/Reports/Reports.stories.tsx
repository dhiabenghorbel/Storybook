import React from 'react';
import constants from '../../../GP4You/constants';
import Reports from './Reports.tsx';

export default {
    title: `${constants.menuPath}/Badges/Reports`,
    component: Reports
};

export const _Reports_ = (args) => <Reports {...args} />;

_Reports_.bind({});