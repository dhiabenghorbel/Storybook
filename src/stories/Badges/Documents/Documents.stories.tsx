import React from 'react';
import constants from '../../../GP4You/constants';
import Documents from './Documents.tsx';

export default {
    title: `${constants.menuPath}/Badges/Documents`,
    component: Documents
};

export const _Documents_ = (args) => <Documents {...args} />;

_Documents_.bind({});