import React from 'react';
import constants from '../../../GP4You/constants';
import TableFieldValue from './TableFieldValue.tsx';

export default {
    title: `${constants.menuPath}/Table/Row/TableFieldValue`,
    component: TableFieldValue,
    argTypes: {
        tableField: {
          control: {
            type: 'object',
          },
          defaultValue: {
            isOccurrence: false,
            dataItem: {
              type: 'boolean',
              or: ['X', '']
            },
            label: 'message',
            translatedValue: true,      
            isDateValue:false ,
            isTimeValue:false,
            withDraftIcon:false ,
            withFileIcon:false,
            withColor:false
          }
        },
        object: {
          control: {
            type: 'object',
          },
          defaultValue: {
            date: "2022-01-01" , time : "1208" ,message: "message"
          }
        },
        
        color : {
          control : 'radio',
          options : ['green' , 'red' , 'orange']
        }
      }
};

export const _TableFieldValue_ = (args) => <TableFieldValue {...args} />;

_TableFieldValue_.bind({});
_TableFieldValue_.args = {

}