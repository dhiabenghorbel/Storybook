import React from 'react';
import constants from '../../../GP4You/constants';
import CalendarHeaders from './CalendarHeaders.tsx';

export default {
    title: `${constants.menuPath}/Calendar/Monthly/CalendarHeaders`,
    component: CalendarHeaders,
    argTypes : {
        days : {
            table : {disable : true}
        }
    }
};

export const _CalendarHeaders_ = (args) => <CalendarHeaders {...args} />;

_CalendarHeaders_.bind({});
_CalendarHeaders_.args = {}