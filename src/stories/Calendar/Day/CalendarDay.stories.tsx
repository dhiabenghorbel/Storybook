import React from 'react';
import constants from '../../../GP4You/constants';
import CalendarDay from './CalendarDay.tsx';

export default {
    title: `${constants.menuPath}/Calendar/Day/CalendarDay`,
    component: CalendarDay,
    argTypes: {
      absenceDays :{
        type : 'object',
        defaultValue : {
          code:"",
          halfDayType:" ",
          isHalfDay:false,
          isPending:false,
          reason:"",
          style1:"",
          style2:undefined},
      },
      showDate : {
        control : {
        type : 'boolean'
      }
    },
    onClick : {
      table : {disable : true}
    },
    day : {
      control : {type : 'date'}
    },
    month: {
      table : {disable : true}
    }
  }   
};

export const _CalendarDay_ = (args) => <CalendarDay {...args} />;

_CalendarDay_.bind({});
_CalendarDay_.args = {

}