import React from 'react';
import constants from '../../../GP4You/constants';
import TableOccurrenceValue from './TableOccurrenceValue.tsx';

export default {
    title: `${constants.menuPath}/Table/Row/TableOccurrenceValue`,
    component: TableOccurrenceValue,
    argTypes : {
        onClick : {
            table : {disable : true}
        },
        id : {
            table : {disable : true}
        },
        occurrence : {
            table : {disable : true}
        },
        clickable : {
            table : {disable : true}
        },
        loading : {
            control : 'boolean',
        },
        val : {
            control : 'text',
        },
        dataItem: {
            control: {
              type: 'object',
            },
            defaultValue: {
                type: 'boolean',
                or: ['X', ''],
                color:"red",
                name:""
              },
            }
    }
    
};

export const _TableOccurrenceValue_ = (args) => <TableOccurrenceValue {...args} />;

_TableOccurrenceValue_.bind({});
_TableOccurrenceValue_.args = {

}