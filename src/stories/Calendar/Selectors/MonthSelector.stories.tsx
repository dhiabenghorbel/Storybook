import React from 'react';
import constants from '../../../GP4You/constants';
import MonthSelector from './MonthSelector.tsx';

export default {
    title: `${constants.menuPath}/Calendar/Selectors/MonthSelector`,
    component: MonthSelector,
    argTypes : {
      withArrows : {
        control : {type : 'boolean'}
      },
      months : {
        table : {disable : true}
      },
      currentMonth : {
        table : {disable : true}
      },
    }
    
};

export const _MonthSelector_ = (args) => <MonthSelector {...args} />;

_MonthSelector_.bind({});
_MonthSelector_.args = {

}