import React from 'react';
import constants from '../../../GP4You/constants';
import TableRowCustom from './TableRowCustom.tsx';

export default {
    title: `${constants.menuPath}/Table/Row/TableRowCustom`,
    component: TableRowCustom,
    argTypes : {
        handleClick : {
            table : { disable : true }
        },
        handleSelection : {
            table : { disable : true }
        },
        selected : {
          table : { disable : true }
        },
        fields : {
          table : { disable : true }
        },
        object: {
          control: {
            type: 'object',
          },
          defaultValue: {
            date: "2023/03/10" , gpid: "ASW0ESE0" , message: "MESSAGE" , recipient: "Manager"
          }
        },
        backgroundColor : {
          control : 'radio',
          options : ["transparent" , "pending" , "delete"]
        },
      }
};

export const _TableRowCustom_ = (args) => <TableRowCustom {...args} />;

_TableRowCustom_.bind({});
_TableRowCustom_.args = {}