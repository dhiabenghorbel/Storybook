import React from 'react';
import constants from '../../../GP4You/constants';
import DateRangePicker from './DateRangePicker.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Time/DateRangePicker`,
    component: DateRangePicker
};

export const _DateRangePicker_ = (args) => <DateRangePicker {...args} />;

_DateRangePicker_.bind({});
_DateRangePicker_.args = {}