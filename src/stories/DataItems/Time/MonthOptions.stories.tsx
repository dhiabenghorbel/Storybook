import React from 'react';
import constants from '../../../GP4You/constants';
import MonthOptions from './MonthOptions.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Time/MonthOptions`,
    component: MonthOptions,
    argTypes : {
        oneDigitFormat : {
            table : {disable : true}
        },
        inclusiveCounting : {
            table : {disable : true}
        }
    }
};

export const _MonthOptions_ = (args) => <MonthOptions {...args} />;

_MonthOptions_.bind({});
_MonthOptions_.args = {}