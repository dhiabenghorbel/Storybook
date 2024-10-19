import React from 'react';
import constants from '../../../GP4You/constants';
import CalendarLegend from './CalendarLegend.tsx';

export default {
    title: `${constants.menuPath}/Calendar/Legend/CalendarLegend`,
    component: CalendarLegend,
    argTypes : {
      gpid : {
        table : {disable : true}
      }
    }
};

export const _CalendarLegend_ = (args) => <CalendarLegend {...args} />;

_CalendarLegend_.bind({});
_CalendarLegend_.args = {

}