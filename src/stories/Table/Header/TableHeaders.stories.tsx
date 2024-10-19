import React from 'react';
import constants from '../../../GP4You/constants';
import TableHeaders from './TableHeaders.tsx';

export default {
    title: `${constants.menuPath}/Table/Header/TableHeaders`,
    component: TableHeaders,
    argTypes : {
        selectAll : {control : 'boolean'},
        selectedLabels : {
            table : {disable : true}
        },
        handleSort : {
            table : {disable : true}
        },
        fields: {
            control: {
              type: 'object',
            },
            defaultValue: [
                { selectable: true, label: "selected" },
                { selectable: false, label: "date" },
                { selectable: false, label: "gpID" },
                { selectable: false, label: "message" },
                { selectable: false, label: "recipient" }
              ]
        },
        sort : {
            control: {
              type: 'object',
            },
            defaultValue: { direction : "asc" }
              
        },
    }
};

export const _TableHeaders_ = (args) => <TableHeaders {...args} />;

_TableHeaders_.bind({});
_TableHeaders_.args = {
}