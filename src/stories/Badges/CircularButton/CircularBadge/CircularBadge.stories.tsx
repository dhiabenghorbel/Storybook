import React from 'react';
import constants from '../../../../GP4You/constants';
import CircularBadge from './CircularBadge.tsx';

export default {
    title: `${constants.menuPath}/Badges/CircularBadge`,
    component: CircularBadge,
    argTypes : {
        content : {
            control : 'number'
        },
        active : {
            control : 'boolean'
        },
        displaced : {
            table : {disable : true}
        }
    }
};

export const _CircularBadge_ = (args) => <CircularBadge {...args} />;

_CircularBadge_.bind({});