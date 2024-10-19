import React from 'react';
import constants from '../../../GP4You/constants';
import Notifications from './Notifications.tsx';

export default {
    title: `${constants.menuPath}/Badges/Notifications`,
    component: Notifications
};

export const _Notifications_ = (args) => <Notifications {...args} />;

_Notifications_.bind({});