import React from 'react';
import constants from '../../../GP4You/constants';
import Requests from './Requests.tsx';

export default {
    title: `${constants.menuPath}/Badges/Requests`,
    component: Requests
};

export const _Requests_ = (args) => <Requests {...args} />;

_Requests_.bind({});