import React from 'react';
import constants from '../../../GP4You/constants';
import YearOptions from './YearOptions.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Time/YearOptions`,
    component: YearOptions,
    argTypes : {
        numberValues : {
            table : {disable : true}
        }
    }
};

export const _YearOptions_ = (args) => <YearOptions {...args} />;

_YearOptions_.bind({});
_YearOptions_.args = {}