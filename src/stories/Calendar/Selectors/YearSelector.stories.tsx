import React from 'react';
import constants from '../../../GP4You/constants';
import YearSelector from './YearSelector.tsx';

export default {
    title: `${constants.menuPath}/Calendar/Selectors/YearSelector`,
    component: YearSelector,
    argTypes : {
        onChange : {
            table : {disable : true}
        },
        currentYear: {
            table : {disable : true}
        }
    }
};

export const _YearSelector_ = (args) => <YearSelector {...args} />;

_YearSelector_.bind({});
_YearSelector_.args = {

}