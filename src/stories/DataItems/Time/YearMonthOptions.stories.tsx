import React from 'react';
import constants from '../../../GP4You/constants';
import YearMonthOptions from './YearMonthOptions.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Time/YearMonthOptions`,
    component: YearMonthOptions,
};

export const _YearMonthOptions_ = (args) => <YearMonthOptions {...args} />;

_YearMonthOptions_.bind({});
_YearMonthOptions_.args = {}